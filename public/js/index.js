"use strict";

import {
  openModal,
  closeModal,
  prenventNonNumeric,
  addImageForm,
  validateForm,
  validateFilter,
} from "./helpers/exports.js";

$(() => {
  //--------------------------------Protos------------------------------------
  String.prototype.isEmpty = function () {
    return this === null || this === undefined || this.trim().length === 0;
  };

  //-------------------------------values--------------------------------------
  const warnMsg = "Debes completar todos los campos requeridos";

  //--------------------------------Events------------------------------------

  $("#menu-option").click(() => openModal("overlay-menu", "navbar__modal"));
  $("#publishYear").on("input", prenventNonNumeric);
  $("#add-image").change((e) => addImageForm(e));
  $("#btn-save").click(() => validateForm("form-save", warnMsg));
  $("#btn-filter").click(() => validateFilter());

  $(".navbar__modal .close-menu").click(() =>
    closeModal("overlay-menu", "navbar__modal")
  );

  $("#filter-option").click(() =>
    openModal("overlay-filter", "section__modal")
  );

  $(".section__modal .close-menu").click(() =>
    closeModal("overlay-filter", "section__modal")
  );
});
