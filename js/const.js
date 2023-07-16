// Selectores expecifico
export const $ = (selector) => document.querySelector(selector);
export const $createElement = (create) => document.createElement(create);

// Seleccionar elemento del HTML.
export const $selectCategory = $("#categorias");
export const $showResults = $('#resultado');
export const $containerModal = $('#modal');
export const $modalBody = $('.modal-body');
export const $modalTitle = $('.modal-title');
export const $modalFooter = $('.modal-footer');
export const $toast = $('#toast');
export const $toastBody = $('.toast-body');
export const $containerFavority = $('.favoritos');



//Modal Bootstrap
export const modal = new bootstrap.Modal($containerModal, {});

