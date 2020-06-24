const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function displayQuiz(){}
function showResults(){}

displayQuiz();
submitButton.addEventListener('click', showResults);

const questions =
[
    {
        question:"Test",
        answers:
        {
            a: "dasdf",
            b: "dsyhew",
            c: "fsdna",
            d: "dsafda"
        },
        correctAnswer:"c"
    }
];