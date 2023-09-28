//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  // Pregunta numero 1
  {
      id: "0", 
      question: "¿Cuál es la función principal del núcleo en una célula?",
      options: [
          "Síntesis de proteínas",
          "Almacenamiento de agua",
          "Producción de energía",
          "Control de la información genética"
      ], 
      correct: "Control de la información genética"
  },
  // Pregunta numero 2
  {
      id: "1", 
      question: "¿Qué organelo es conocido como la 'central energética' de la célula?",
      options: [
          "Núcleo",
          "Mitocondria",
          "Retículo endoplasmático",
          "Lisosomas"
      ], 
      correct: "Mitocondria"
  },
  // Pregunta numero 3
  {
      id: "2", 
      question: "¿Cuál es la función principal del retículo endoplasmático rugoso?",
      options: [
          "Almacenamiento de agua",
          "Síntesis de proteínas",
          "Digestión celular",
          "Producción de energía"
      ], 
      correct: "Síntesis de proteínas"
  },
  // Pregunta numero 4
  {
      id: "3", 
      question: "¿Qué organelo almacena y digiere materiales en la célula?",
      options: [
          "Núcleo",
          "Aparato de Golgi",
          "Lisosomas",
          "Mitocondria"
      ], 
      correct: "Lisosomas"
  },
  // Pregunta numero 5
  {
      id: "4", 
      question: "¿Cuál es la función principal del aparato de Golgi en una célula?",
      options: [
          "Producción de energía",
          "Síntesis de proteínas",
          "Modificación y empaquetamiento de proteínas",
          "Control de la información genética"
      ], 
      correct: "Modificación y empaquetamiento de proteínas"
  },
  // Pregunta numero 6
  {
      id: "5", 
      question: "¿Qué organelo contiene enzimas y descompone desechos celulares?",
      options: [
          "Mitocondria",
          "Núcleo",
          "Lisosomas",
          "Retículo endoplasmático"
      ], 
      correct: "Lisosomas"
  },
  // Pregunta numero 7
  {
      id: "6", 
      question: "¿Cuál es la función principal de la membrana celular?",
      options: [
          "Regular el flujo de sustancias hacia y desde la célula",
          "Almacenar información genética",
          "Realizar la fotosíntesis",
          "Sintetizar proteínas"
      ], 
      correct: "Regular el flujo de sustancias hacia y desde la célula"
  },
  // Pregunta numero 8
  {
      id: "7", 
      question: "¿Qué organelo es responsable de la fotosíntesis en las células vegetales?",
      options: [
          "Núcleo",
          "Mitocondria",
          "Retículo endoplasmático",
          "Cloroplastos"
      ], 
      correct: "Cloroplastos"
  },
  // Pregunta numero 9
  {
      id: "8", 
      question: "¿Cuál es la función principal de los ribosomas en una célula?",
      options: [
          "Almacenar agua",
          "Sintetizar lípidos",
          "Síntesis de proteínas",
          "Almacenar información genética"
      ], 
      correct: "Síntesis de proteínas"
  },
  // Pregunta numero 10
  {
      id: "9", 
      question: "¿Qué organelo almacena el material genético y controla las funciones celulares?",
      options: [
          "Mitocondria",
          "Núcleo",
          "Lisosomas",
          "Cloroplastos"
      ], 
      correct: "Núcleo"
  }
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});


function createUserDataForm() {
  const userDataForm = document.createElement("div");
  const nameInput = document.createElement("input");
  const carnetInput = document.createElement("input");
  const submitButton = document.createElement("button");

  nameInput.type = "text";
  nameInput.id = "name-input";
  nameInput.placeholder = "Nombre";

  carnetInput.type = "text";
  carnetInput.id = "carnet-input";
  carnetInput.placeholder = "Carné";

  submitButton.id = "submit-button";
  submitButton.textContent = "Enviar";

  userDataForm.appendChild(nameInput);
  userDataForm.appendChild(carnetInput);
  userDataForm.appendChild(submitButton);

  return userDataForm;
}

function createResultMessage(scoreCount, totalQuestions, name, carnet) {
  const resultMessage = document.createElement("p");
  resultMessage.textContent = `Hola, ${name} (Carné: ${carnet})\nTu puntuación es: ${scoreCount} out of ${totalQuestions}`;
  return resultMessage;
}

function createThankYouMessage(name, carnet) {
  const thankYouMessage = document.createElement("p");
  thankYouMessage.textContent = `¡Gracias por jugar, ${name} (Carné: ${carnet})!`;
  return thankYouMessage;
}

restart.addEventListener("click", () => {
  const userDataForm = createUserDataForm();
  displayContainer.innerHTML = "";
  displayContainer.appendChild(userDataForm);

  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", () => {
    const nameInput = document.getElementById("name-input");
    const carnetInput = document.getElementById("carnet-input");
    
    if (nameInput.value.trim() !== "" && carnetInput.value.trim() !== "") {
      displayContainer.innerHTML = "";
    
      const name = nameInput.value.trim();
      const carnet = carnetInput.value.trim();
    
      const resultMessage = createResultMessage(scoreCount, quizArray.length, name, carnet);
      displayContainer.appendChild(resultMessage);
    
      const thankYouMessage = createThankYouMessage(name, carnet);
      displayContainer.appendChild(thankYouMessage);
    } else {
      // Agrega un mensaje de error o validación aquí si es necesario
    }
  });
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//Iniciar Juego
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};