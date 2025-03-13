

const userInputField = document.getElementById('user-input');
const connectBtn = document.getElementById('connect-btn');

connectBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent default link behavior
  const userInput = userInputField.value.trim();
  if (userInput !== '') {
    const storedUserInputs = localStorage.getItem('userInputs');
    if (storedUserInputs) {
      const userInputs = JSON.parse(storedUserInputs);
      userInputs.push(userInput);
      localStorage.setItem('userInputs', JSON.stringify(userInputs));
    } else {
      localStorage.setItem('userInputs', JSON.stringify([userInput]));
    }
    window.location.href = 'congrat.html';
  }
});















/* const userInputField = document.getElementById('user-input');
const connectBtn = document.getElementById('connect-btn');

connectBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent default link behavior
  const userInput = userInputField.value.trim();
  if (userInput !== '') {
    localStorage.setItem('userInput', userInput);
    window.location.href = 'congrat.html';
  }
});*/




