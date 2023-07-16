import { $containerFavority, $selectCategory } from "../const.js";
import { obtenerCategoria, seleccionarCategory } from "../api/fetch.js";
import { getFavority } from "../func/show-favority.js";

export default class App {
  constructor() {
    this.init();
  }

  init() {
    window.addEventListener("load", () => {

      //Validar que existe 
      if ($selectCategory) {
        $selectCategory.addEventListener("change", seleccionarCategory);
        obtenerCategoria();
      }

      //Validar existencia de favorito
      if ($containerFavority) {
        getFavority();
      }
    });
  }
}
