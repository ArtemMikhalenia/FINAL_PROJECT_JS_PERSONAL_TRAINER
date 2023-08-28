//import
// import Parallax from './parallax.js';
import Controller from './controller.js';
import Model from './model.js';
import View from './view.js';

import { Header, MainTitle, ButtonStart, Modal, ModalOverlay, ParallaxImages } from './components.js';

import { StartPage } from './pages.js';

// Список компонент (from components.js)
const components = {
   header: Header,
   mainTitle: MainTitle,
   buttonStart: ButtonStart,
   modal: Modal,
   overlay: ModalOverlay,
   parallaxImages: ParallaxImages,
};

// Список поддерживаемых роутов (from pages.js)
const routes = {
   main: StartPage,
   // account: AccountPage,
   // contacts: Contacts,
   // category: Category,
   // testimonials: Testimonials,
   default: StartPage,
   // error: ErrorPage,
};

const mySPA = (function () {
   return {
      init: function ({ container, routes, components }) {
         this.renderComponents(container, components);

         // const parallax = new Parallax();
         const myController = new Controller();
         const myModel = new Model();
         const myView = new View();

         //связываем части модуля
         myView.init(document.getElementById(container), routes); 
         myModel.init(myView);
         myController.init(myModel, document.getElementById(container));

         // parallax.init(container, document.querySelector('.woman-image'), document.querySelector('.man-image'), document.querySelector('.fog-image'));
      },

      renderComponents: function (container, components) {
         const root = document.getElementById(container);
         const componentsList = Object.keys(components);
         for (let item of componentsList) {
            root.innerHTML += components[item].render();
         }
      },
   };

}());


// const container = document.querySelector('.wrapper');
// const woman = document.querySelector('.woman-image');
// const man = document.querySelector('.man-image');
// const fog = document.querySelector('.fog-image');

// const parallax = new Parallax();
// const myController = new Controller();
// const myModel = new Model();
// const myView = new View();

// //init
// myController.init(myModel, container);
// myModel.init(myView);
// myView.init(container);

// parallax.init(container, woman, man, fog);

document.addEventListener("DOMContentLoaded", mySPA.init({
   container: "wrapper",
   routes: routes,
   components: components,
}));

