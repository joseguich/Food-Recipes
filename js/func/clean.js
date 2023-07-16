export const cleanWeb = (selector) => {
   while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
   }
}
