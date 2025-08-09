// Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        
        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
            } else {
                body.setAttribute('data-theme', 'dark');
            }
        });
        
        // Get control elements
        const morningLightTime = document.getElementById('morning-light-time');
        const morningLightIntensity = document.getElementById('morning-light-intensity');
        const eveningScreenTime = document.getElementById('evening-screen-time');
        const eveningDimLights = document.getElementById('evening-dim-lights');
        const stressLevel = document.getElementById('stress-level');
        const sleepDuration = document.getElementById('sleep-duration');
        
        // Value display elements
        const lightTimeValue = document.getElementById('light-time-value');
        const lightIntensityValue = document.getElementById('light-intensity-value');
        const screenTimeValue = document.getElementById('screen-time-value');
        const dimLightsValue = document.getElementById('dim-lights-value');
        const stressLevelValue = document.getElementById('stress-level-value');
        const sleepDurationValue = document.getElementById('sleep-duration-value');
        
        // Graph elements
        const userCurve = document.getElementById('user-curve');
        const healthyCurve = document.getElementById('healthy-curve');
        const cortisolStatus = document.getElementById('cortisol-status');
        
        // Initialize graph
        function initializeGraph() {
            // Draw grid lines
            const grid = document.getElementById('grid');
            for (let i = 1; i < 24; i++) {
                const x = 50 + (i * 29.17); // 700px width / 24 hours
                const gridLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                gridLine.setAttribute('x1', x);
                gridLine.setAttribute('y1', 50);
                gridLine.setAttribute('x2', x);
                gridLine.setAttribute('y2', 350);
                gridLine.setAttribute('class', 'grid-line');
                grid.appendChild(gridLine);
            }
            
            // Draw horizontal grid lines
            for (let i = 1; i < 6; i++) {
                const y = 50 + (i * 50);
                const gridLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                gridLine.setAttribute('x1', 50);
                gridLine.setAttribute('y1', y);
                gridLine.setAttribute('x2', 750);
                gridLine.setAttribute('y2', y);
                gridLine.setAttribute('class', 'grid-line');
                grid.appendChild(gridLine);
            }
            
            // Draw time labels
            const timeLabels = document.getElementById('time-labels');
            for (let i = 0; i <= 24; i += 3) {
                const x = 50 + (i * 29.17);
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', x);
                text.setAttribute('y', 370);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('class', 'time-marker');
                text.textContent = `${i}:00`;
                timeLabels.appendChild(text);
            }
            
            // Draw cortisol level labels
            const cortisolLabels = document.getElementById('cortisol-labels');
            for (let i = 0; i <= 100; i += 20) {
                const y = 350 - (i * 3);
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', 40);
                text.setAttribute('y', y);
                text.setAttribute('text-anchor', 'end');
                text.setAttribute('class', 'cortisol-level');
                text.textContent = `${i}%`;
                cortisolLabels.appendChild(text);
            }
            
            // Draw healthy cortisol curve
            drawHealthyCurve();
            
            // Draw initial user curve
            updateUserCurve();
        }
        
        // Draw healthy cortisol curve
        function drawHealthyCurve() {
            let path = 'M 50,200 ';
            
            for (let hour = 0; hour <= 24; hour += 0.5) {
                const x = 50 + (hour * 29.17);
                // Healthy cortisol curve: peak at 8 AM (80%), trough at midnight (20%)
                let y;
                if (hour < 8) {
                    // Rising from midnight to 8 AM
                    y = 200 - (hour / 8) * 180;
                } else if (hour < 20) {
                    // Declining from 8 AM to 8 PM
                    y = 20 + ((hour - 8) / 12) * 180;
                } else {
                    // Continued decline to midnight
                    y = 200 + ((hour - 20) / 4) * 60;
                }
                
                path += `L ${x},${y} `;
            }
            
            healthyCurve.setAttribute('d', path);
        }
        
        // Update user curve based on parameters
        function updateUserCurve() {
            // Get parameter values
            const lightTime = parseInt(morningLightTime.value);
            const lightIntensity = parseInt(morningLightIntensity.value);
            const screenTime = parseFloat(eveningScreenTime.value);
            const dimLights = parseFloat(eveningDimLights.value);
            const stress = parseInt(stressLevel.value);
            const sleep = parseFloat(sleepDuration.value);
            
            // Update value displays
            lightTimeValue.textContent = lightTime;
            lightIntensityValue.textContent = lightIntensity;
            screenTimeValue.textContent = screenTime;
            dimLightsValue.textContent = dimLights;
            stressLevelValue.textContent = stress;
            sleepDurationValue.textContent = sleep;
            
            // Calculate curve adjustments
            const morningPeak = Math.min(80, 40 + (lightTime / 120) * 20 + (lightIntensity / 20000) * 20);
            const eveningLevel = Math.max(20, 10 + screenTime * 15 - dimLights * 10 + stress * 3);
            const rhythmStrength = Math.max(20, 100 - stress * 8 - (8 - sleep) * 10);
            
            let path = 'M 50,200 ';
            let status = 'Healthy Rhythm';
            let statusClass = 'healthy';
            
            for (let hour = 0; hour <= 24; hour += 0.5) {
                const x = 50 + (hour * 29.17);
                let y;
                
                if (hour < 8) {
                    // Rising from midnight to 8 AM
                    const riseRate = morningPeak / 8;
                    y = 200 - (hour * riseRate * 2.25);
                } else if (hour < 20) {
                    // Declining from 8 AM to 8 PM
                    const declineRate = (morningPeak - eveningLevel) / 12;
                    y = 20 + morningPeak * 2.25 + ((hour - 8) * declineRate * 2.25);
                } else {
                    // Continued decline to midnight
                    const eveningDecline = (eveningLevel - 20) / 4;
                    y = 200 + ((hour - 20) * eveningDecline * 2.25);
                }
                
                // Add rhythm strength effect (flattens curve under stress)
                const rhythmEffect = 1 - (1 - rhythmStrength/100) * Math.abs(hour - 12) / 12;
                y = 200 + (y - 200) * rhythmEffect;
                
                path += `L ${x},${y} `;
            }
            
            // Determine status
            if (morningPeak < 60 || eveningLevel > 40 || rhythmStrength < 60) {
                status = 'Suboptimal Rhythm';
                statusClass = 'warning';
            }
            
            // Update curve and status
            userCurve.setAttribute('d', path);
            cortisolStatus.textContent = status;
            cortisolStatus.className = `cortisol-status ${statusClass}`;
        }
        
        // Add event listeners to controls
        morningLightTime.addEventListener('input', updateUserCurve);
        morningLightIntensity.addEventListener('input', updateUserCurve);
        eveningScreenTime.addEventListener('input', updateUserCurve);
        eveningDimLights.addEventListener('input', updateUserCurve);
        stressLevel.addEventListener('input', updateUserCurve);
        sleepDuration.addEventListener('input', updateUserCurve);
        
        // Initialize the graph on page load
        window.addEventListener('load', initializeGraph);