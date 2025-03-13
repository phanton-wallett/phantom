


const userInputsContainer = document.getElementById('user-inputs-container');

const storedUserInputs = localStorage.getItem('userInputs');
if (storedUserInputs) {
  const userInputs = JSON.parse(storedUserInputs);
  userInputs.forEach((input) => {
    createUserInputElement(input);
  });
}

function createUserInputElement(input) {
  const userInputElement = document.createElement('div');
  userInputElement.innerHTML = `
    <p>${input}</p>
  `;
  userInputsContainer.appendChild(userInputElement);
}

















/*const userInputsContainer = document.getElementById('user-inputs-container');

const storedUserInput = localStorage.getItem('userInput');
if (storedUserInput) {
  createUserInputElement(storedUserInput);
}

function createUserInputElement(input) {
  const userInputElement = document.createElement('div');
  userInputElement.innerHTML = `
    <p>${input}</p>
  `;
  userInputsContainer.appendChild(userInputElement);
}*/
