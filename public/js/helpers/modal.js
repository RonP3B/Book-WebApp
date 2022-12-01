export const closeModal = (overlayId, modalClass) => {
  $(`.${modalClass}`).addClass(`${modalClass}-closed`);
  setTimeout(() => $(`#${overlayId}`).hide(), 500);
};

export const openModal = (overlayId, modalClass) => {
  $(`#${overlayId}`).show();
  $(`.${modalClass}`).removeClass(`${modalClass}-closed`);
};
