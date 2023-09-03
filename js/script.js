//import
import View from './view.js';
import Model from './model.js';
import Controller from './controller.js';

import { StartHeader, StartMainTitle, ButtonStart, StartModal, StartModalOverlay, ParallaxImages, LoginBtn, SidebarMain, ContentMain, SidebarTraining, ContentTraining, SidebarDiet, ContentDiet, SidebarExercisesDatabase, ContentExercisesDatabase, SidebarProgress, ContentProgress } from './components.js';

import {
   StartPage, MainPage, TrainingPage, DietPage,
   ExercisesDatabasePage, ProgressPage
} from './pages.js';

// Список компонент (from components.js)
const components = {
   startHeader: StartHeader,
   mainTitle: StartMainTitle,
   buttonStart: ButtonStart,
   modal: StartModal,
   overlay: StartModalOverlay,
   parallaxImages: ParallaxImages,

   loginBtn: LoginBtn,
   sidebarMain: SidebarMain,
   contentMain: ContentMain,
   sidebarTraining: SidebarTraining,
   contentTraining: ContentTraining,
   sidebarDiet: SidebarDiet,
   contentDiet: ContentDiet,
   sidebarExercisesDatabase: SidebarExercisesDatabase,
   contentExercisesDatabase: ContentExercisesDatabase,
   sidebarProgress: SidebarProgress,
   contentProgress: ContentProgress,
};

// Список поддерживаемых роутов (from pages.js)
const routes = {
   startpage: StartPage,
   mainpage: MainPage,
   trainingpage: TrainingPage,
   dietpage: DietPage,
   excersisesdatabase: ExercisesDatabasePage,
   progresspage: ProgressPage,

   default: StartPage,
};

//инициализируем СПА
const mySPA = (function () {
   return {
      init: function ({ container, routes, components }) {
         this.renderComponents(container, components);

         const myView = new View();
         const myModel = new Model();
         const myController = new Controller();

         //связываем части модуля
         myView.init(document.getElementById(container), routes);
         myModel.init(myView);
         myController.init(document.getElementById(container), myModel);
      },

      renderComponents: function (container, components) {
         const root = document.getElementById(container);
         const componentsList = Object.keys(components);
         for (let item of componentsList) {
            root.innerHTML += components[item].render("component");
         }
      },
   };
}());

document.addEventListener("DOMContentLoaded", mySPA.init({
   container: "wrapper",
   routes: routes,
   components: components,
}))

