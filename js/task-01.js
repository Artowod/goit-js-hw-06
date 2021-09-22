'use strict';

/* Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>). */

/* Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5 */

const categoryCount = document.querySelectorAll('.item').length;
console.log('Number of categories: ', categoryCount);
console.log('');

/*  my initial attempt - Alyona disliked it !
for (let i = 0; i < categoryCount; i++) {
  const categoryName = document.querySelectorAll('.item h2')[i].textContent;
  console.log('Category: ', categoryName);
  const categoryElementsCount = document
    .querySelectorAll('.item ul')
    [i].querySelectorAll('li').length;
  console.log('Elements: ', categoryElementsCount);
  console.log('');
}
 */

document.querySelectorAll('.item').forEach(element => {
  const categoryName = element.querySelector('h2').textContent;
  console.log('Category: ', categoryName);
  const categoryElementsCount = element
    .querySelector('ul')
    .querySelectorAll('li').length;
  console.log('Elements: ', categoryElementsCount);
  console.log('');
});
