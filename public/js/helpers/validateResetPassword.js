import { showToast } from "./showToast.js";
import { checkRequiredFields } from "./validateForm.js";

export const validateResetPassword = (form) => {
  if (!checkRequiredFields(form)) {
    showToast("Debes completar todos los campos requeridos");
    return false;
  }

  if ($("#password").val().length < 6) {
    showToast("La contraseña debe tener más de 5 caracteres");
    return false;
  }

  if ($("#password").val() !== $("#confirmPassword").val()) {
    showToast("Las contraseñas son diferentes");
    return false;
  }

  return validateResetPassword;
};