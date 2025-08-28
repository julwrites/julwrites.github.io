// Get control elements
const eatingWindowSlider = document.getElementById('eating-window');
const firstMealSlider = document.getElementById('first-meal');
const caloricIntakeSlider = document.getElementById('caloric-intake');

const eatingWindowValue = document.getElementById('eating-window-value');
const firstMealValue = document.getElementById('first-meal-value');
const caloricIntakeValue = document.getElementById('caloric-intake-value');

// Health Indicators
const weightLossCard = document.getElementById('weight-loss-card');
const hormoneHealthCard = document.getElementById('hormone-health-card');
const organHealthCard = document.getElementById('organ-health-card');

const weightLossIndicator = document.getElementById('weight-loss-indicator');
const hormoneHealthIndicator = document.getElementById('hormone-health-indicator');
const organHealthIndicator = document.getElementById('organ-health-indicator');

// Timeline visualization
const eatingWindowBar = document.getElementById('eating-window-bar');
const timeLabels = document.querySelector('.time-labels');

function updateTimeline(firstMeal, eatingWindow, caloricIntake) {
    const startPercent = (firstMeal / 24) * 100;
    const widthPercent = (eatingWindow / 24) * 100;
    eatingWindowBar.style.left = `${startPercent}%`;
    eatingWindowBar.style.width = `${widthPercent}%`;

    // Set opacity based on caloric intake
    const opacity = Math.min(1, caloricIntake / 2500); // Max opacity at 2500 calories
    eatingWindowBar.style.opacity = opacity;

    // Generate time labels
    timeLabels.innerHTML = '';
    for (let hour = 0; hour < 24; hour += 3) {
        const label = document.createElement('span');
        label.textContent = `${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour} ${hour >= 12 ? 'PM' : 'AM'}`;
        timeLabels.appendChild(label);
    }
}

// Update functions
function updateValues() {
    const eatingWindow = parseInt(eatingWindowSlider.value);
    const firstMeal = parseInt(firstMealSlider.value);
    const caloricIntake = parseInt(caloricIntakeSlider.value);
    
    // Update displays
    eatingWindowValue.textContent = `${eatingWindow} hours`;
    firstMealValue.textContent = `${firstMeal}:00 AM`;
    caloricIntakeValue.textContent = `${caloricIntake} calories`;

    // --- Health Indicator Calculations ---

    // 1. Weight/Fat Loss Potential
    const fastingHours = 24 - eatingWindow;
    const caloricDeficit = 2000 - caloricIntake; // Assuming 2000 is maintenance
    const alignmentFactor = (firstMeal > 8 && (firstMeal + eatingWindow) < 22) ? 1 : 0.5;
    let weightLossPotential = (fastingHours * (caloricDeficit / 100) * alignmentFactor).toFixed(1);

    if (weightLossPotential > 5) {
        weightLossIndicator.textContent = 'High';
        weightLossCard.className = 'indicator-card optimal';
    } else if (weightLossPotential > 2) {
        weightLossIndicator.textContent = 'Moderate';
        weightLossCard.className = 'indicator-card good';
    } else if (weightLossPotential > 0) {
        weightLossIndicator.textContent = 'Low';
        weightLossCard.className = 'indicator-card moderate';
    } else {
        weightLossIndicator.textContent = 'None';
        weightLossCard.className = 'indicator-card disrupted';
    }

    // 2. Hormone & Mood Health
    const windowConsistency = 1; // Assuming consistent for now
    const lateEatingHours = Math.max(0, (firstMeal + eatingWindow) - 21); // Hours past 9pm
    const caloricStability = 1 - (Math.abs(2000 - caloricIntake) / 1000); // % deviation from maintenance
    let hormoneHealthScore = (windowConsistency * caloricStability) / (1 + lateEatingHours * 0.5);

    if (hormoneHealthScore > 0.8) {
        hormoneHealthIndicator.textContent = 'Optimal';
        hormoneHealthCard.className = 'indicator-card optimal';
    } else if (hormoneHealthScore > 0.6) {
        hormoneHealthIndicator.textContent = 'Good';
        hormoneHealthCard.className = 'indicator-card good';
    } else if (hormoneHealthScore > 0.4) {
        hormoneHealthIndicator.textContent = 'Moderate';
        hormoneHealthCard.className = 'indicator-card moderate';
    } else {
        hormoneHealthIndicator.textContent = 'Disrupted';
        hormoneHealthCard.className = 'indicator-card disrupted';
    }

    // 3. Organ Health (Liver)
    const fastingDuration = 24 - eatingWindow;
    const caloricLoad = caloricIntake / 2000; // Relative to maintenance
    let organHealthScore = (fastingDuration / 16) / caloricLoad; // 16 hours is a good target

    if (organHealthScore > 1) {
        organHealthIndicator.textContent = 'Optimal';
        organHealthCard.className = 'indicator-card optimal';
    } else if (organHealthScore > 0.7) {
        organHealthIndicator.textContent = 'Good';
        organHealthCard.className = 'indicator-card good';
    } else if (organHealthScore > 0.5) {
        organHealthIndicator.textContent = 'Moderate';
        organHealthCard.className = 'indicator-card moderate';
    } else {
        organHealthIndicator.textContent = 'Poor';
        organHealthCard.className = 'indicator-card disrupted';
    }
    
    // Update the timeline visualization
    updateTimeline(firstMeal, eatingWindow, caloricIntake);
}

// Add event listeners
eatingWindowSlider.addEventListener('input', updateValues);
firstMealSlider.addEventListener('input', updateValues);
caloricIntakeSlider.addEventListener('input', updateValues);

// Initialize
updateValues();