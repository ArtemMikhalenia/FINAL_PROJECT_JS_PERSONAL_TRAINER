import { Header, MainTitle, ButtonStart, Modal, ModalOverlay, ParallaxImages } from './components.js';

const StartPage = {
   id: "main",
   title: "StartPage",
   render: () => {
      return `
      <section class="start-container">
      ${Header.render()}
      ${MainTitle.render()}
      ${ButtonStart.render()}
      ${Modal.render()}
      ${ModalOverlay.render()}
      </section>
      ${ParallaxImages.render()}
         `;
   }
};

export { StartPage };