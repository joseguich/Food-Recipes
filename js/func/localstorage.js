export const savedFavorityStorage = recipe => {

   const favority = JSON.parse(localStorage.getItem('favority')) ?? [];

   //Agregar al localStorage
   localStorage.setItem('favority', JSON.stringify([...favority, recipe]));
}

export const existsStorage = recipeId => {
   const exists = JSON.parse(localStorage.getItem('favority')) ?? [];

   //Valida que solo existe un ID
   return exists.some(recipe => recipe.id === recipeId);
}