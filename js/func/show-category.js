import { $createElement, $selectCategory, $showResults } from "../const.js";
import { cleanWeb } from "./clean.js";
import { getRecipe } from "../api/fetch.js";

export const showCategoriaSelect = (categories = []) => { // Iterrar el arreglo
   categories.forEach(category => {
      const { strCategory } = category;
      const optionCategory = $createElement("OPTION");

      optionCategory.value = strCategory;
      optionCategory.textContent = strCategory;

      $selectCategory.appendChild(optionCategory);
   });
};

export const showSelectedCategory = (selectedCategory = []) => {

   // Clean
   cleanWeb($showResults)

   const headingResults = $createElement('H2');
   headingResults.classList.add('text-center', 'my-4', 'bg-primary', 'text-white', 'py-3', 'animate__animated', 'animate__backInDown');
   headingResults.textContent = selectedCategory.length ? 'Results' : "Don't Results";

   $showResults.appendChild(headingResults);

   selectedCategory.forEach((selected) => {
      const { idMeal, strMeal, strMealThumb } = selected;

      // Contenedor Principal
      const containerCategory = $createElement("DIV");
      containerCategory.classList.add("col-md-4");

      // Card
      const cardCategory = $createElement("DIV");
      cardCategory.classList.add("card", "mb-4");

      // Img
      const categoryImage = $createElement("IMG");
      categoryImage.classList.add("card-img-top");
      categoryImage.src = strMealThumb ?? selected.img;
      categoryImage.alt = strMeal ?? selected.title;

      // Container all body
      const cardBodyCategory = $createElement("DIV");
      cardBodyCategory.classList.add("card-body");

      // Heading
      const headingCategory = $createElement("H3");
      headingCategory.classList.add("font-bold", "text-center", "card-title", "mb-3");
      headingCategory.textContent = strMeal ?? selected.title;

      // Button ver Receta
      const buttonReceta = $createElement("BUTTON");
      buttonReceta.classList.add("btn", "btn-primary", "w-100");
      buttonReceta.innerHTML = `View Recipe <i class="fa-solid fa-eye"></i>`;

      buttonReceta.onclick = () => {
         getRecipe(idMeal ?? selected.id);
      }

      // Saved card body
      cardBodyCategory.appendChild(headingCategory);
      cardBodyCategory.appendChild(buttonReceta);

      // Saved card
      cardCategory.appendChild(categoryImage);
      cardCategory.appendChild(cardBodyCategory);

      // Saved contenedor principal
      containerCategory.appendChild(cardCategory);

      // Mostrar en el HTML
      $showResults.appendChild(containerCategory);


   });
};
