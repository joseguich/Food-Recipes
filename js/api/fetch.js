import { showCategoriaSelect, showSelectedCategory } from "../func/show-category.js";
import { showConsultRecipe } from "../func/consult-recipe.js";

//Categories
export const obtenerCategoria = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Solicitud de obtener categroia no encontrada: ${response.status}`
        );
      }

      //Obtener informacion de categoria
      return response.json();
    })
    .then((data) => showCategoriaSelect(data.categories));
};

export const seleccionarCategory = (e) => {
  const category = e.target.value;

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Solicitud de selecionando categorias no encontrada: ${response.status}`
        );
      }
      //Obtener informacion de seleccionar categoria
      return response.json();
    })
    .then((data) => showSelectedCategory(data.meals));
};

export const getRecipe = recipeId => {

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Solicitud de mostrar lista receta no encontrada ${response.status}`);

      return response.json();
    })
    .then(data => showConsultRecipe(data.meals[0]))
}
