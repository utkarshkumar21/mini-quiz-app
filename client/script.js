const questions = [
    { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { q: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], answer: "Delhi" },
    { q: "Which language runs in the browser?", options: ["Python", "JavaScript", "C++"], answer: "JavaScript" }
];

const questionContainer = document.getElementById('question-container');
const submitBtn = document.getElementById('submit-btn');
const scoreDisplay = document.getElementById('score');

function loadQuestions() {
    questionContainer.innerHTML = '';
    questions.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('question');
        div.innerHTML = `<p>${index + 1}. ${item.q}</p>
        ${item.options.map(opt => `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`).join('')}`;
        questionContainer.appendChild(div);
    });
}

submitBtn.addEventListener('click', () => {
    let score = 0;
    questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if(selected && selected.value === item.answer) score++;
    });
    scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
});

loadQuestions();

