export const showToast = (toastMsg) => {
  Toastify({
    text: toastMsg,
    duration: 3000,
    style: {
      background: "linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%)",
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      color: "#219ebc",
      fontSize: "0.9rem",
      fontWeight: 500,
    },
  }).showToast();
};
