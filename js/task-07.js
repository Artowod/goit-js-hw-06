/* 
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет инлайн-стиль 
span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> 
*/

const inputRangeElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

/* const handleRangeElement = event => {

} */

function handleRangeElement(event) {
  textElement.style.fontSize = `${inputRangeElement.value}px`;
  console.log(`${inputRangeElement.value}px`);
}

inputRangeElement.addEventListener('input', handleRangeElement);
