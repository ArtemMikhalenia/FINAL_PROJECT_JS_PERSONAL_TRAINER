import { ContentMain, ExerciseBlock, SidebarMain, UserInfo } from "./components.js";

function View() {
   let myContainer = null;
   let routesObj = null;

   let modalWindow = null;
   let modalOverlay = null;
   let modalHeaderLogin = null;
   let modalButtonLogin = null;
   let modalBlockLogin = null;
   let modalHeaderRegistration = null;
   let modalButtonRegistration = null;
   let modalBlockRegistration = null;

   let successfulRegistrationBlock = null;

   let emailInput = null;
   let passwordInput = null;
   let formError = null;

   let userInfoWrapper = null;
   let exercisesWrapper = null;

   this.init = function (container, routes) {
      myContainer = container;
      routesObj = routes;
   }

   this.renderContent = function (hashPageName) {
      let routeName = "default";

      if (hashPageName.length > 0) {
         routeName = hashPageName in routesObj ? hashPageName : "error";
      }

      window.document.title = routesObj[routeName].title;
      myContainer.innerHTML = routesObj[routeName].render(`${routeName}`);

      modalWindow = myContainer.querySelector("#modal");
      modalOverlay = myContainer.querySelector(".modal__overlay");
      modalHeaderLogin = myContainer.querySelector('.modal-header.login');
      modalButtonLogin = myContainer.querySelector('.form-submit-login');
      modalBlockLogin = myContainer.querySelector('.form-login__block');
      modalHeaderRegistration = myContainer.querySelector('.modal-header.register');
      modalButtonRegistration = myContainer.querySelector('.form-submit-register');
      modalBlockRegistration = myContainer.querySelector('.form-register__block');
      successfulRegistrationBlock = myContainer.querySelector('.successful-registration-block');
      userInfoWrapper = myContainer.querySelector('.user-info');
      exercisesWrapper = myContainer.querySelector('.exercises-body');

      emailInput = myContainer.querySelector('#email');
      passwordInput = myContainer.querySelector('#password');
      formError = myContainer.querySelector('.form-error');

      const woman = myContainer.querySelector('.woman-image');
      const man = myContainer.querySelector('.man-image');
      const fog = myContainer.querySelector('.fog-image');

      if (hashPageName === "startpage" || hashPageName === "") {
         this.parallaxEffect(myContainer, woman, man, fog);
      }
   }

   this.successfulLogIn = function () {
      window.location.hash = "#mainpage";
   }

   this.logOutUser = function () {
      window.location.hash = "#startpage";
   }

   this.logOutUserError = function (error) {
      alert(error);
   }

   this.renderInfo = function (user) {
      if (userInfoWrapper) {
         userInfoWrapper.innerHTML = UserInfo.render(user.fullName, user.birthday, user.gender, user.weight, user.height, user.medicalInfo, user.goal, user.phone, user.email, user.achievements);
      }
   }

   this.renderExercises = function (exercises) {
      if (exercisesWrapper) {
         for (let key in exercises) {
            const exercise = exercises[key];
            exercisesWrapper.innerHTML += ExerciseBlock.render(exercise.title, exercise.image, exercise.instruction);
         }
      }
   }

   this.parallaxEffect = function (container, img1, img2, img3) {

      if (container && img1 && img2 && img3) {
         const containerWidth = container.offsetWidth;
         const containerHeight = container.offsetHeight;

         //коэффициенты
         const forMan = 30;
         const forWoman = 20;
         const forFog = 40;

         //Скорость анимации
         const speed = 0.05;

         //Объявление переменных
         let posX = 0;
         let posY = 0;
         let coordXPercent = 0;
         let coordYPercent = 0;

         const parallaxFunction = () => {
            const distX = coordXPercent - posX;
            const distY = coordYPercent - posY;

            posX = posX + (distX * speed);
            posY = posY + (distY * speed);

            img1.style.cssText = `transform: translate(${posX / forMan}%,${posY / forMan}%);`;
            img2.style.cssText = `transform: translate(${posX / forWoman}%,${posY / forWoman}%);`;
            img3.style.cssText = `transform: translate(${posX / forFog}%,${posY / forFog}%);`;

            requestAnimationFrame(parallaxFunction);
         }

         container.addEventListener("mousemove", function (el) {
            // Ноль на середине
            const coordX = el.pageX - containerWidth / 2;
            const coordY = el.pageY - containerHeight / 2;

            //Получаем проценты
            coordXPercent = coordX / containerWidth * 100;
            coordYPercent = coordY / containerHeight * 100;
         });

         parallaxFunction();
      }
   }

   this.openLogInWindow = function () {
      modalWindow.classList.remove("modal_closed");
      modalOverlay.classList.remove("modal_closed");
   }

   this.closeLogInWindow = function () {
      modalWindow.classList.add("modal_closed");
      modalOverlay.classList.add("modal_closed");

      emailInput.value = '';
      passwordInput.value = '';
      formError.innerHTML = '';
   }

   this.changeToRegistration = function () {
      emailInput.value = '';
      passwordInput.value = '';
      formError.innerHTML = '';

      modalHeaderLogin.classList.add('hide');
      modalHeaderRegistration.classList.remove('hide');
      modalButtonLogin.classList.add('hide');
      modalButtonRegistration.classList.remove('hide');
      modalBlockRegistration.classList.add('hide');
      modalBlockLogin.classList.remove('hide');
   }

   this.changeToLogin = function () {
      emailInput.value = '';
      passwordInput.value = '';
      formError.innerHTML = '';

      modalHeaderLogin.classList.remove('hide');
      modalHeaderRegistration.classList.add('hide');
      modalButtonLogin.classList.remove('hide');
      modalButtonRegistration.classList.add('hide');
      modalBlockRegistration.classList.remove('hide');
      modalBlockLogin.classList.add('hide');

      successfulRegistrationBlock.classList.add('hidden');
   }

   this.successfulRegistration = function () {
      successfulRegistrationBlock.classList.remove('hidden');
      formError.innerHTML = '';
   }

   this.ifError = function (errorCode) {
      if (errorCode === 'auth/invalid-email' || errorCode === 'auth/weak-password') {
         formError.innerHTML = 'Неверный логин или пароль. Проверьте правильность ввода. Пароль должен быть не менее 6 символов.';
      } else if (errorCode === 'auth/missing-password' || errorCode === 'auth/missing-email') {
         formError.innerHTML = 'Отсутствует логин или пароль.';
      } else if (errorCode === 'auth/email-already-in-use') {
         formError.innerHTML = 'Такой пользователь уже зарегистрирован.';
      } else if (errorCode === 'auth/user-not-found') {
         formError.innerHTML = 'Данный пользователь не найден.';
      } else if (errorCode === 'auth/wrong-password') {
         formError.innerHTML = 'Неверный пароль. Попробуйте еще раз.';
      }
   }

   this.openExerciseModal = function () {
      const trainingModal = document.querySelector('.training-modal');
      trainingModal.classList.remove('modal_closed');
   }

   this.closeExerciseModal = function () {
      const trainingModal = document.querySelector('.training-modal');
      trainingModal.classList.add('modal_closed');
   }

   this.addExercise = function (exerciseName, exerciseSet, exerciseWeight, exerciseTime) {
      const trainingModal = document.querySelector('.training-modal');
      trainingModal.classList.add('modal_closed');

      const toDoBlock = document.querySelector('.todo-block__content');

      const exercise = document.createElement('div');
      exercise.className = 'exercise';
      exercise.setAttribute('draggable', 'true');
      exercise.innerHTML = `
      <p>Упражнение: ${exerciseName}</p>
      <p>Подход: ${exerciseSet}</p>
      <p>Вес: ${exerciseWeight} кг</p>
      <p>Количество повторений: ${exerciseTime} раз</p>
      <button class="exercise__delete-btn">Удалить</button>`;

      toDoBlock.append(exercise);
   }

   this.removeExercise = function (event) {
      event.target.closest('.exercise').remove();
   }

   this.searchExercise = function (value) {
      const exerciseTitle = document.querySelectorAll('.exercise-block__title');

      if (value !== '') {
         exerciseTitle.forEach((element) => {
            let elementTitle = element.innerText.toLowerCase();
            let elementParent = element.closest('.exercise-block');

            if (elementTitle.search(value) === -1) {
               elementParent.classList.add('hide');
            } else {
               elementParent.classList.remove('hide');
            }

         });
      } else {
         exerciseTitle.forEach((element) => {
            let elementParent = element.closest('.exercise-block');
            elementParent.classList.remove('hide');
         });
      }
   }

   //drag&drop

   // this.dragExerciseStart = function (event) {
   //    // this.classList.add("dragging");
   //    event.dataTransfer.setData("text", event.target.id);
   //    event.dataTransfer.setData("content", event.target.textContent);
   // }

   // this.dragExerciseEnd = function (event) {
   //    // this.classList.remove("dragging");
   // }
}

export default View;