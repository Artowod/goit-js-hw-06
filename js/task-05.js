/* 
Напиши скрипт который, при наборе текста в инпуте 
input#name - input(событие input), подставляет его 
текущее значение в span#name - output.
Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
 */

/* ======================variant 0======================*/
/* document.addEventListener('keyup', event => {
  const inputItem = document.querySelector('#name-input');
  const outputItem = document.querySelector('#name-output');
  if (inputItem.value === '') {
    outputItem.textContent = 'Anonymous';
  } else {
    outputItem.textContent = inputItem.value;
  }
}); */

/* ======================variant 1======================*/
const handleKeyUp = event => {
  const inputItem = document.querySelector('#name-input');
  const outputItem = document.querySelector('#name-output');
  if (inputItem.value === '') {
    outputItem.textContent = 'Anonymous';
  } else {
    outputItem.textContent = inputItem.value;
  }
};

document.addEventListener('keyup', handleKeyUp);
