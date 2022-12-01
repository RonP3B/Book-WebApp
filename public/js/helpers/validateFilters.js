import { showToast } from "./showToast.js";

export const validateFilter = () => {
  const selectedValues = [];
  const checkedValues = $(`.section__filter-form [type="checkbox"]:checked`);

  if (checkedValues.length === 0 && $("#title-filter").val().isEmpty()) {
    return showToast("Debes ingresar un título o seleccionar una categoría.");
  }

  checkedValues.each(function (item) {
    selectedValues.push($(this).val());
  });

  $("#checkbox-items").attr("value", selectedValues);
  $(".section__filter-form").submit();
};
