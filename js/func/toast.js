import { $toast, $toastBody } from "../const.js"

export const toastMessage = message => {

   //Instanciar TOAST 
   const containerToast = new bootstrap.Toast($toast);

   //Mensaje
   $toastBody.textContent = message;

   //Activaar el toast
   containerToast.show();
}