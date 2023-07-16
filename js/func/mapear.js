import { $createElement, $modalBody } from "../const.js";

export const mapearIngredients = recipe => {
   const ulIngredients = $createElement('ul');
   ulIngredients.className = 'list-group';

   //Mapear los ingrediente y cantida requerida de la API,
   for (let i = 1; i <= 20; i++) {

      if (recipe[`strIngredient${i}`]) {
         const ingredients = recipe[`strIngredient${i}`];
         const quantities = recipe[`strMeasure${i}`];

         const listIngredients = $createElement('li');
         listIngredients.className = 'list-group-item';
         listIngredients.innerHTML = `${ingredients} <i class="fa-sharp fa-solid fa-arrow-right"></i> ${quantities}`;

         ulIngredients.appendChild(listIngredients)
      }

   }

   $modalBody.appendChild(ulIngredients);
}