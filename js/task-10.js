/* Задание 10 (выполнять не обязательно)
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество 
элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию 
getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы. */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlArea = document.querySelector('#controls');

const numberInput = controlArea.children[0];
const createBtn = controlArea.children[1];
const destroyBtn = controlArea.children[2];

//or
//  const createBtn = controlArea.querySelector('button[data-create]');
//  const destroyBtn = controlArea.querySelector('button[data-destroy]');



function createBoxes() {
  let initialWidth = 30;
  let initialHeight = 30;
  for (let i = 0; i < +numberInput.value * 10; i += 10) {
    const div = document.createElement('div');
    div.style.width = `${initialWidth + i}px`;
    div.style.height = `${initialHeight + i}px`;
    div.style.backgroundColor = `${getRandomHexColor()}`;
    document.querySelector('#boxes').append(div);
  }
}

createBtn.addEventListener('click', createBoxes);


function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}


destroyBtn.addEventListener('click', destroyBoxes);
