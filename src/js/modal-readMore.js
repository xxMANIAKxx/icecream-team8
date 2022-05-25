(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open3]'),
      closeModalBtn: document.querySelector('[data-modal-close2]'),
      modal: document.querySelector('[data-modal-readMore]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden--readMore');
    }
  })();