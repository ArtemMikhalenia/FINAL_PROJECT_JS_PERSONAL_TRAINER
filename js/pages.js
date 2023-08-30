import { StartHeader, StartMainTitle, ButtonStart, StartModal, StartModalOverlay, ParallaxImages, LoginBtn, SidebarMain, ContentMain, SidebarTraining, ContentTraining, SidebarDiet, ContentDiet, SidebarExercisesDatabase, ContentExercisesDatabase, SidebarProgress, ContentProgress } from './components.js';

const StartPage = {
   id: "startpage",
   title: "Начальная страница",
   render: () => {
      return `
      <section class="start-container">
      ${StartHeader.render()}
      ${StartMainTitle.render()}
      ${ButtonStart.render()}
      ${StartModal.render()}
      ${StartModalOverlay.render()}
      </section>
      ${ParallaxImages.render()}
         `;
   }
};

const Modal = {
   id: "modalpage",
   title: "Модальное окно",
   render: () => {
      return `
         `;
   }
};

const MainPage = {
   id: "mainpage",
   title: "Главная страница",
   render: () => {
      return `
      <section class="mainblock" id="mainblock">
      ${SidebarMain.render()}
      ${ContentMain.render()}
      </section>
         `;
   }
};

const TrainingPage = {
   id: "trainingpage",
   title: "Страница тренировка",
   render: () => {
      return `
      <section class="mainblock" id="mainblock">
      ${SidebarTraining.render()}
      ${ContentTraining.render()}
      </section>
         `;
   }
};

const DietPage = {
   id: "dietpage",
   title: "Страница питание",
   render: () => {
      return `
      <section class="mainblock" id="mainblock">
      ${SidebarDiet.render()}
      ${ContentDiet.render()}
      </section>
      `;
   }
};

const ExercisesDatabasePage = {
   id: "exercisesdatabasepage",
   title: "Страница питание",
   render: () => {
      return `
      <section class="mainblock" id="mainblock">
      ${SidebarExercisesDatabase.render()}
      ${ContentExercisesDatabase.render()}
      </section>
      `;
   }
};

const ProgressPage = {
   id: "progresspage",
   title: "Страница питание",
   render: () => {
      return `
      <section class="mainblock" id="mainblock">
      ${SidebarProgress.render()}
      ${ContentProgress.render()}
      </section>
      `;
   }
};

export {
   StartPage, MainPage, Modal, TrainingPage, DietPage,
   ExercisesDatabasePage, ProgressPage
};