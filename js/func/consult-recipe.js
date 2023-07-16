import {
   $createElement,
   $modalBody,
   $modalFooter,
   $modalTitle,
   modal
} from "../const.js";
import { cleanWeb } from "./clean.js";
import { mapearIngredients } from "./mapear.js";
import { existsStorage, savedFavorityStorage } from "./localstorage.js";
import { deleteLocalStorage } from "./delete-storage.js";
import { toastMessage } from "./toast.js";

export const showConsultRecipe = recipe => {
   const { idMeal, strMeal, strMealThumb, strInstructions } = recipe;

   //Title Modal
   $modalTitle.classList.add('ms-auto')
   $modalTitle.textContent = strMeal;

   //Modal Body
   $modalBody.innerHTML = `
      <img class="img-fluid" src ="${strMealThumb}" alt= ""${strMeal}>
      <h3 class ="my-4 text-center">Instructions</h3>
      <p class ="lh-lg">${strInstructions}</p>
      <h3 class ="my-4 text-center">Ingredients and quantities</h3>
   `;

   //Mapear Ingredients
   mapearIngredients(recipe);

   //Clean the footer modal
   cleanWeb($modalFooter);

   //Saved Button 
   const buttonSaved = $createElement('BUTTON');
   buttonSaved.className = 'btn btn-primary col';
   buttonSaved.innerHTML = existsStorage(idMeal) ? `Delete Favority <i class="fa-solid fa-trash fa-lg"></i>` : `Saved Favority <i class="fa-solid fa-star fa-lg"></i>`;

   buttonSaved.onclick = () => {

      //Validar si existe que no lo agregue.
      if (existsStorage(idMeal)) {
         deleteLocalStorage(idMeal);
         buttonSaved.innerHTML = `Saved Favority <i class="fa-solid fa-star fa-lg"></i>`;
         toastMessage('Delete Favority Success');

         //Recargar la pagina al eliminar una receta.
         setTimeout(() => {
            window.location.reload();
         }, 1000);

         return;
      }

      savedFavorityStorage({
         id: idMeal,
         title: strMeal,
         img: strMealThumb
      });

      buttonSaved.innerHTML = `Delete Favority <i class="fa-solid fa-trash fa-lg"></i>`;
      toastMessage('Save Favority Success');
   }

   //Close button 
   const buttonClose = $createElement('BUTTON');
   buttonClose.className = 'btn btn-danger col';
   buttonClose.innerHTML = `Close <i class="fa-sharp fa-solid fa-circle-xmark fa-lg"></i>`

   buttonClose.onclick = () => {
      //Close modal
      modal.hide()
   }

   //Saved Footer del modal
   $modalFooter.appendChild(buttonSaved);
   $modalFooter.appendChild(buttonClose);


   //ACTIVAR MODAL.
   modal.show();
}