const showBackendToast = (msg) => {
  Toastify({
    text: msg,
    duration: 3500,
    gravity: "bottom",
    position: "right",
    style: {
      background: "linear-gradient(-225deg, rgb(0, 180, 180) 0%, #219ebc 100%)",
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      color: "aliceblue",
      fontSize: "0.9rem",
      fontWeight: 500,
    },
  }).showToast();
}