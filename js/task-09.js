/* 
Напиши скрипт, который изменяет цвета фона элемента <body> через 
инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерации случайного цвета используй функцию getRandomHexColor. 
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.querySelector('.change-color').addEventListener('click', event => {
  const selectedColor = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = selectedColor;
  document.querySelector('body .color').innerHTML = `${selectedColor}`;
  //or
  //document.querySelector('body .color').textContent = selectedColor;
});
