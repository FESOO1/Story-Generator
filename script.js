const sgFormOutput = document.querySelector('.sg-form-output');
const generateRandomButton = document.getElementById('generateRandomButton');
const nameInput = document.getElementById('nameInput');
const brInput = document.getElementById('brInput');
const usInput = document.getElementById('usInput');
let sentenceArray;
nameInput.focus();

// GENERATE A STORY

function updateArray() {
    sentenceArray = [[`The committee was thoroughly impressed with the way ${nameInput.value.length > 0 ? nameInput.value : 'Bob'} handled the unexpected challenges during the presentation.`, `After much deliberation, the team decided to follow the recommendations put forth by ${nameInput.value.length > 0 ? nameInput.value : 'Bob'} in his detailed analysis.`, `Despite the tight deadline, ${nameInput.value.length > 0 ? nameInput.value : 'Bob'} managed to complete the project with exceptional precision and care.`, `During the quarterly meeting, ${nameInput.value.length > 0 ? nameInput.value : 'Bob'} highlighted several strategies to improve productivity across the organisation.`, `The new initiative, which ${nameInput.value.length > 0 ? nameInput.value : 'Bob'} spearheaded, has already shown remarkable results in a short amount of time.`],[`The board members were genuinely impressed with how ${nameInput.value.length > 0 ? nameInput.value : 'Bob'} navigated the challenges and delivered a flawless report.`,`By carefully considering all the available data, ${nameInput.value.length > 0 ? nameInput.value : 'Bob'} proposed a strategy that significantly improved the company\'s operations.`, `At the annual conference, ${nameInput.value.length > 0 ? nameInput.value : 'Bob'} captivated the audience with his insightful perspectives on industry trends.`, `The client was highly satisfied with the creative solutions that ${nameInput.value.length > 0 ? nameInput.value : 'Bob'} brought to the project, leading to a successful outcome.`, `Thanks to ${nameInput.value.length > 0 ? nameInput.value : 'Bob'}’s unwavering commitment and attention to detail, the final product exceeded everyone’s expectations.`]];
};

function generateStory(e) {
    e.preventDefault();

    updateArray();

    if (brInput.checked) {
        sgFormOutput.textContent = sentenceArray[0][Math.floor(Math.random() * sentenceArray.length)];
    } else if (usInput.checked) {
        sgFormOutput.textContent = sentenceArray[1][Math.floor(Math.random() * sentenceArray.length)];
    };
};

// INITIALIZE BUTTON
generateRandomButton.addEventListener('click', generateStory);


// CONST

const newArray = 'Firdavs,Madina,FES001,Firdavs,Madina,Agzona';

const array = newArray.replaceAll('Firdavs', 'FESODI');

const arrayNew = array.split(',');

console.log(arrayNew[0]);