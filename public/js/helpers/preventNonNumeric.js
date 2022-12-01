import { showToast } from "./showToast.js";

export const prenventNonNumeric = function () {
  const nonNumericReg = /[^0-9]/g;

  if (nonNumericReg.test($(this).val())) {
    $(this).val($(this).val().replace(nonNumericReg, ""));
    showToast("Este campo solo acepta números");
  }
};
