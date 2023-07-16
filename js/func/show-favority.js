import { $containerFavority, $createElement } from "../const.js";
import { showSelectedCategory } from "./show-category.js";

export const getFavority = () => {
   const favorityStorega = JSON.parse(localStorage.getItem('favority')) ?? [];

   if (favorityStorega.length) {

      //Show category
      showSelectedCategory(favorityStorega)
      return;
   }

   const dontData = $createElement('H2');
   dontData.className = 'animate__animated animate__bounceInLeft text-center fs-3 bg-danger my-3 py-3 text-white';
   dontData.textContent = "Don't Data Favority";

   $containerFavority.appendChild(dontData);
}