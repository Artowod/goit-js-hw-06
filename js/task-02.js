const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/* 
Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients. 
*/


/* My first attempt - Alyona disliked it .. again!

let liElements = [];
ingredients.forEach((ingredient) => {
  
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList = 'item';
  liElements.push(liElement);

})
 */

const liSetMarkup = ingredients.map((ingredient, index, arr) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList = 'item';
  return liElement;
});

document.querySelector('#ingredients').append(...liSetMarkup);