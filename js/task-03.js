const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/* 
Напиши скрипт для создания галереи изображений по массиву данных. 
В HTML есть список ul.gallery.

<ul class="gallery"></ul>

Используй массив объектов images для создания 
элементов <img> вложенных в <li>. 
Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы. 
*/

//create arr of images
//create markup - li..li
//css styling (flex)

/* const imageTags = [];
let markupString = [];
 */
/* 
images.forEach(({ url, alt }) => {
  const image = document.createElement('img');
  image.setAttribute('src', url);
  image.setAttribute('alt', alt);
  console.log(image);
// markupString.push(`<li>${image}</li>`);
  console.log(`<li>${image}</li>`);
})
 */

let markupString = '';
images.forEach(({ url, alt }) => {
  markupString += `<li><img src="${url}" alt="${alt}"></li>`;
});

document.querySelector('.gallery').insertAdjacentHTML('afterbegin', markupString);

// ===styling===
document.querySelectorAll('li').forEach(liElement => {
  liElement.style.margin = '0 auto';
  liElement.style.listStyleType = 'none';
});
const styleGallery = document.querySelector('.gallery');
styleGallery.style.display = 'flex';
styleGallery.style.flexDirection = 'column';

styleGallery.querySelectorAll('img').forEach(image => {
  image.style.width = '400px';
});
