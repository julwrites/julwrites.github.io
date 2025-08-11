// Quiz state
let currentQuestion = 0;
let scores = {
    sanguine: 0,
    choleric: 0,
    melancholic: 0,
    phlegmatic: 0
};

// Temperament data
const temperamentData = {
    sanguine: {
        name: "Sanguine",
        subtitle: "The Social Optimist",
        color: "#FF6B35",
        description: "Sanguines are energetic, enthusiastic, and highly social individuals who bring joy and excitement to any situation.",
        strengths: ["Enthusiastic and optimistic", "Excellent people skills", "Adaptable and flexible", "Spontaneous and fun-loving", "Natural motivator", "Charismatic and charming"],
        challenges: ["Can be disorganized", "Struggles with follow-through", "May be impulsive", "Needs constant approval", "Difficulty with routine tasks", "May lack depth in relationships"],
        relationships: "Warm, expressive, and fun-loving partners who bring energy to relationships but may struggle with commitment and depth.",
        work: "Excel in people-oriented roles, creative fields, and positions requiring enthusiasm and social interaction."
    },
    choleric: {
        name: "Choleric",
        subtitle: "The Natural Leader",
        color: "#DC143C",
        description: "Cholerics are born leaders who are goal-oriented, decisive, and driven to achieve results in everything they do.",
        strengths: ["Natural leadership abilities", "Goal-oriented and results-driven", "Decisive and confident", "Independent and self-reliant", "Excellent problem-solver", "High energy and productivity"],
        challenges: ["Can be impatient", "May seem domineering", "Struggles with criticism", "Can be insensitive to others", "Tendency to micromanage", "May neglect relationships for goals"],
        relationships: "Loyal and protective partners who take charge but may need to work on being less controlling and more empathetic.",
        work: "Natural executives, entrepreneurs, and leaders who excel in challenging, goal-oriented environments."
    },
    melancholic: {
        name: "Melancholic",
        subtitle: "The Thoughtful Perfectionist",
        color: "#4A90E2",
        description: "Melancholics are deep thinkers who value quality, loyalty, and meaningful connections with a strong sense of purpose.",
        strengths: ["Analytical and detail-oriented", "High standards and quality focus", "Deeply loyal and committed", "Creative and artistic", "Thoughtful and empathetic", "Excellent long-term planning"],
        challenges: ["Prone to pessimism", "Tendency to overthink", "Perfectionist tendencies", "May be moody", "Sensitive to criticism", "Can be slow to make decisions"],
        relationships: "Devoted and thoughtful partners who seek deep, meaningful connections but may be prone to moodiness.",
        work: "Excel in roles requiring attention to detail, quality control, creative work, and analytical thinking."
    },
    phlegmatic: {
        name: "Phlegmatic",
        subtitle: "The Peaceful Mediator",
        color: "#28A745",
        description: "Phlegmatics are calm, steady, and reliable individuals who value peace, stability, and harmonious relationships.",
        strengths: ["Calm and steady demeanor", "Excellent mediator", "Reliable and consistent", "Patient and tolerant", "Good listener", "Works well under pressure"],
        challenges: ["May lack initiative", "Tends to avoid conflict", "Can be resistant to change", "May procrastinate", "Sometimes appears uninvolved", "Needs external motivation"],
        relationships: "Stable, supportive, and easy-going partners who provide consistency but may need encouragement to be more engaged.",
        work: "Excel in supportive roles, customer service, counseling, and positions requiring patience and stability."
    }
};

// Quiz questions
const questions = [
    {
        question: "When facing a new challenge, you typically:",
        answers: {
            sanguine: "Get excited and jump in enthusiastically",
            choleric: "Take charge and create an action plan",
            melancholic: "Analyze all possible outcomes first",
            phlegmatic: "Wait to see how others approach it"
        }
    },
    {
        question: "In social situations, you:",
        answers: {
            sanguine: "Love being the center of attention",
            choleric: "Naturally take the lead in conversations",
            melancholic: "Prefer deep, meaningful discussions",
            phlegmatic: "Listen more than you speak"
        }
    },
    {
        question: "Your ideal weekend would involve:",
        answers: {
            sanguine: "Spontaneous adventures with friends",
            choleric: "Accomplishing personal goals",
            melancholic: "Quiet time for hobbies or reflection",
            phlegmatic: "Relaxing at home with family"
        }
    },
    {
        question: "When making decisions, you tend to:",
        answers: {
            sanguine: "Go with your gut feeling quickly",
            choleric: "Make fast decisions based on goals",
            melancholic: "Carefully weigh all options",
            phlegmatic: "Take time and seek others' input"
        }
    },
    {
        question: "Your communication style is typically:",
        answers: {
            sanguine: "Animated and expressive",
            choleric: "Direct and to the point",
            melancholic: "Thoughtful and detailed",
            phlegmatic: "Calm and diplomatic"
        }
    },
    {
        question: "In a group project, you usually:",
        answers: {
            sanguine: "Motivate others and generate ideas",
            choleric: "Take charge and organize the work",
            melancholic: "Focus on quality and details",
            phlegmatic: "Support others and maintain harmony"
        }
    },
    {
        question: "When stressed, you typically:",
        answers: {
            sanguine: "Seek social support and distraction",
            choleric: "Work harder to solve the problem",
            melancholic: "Withdraw and analyze the situation",
            phlegmatic: "Try to maintain calm and avoid conflict"
        }
    },
    {
        question: "Your approach to planning is:",
        answers: {
            sanguine: "Flexible and adaptable to change",
            choleric: "Goal-focused with clear deadlines",
            melancholic: "Detailed and thoroughly organized",
            phlegmatic: "Prefer simple, stable routines"
        }
    },
    {
        question: "At work, you're most motivated by:",
        answers: {
            sanguine: "Variety, people interaction, and recognition",
            choleric: "Challenges, results, and achievements",
            melancholic: "Quality work, purpose, and depth",
            phlegmatic: "Stability, teamwork, and appreciation"
        }
    },
    {
        question: "When learning something new, you prefer to:",
        answers: {
            sanguine: "Learn through interaction and discussion",
            choleric: "Jump in and learn by doing",
            melancholic: "Study thoroughly before attempting",
            phlegmatic: "Learn at a comfortable, steady pace"
        }
    },
    {
        question: "Your energy level throughout the day is:",
        answers: {
            sanguine: "High peaks with some dramatic drops",
            choleric: "Consistently high and driven",
            melancholic: "Steady but can be affected by mood",
            phlegmatic: "Even and stable throughout"
        }
    },
    {
        question: "In conflicts, you tend to:",
        answers: {
            sanguine: "Try to lighten the mood and find compromise",
            choleric: "Address it head-on and seek resolution",
            melancholic: "Analyze the deeper issues involved",
            phlegmatic: "Avoid confrontation when possible"
        }
    },
    {
        question: "Your ideal work environment would be:",
        answers: {
            sanguine: "Dynamic with lots of people interaction",
            choleric: "Fast-paced with clear objectives",
            melancholic: "Quiet with time for deep work",
            phlegmatic: "Stable with supportive colleagues"
        }
    },
    {
        question: "When giving presentations, you:",
        answers: {
            sanguine: "Enjoy the spotlight and engage the audience",
            choleric: "Focus on delivering results and impact",
            melancholic: "Prepare thoroughly and share insights",
            phlegmatic: "Prefer to support others or work behind scenes"
        }
    },
    {
        question: "Your relationship with deadlines is:",
        answers: {
            sanguine: "Often rush at the last minute but manage",
            choleric: "Always meet them, sometimes early",
            melancholic: "Plan carefully to ensure quality delivery",
            phlegmatic: "Work steadily toward them without stress"
        }
    },
    {
        question: "When receiving criticism, you:",
        answers: {
            sanguine: "Take it personally but bounce back quickly",
            choleric: "Use it as motivation to prove yourself",
            melancholic: "Reflect deeply and may feel hurt",
            phlegmatic: "Accept it calmly and consider changes"
        }
    },
    {
        question: "Your social media usage tends to be:",
        answers: {
            sanguine: "Active sharing of fun moments and interactions",
            choleric: "Focused on achievements and professional content",
            melancholic: "Thoughtful posts with meaningful content",
            phlegmatic: "Passive consumption more than posting"
        }
    },
    {
        question: "In friendships, you value:",
        answers: {
            sanguine: "Fun, spontaneity, and shared adventures",
            choleric: "Loyalty, mutual respect, and shared goals",
            melancholic: "Deep connection, authenticity, and understanding",
            phlegmatic: "Stability, acceptance, and peaceful companionship"
        }
    },
    {
        question: "Your shopping style is typically:",
        answers: {
            sanguine: "Impulsive and influenced by trends",
            choleric: "Efficient and focused on specific needs",
            melancholic: "Research-heavy with careful consideration",
            phlegmatic: "Practical and guided by necessity"
        }
    },
    {
        question: "When traveling, you prefer:",
        answers: {
            sanguine: "Spontaneous trips with lots of activities",
            choleric: "Well-planned itineraries with must-see sights",
            melancholic: "Meaningful experiences with cultural depth",
            phlegmatic: "Relaxing destinations with minimal stress"
        }
    },
    {
        question: "Your reaction to change is usually:",
        answers: {
            sanguine: "Excited about new possibilities",
            choleric: "Focused on how to leverage it for success",
            melancholic: "Cautious and need time to process",
            phlegmatic: "Resistant but will adapt gradually"
        }
    },
    {
        question: "In meetings, you typically:",
        answers: {
            sanguine: "Contribute enthusiasm and creative ideas",
            choleric: "Drive toward decisions and action items",
            melancholic: "Ask thoughtful questions and raise concerns",
            phlegmatic: "Listen carefully and support consensus"
        }
    },
    {
        question: "Your email communication style is:",
        answers: {
            sanguine: "Friendly, casual, and conversational",
            choleric: "Brief, direct, and action-oriented",
            melancholic: "Detailed, polite, and well-structured",
            phlegmatic: "Courteous, gentle, and diplomatic"
        }
    },
    {
        question: "When faced with a boring task, you:",
        answers: {
            sanguine: "Try to make it fun or find someone to help",
            choleric: "Power through it quickly to get it done",
            melancholic: "Find meaning in it or perfect your approach",
            phlegmatic: "Complete it steadily without complaint"
        }
    },
    {
        question: "Your approach to goal-setting is:",
        answers: {
            sanguine: "Dream big but may change directions often",
            choleric: "Set ambitious targets and pursue aggressively",
            melancholic: "Create meaningful, well-planned objectives",
            phlegmatic: "Prefer simple, achievable goals"
        }
    },
    {
        question: "In romantic relationships, you tend to be:",
        answers: {
            sanguine: "Expressive, romantic, and need attention",
            choleric: "Devoted, protective, but may be demanding",
            melancholic: "Deeply loving but can be sensitive to criticism",
            phlegmatic: "Steady, supportive, and low-maintenance"
        }
    },
    {
        question: "Your preferred way to spend a vacation day is:",
        answers: {
            sanguine: "Trying new activities and meeting people",
            choleric: "Accomplishing something meaningful or adventurous",
            melancholic: "Pursuing personal interests or creative projects",
            phlegmatic: "Relaxing and enjoying simple pleasures"
        }
    },
    {
        question: "When organizing your living space, you:",
        answers: {
            sanguine: "Keep it lively but may be somewhat cluttered",
            choleric: "Maintain functional organization focused on efficiency",
            melancholic: "Create a detailed system and prefer everything perfect",
            phlegmatic: "Keep it comfortable and simply organized"
        }
    },
    {
        question: "Your leadership style tends to be:",
        answers: {
            sanguine: "Inspirational and enthusiastic",
            choleric: "Decisive and results-oriented",
            melancholic: "Thoughtful and standards-focused",
            phlegmatic: "Collaborative and supportive"
        }
    },
    {
        question: "When starting your day, you typically:",
        answers: {
            sanguine: "Feel excited about possibilities and interactions",
            choleric: "Review goals and prioritize important tasks",
            melancholic: "Need time to mentally prepare and reflect",
            phlegmatic: "Prefer a calm, predictable morning routine"
        }
    }
];

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Navigation functions
function startQuiz() {
    // Shuffle questions
    shuffle(questions);

    document.getElementById('welcome-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    
    document.getElementById('question-number').textContent = `Question ${currentQuestion + 1}`;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('progress-text').textContent = `Question ${currentQuestion + 1} of 30`;

    // Randomize answers
    const answers = Object.entries(question.answers);
    shuffle(answers);

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = ''; // Clear previous answers

    answers.forEach(([temperament, answerText], index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.dataset.temperament = temperament;
        button.onclick = () => selectAnswer(temperament);

        const label = document.createElement('span');
        label.className = 'answer-label';
        label.textContent = String.fromCharCode(65 + index);

        const text = document.createElement('span');
        text.className = 'answer-text';
        text.textContent = answerText;

        button.appendChild(label);
        button.appendChild(text);
        answersContainer.appendChild(button);
    });
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / 30) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    // Add animation
    document.querySelector('.question-container').classList.add('fade-in');
}

function selectAnswer(temperament) {
    // Update scores
    scores[temperament]++;
    
    // Move to next question
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        setTimeout(() => {
            showQuestion();
        }, 200);
    } else {
        setTimeout(() => {
            showResults();
        }, 200);
    }
}

function showResults() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');
    
    // Calculate percentages and create results array
    const results = Object.keys(scores).map(temperament => ({
        name: temperament,
        score: scores[temperament],
        percentage: Math.round((scores[temperament] / 30) * 100)
    }));
    
    // Sort by score (highest first)
    results.sort((a, b) => b.score - a.score);
    
    // Update score displays
    results.forEach((result, index) => {
        const scoreElement = document.getElementById(`${result.name}-score`);
        const percentageElement = document.getElementById(`${result.name}-percentage`);
        const fillElement = document.getElementById(`${result.name}-fill`);
        const rankElement = document.getElementById(`${result.name}-rank`);
        const cardElement = document.getElementById(`result-${result.name}`);
        
        scoreElement.textContent = result.score;
        percentageElement.textContent = result.percentage + '%';
        fillElement.style.width = result.percentage + '%';
        
        // Set rank labels
        if (index === 0) {
            rankElement.textContent = 'Primary Temperament';
            rankElement.classList.add('primary');
            cardElement.classList.add('primary');
        } else if (index === 1) {
            rankElement.textContent = 'Secondary Temperament';
            rankElement.classList.add('secondary');
            cardElement.classList.add('secondary');
        } else if (index === 2) {
            rankElement.textContent = 'Tertiary';
        } else {
            rankElement.textContent = 'Least Dominant';
        }
    });
    
    // Show detailed descriptions for primary and secondary
    showTemperamentDetails(results[0].name, results[1].name);
    
    // Animate results
    setTimeout(() => {
        document.querySelector('.results-content').classList.add('fade-in');
    }, 100);
}

function showTemperamentDetails(primary, secondary) {
    const detailsContainer = document.getElementById('temperament-details');
    detailsContainer.innerHTML = '';
    
    // Show primary temperament details
    const primaryData = temperamentData[primary];
    const primaryCard = createTemperamentDetailCard(primaryData, primary, 'primary');
    detailsContainer.appendChild(primaryCard);
    
    // Show secondary temperament details
    const secondaryData = temperamentData[secondary];
    const secondaryCard = createTemperamentDetailCard(secondaryData, secondary, 'secondary');
    detailsContainer.appendChild(secondaryCard);
}

function createTemperamentDetailCard(data, temperament, type) {
    const card = document.createElement('div');
    card.className = `detail-card ${temperament}`;
    
    const badge = type === 'primary' ? 'Primary' : 'Secondary';
    
    card.innerHTML = `
        <div class="detail-header">
            <div>
                <h3 class="detail-title">${data.name}</h3>
                <p class="detail-subtitle">${data.subtitle}</p>
            </div>
            <span class="detail-badge ${type}">${badge}</span>
        </div>
        
        <p class="detail-description">${data.description}</p>
        
        <div class="detail-section">
            <h4>Strengths</h4>
            <ul class="detail-list">
                ${data.strengths.map(strength => `<li>${strength}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h4>Challenges</h4>
            <ul class="detail-list">
                ${data.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h4>In Relationships</h4>
            <p>${data.relationships}</p>
        </div>
        
        <div class="detail-section">
            <h4>At Work</h4>
            <p>${data.work}</p>
        </div>
    `;
    
    return card;
}

function restartQuiz() {
    // Reset state
    currentQuestion = 0;
    scores = {
        sanguine: 0,
        choleric: 0,
        melancholic: 0,
        phlegmatic: 0
    };
    
    // Reset UI
    document.getElementById('results-section').classList.add('hidden');
    document.getElementById('welcome-section').classList.remove('hidden');
    
    // Clear classes
    document.querySelectorAll('.result-card').forEach(card => {
        card.classList.remove('primary', 'secondary');
    });
    
    document.querySelectorAll('.result-rank').forEach(rank => {
        rank.classList.remove('primary', 'secondary');
    });
}