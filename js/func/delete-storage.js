export const deleteLocalStorage = id => {
   const removeRecipe = JSON.parse(localStorage.getItem('favority')) ?? [];

   const updateStorega = removeRecipe.filter(remove => remove.id !== id);

   //Actualizar los datos de la funcion eliminada
   localStorage.setItem('favority', JSON.stringify(updateStorega));
}