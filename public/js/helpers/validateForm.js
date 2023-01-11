import { showToast } from "./showToast.js";

const highlightFields = (container) => {
  $(`.${container} .required-field`).each(function () {
    if ($(this).val().isEmpty()) $(this).addClass("is-invalid");
    else $(this).removeClass("is-invalid");
  });
};

export const checkRequiredFields = (container) => {
  let res = true;

  $(`.${container} .required-field`).each(function () {
    if ($(this).val().isEmpty()) {
      res = false;
      return false;
    }
  });

  return res;
};

export const validateForm = (form, toastMsg = "", validateFunc = null) => {
  const validateFunction = validateFunc || checkRequiredFields;

  if (validateFunction(form)) {
    $(`.${form}`).submit();
  } else {
    highlightFields(form);
    if (toastMsg) showToast(toastMsg);
  }
};
