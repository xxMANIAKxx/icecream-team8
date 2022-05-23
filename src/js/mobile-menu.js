(() => {
    const refs = {
      btnHamburger: document.querySelector('#menuHamburger'),
      header: document.querySelector('.header'),
      body: document.querySelector('body'),
      menu: document.querySelector('.navigation__mobile'),
      navAbout: document.querySelector('#navAbout'),
      navHow: document.querySelector('#navHow'),
      navProducts: document.querySelector('#navProducts'),
      navContact: document.querySelector('#navContact'),
    };
  
    refs.btnHamburger.addEventListener('click', toggleModal);
    refs.navAbout.addEventListener('click', toggleModal);
    refs.navHow.addEventListener('click', toggleModal);
    refs.navProducts.addEventListener('click', toggleModal);
    refs.navContact.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.btnHamburger.classList.toggle('hamburgerOpen');
      refs.header.classList.toggle('open');
      refs.menu.classList.toggle('is-hidden--menu');
      refs.body.classList.toggle('noScroll');
    }
  })();