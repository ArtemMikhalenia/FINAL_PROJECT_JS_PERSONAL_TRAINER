import { ExerciseBlock, UserInfo, ProductBlock, Options, Exercise } from "./components.js";

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
   let mainblockWrapper = null;
   let exercisesWrapper = null;
   let exercisesSelectWrapper = null;
   let productsWrapper = null;
   let trainingWrapper = null;

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
      mainblockWrapper = myContainer.querySelector('#mainblock');
      exercisesWrapper = myContainer.querySelector('.exercises-body');
      exercisesSelectWrapper = myContainer.querySelector('.training-modal__exercisename');
      productsWrapper = myContainer.querySelector('.products-table__body');
      trainingWrapper = myContainer.querySelector('.training-block');

      emailInput = myContainer.querySelector('#email');
      passwordInput = myContainer.querySelector('#password');
      formError = myContainer.querySelector('.form-error');

      const woman = myContainer.querySelector('.woman-image');
      const man = myContainer.querySelector('.man-image');
      const fog = myContainer.querySelector('.fog-image');

      if (hashPageName === "startpage" || hashPageName === "") {
         this.parallaxEffect(myContainer, woman, man, fog);
      }

      if (hashPageName === "progresspage") {
         const ctx = document.querySelector('#myChart');
         initChart(ctx);
      }
   }

   //<ПАРАЛЛАКС>==========================================================================

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

   //<МОДАЛЬНОЕ ОКНО ГЛАВНОГО ЭКРАНА>===============================================

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

   this.successfulLogIn = function () {
      window.location.hash = "#mainpage";
   }

   this.logOutUser = function () {
      window.location.hash = "#startpage";
   }

   this.logOutUserError = function (error) {
      alert(error);
   }

   //<ФУНКЦИИ СТРАНИЦЫ "АККАУНТ">===================================================================================================

   this.renderInfo = function (user) {
      if (userInfoWrapper) {
         userInfoWrapper.innerHTML = UserInfo.render(user.fullName, user.birthday, user.gender, user.weight, user.height, user.medicalInfo, user.goal, user.phone, user.email, user.achievements);
      }
   }

   this.openUserInfoModal = function (user) {
      const userInfoModal = document.querySelector('.user-modal');
      userInfoModal.classList.remove('modal_closed');

      for (let key in user) {
         const value = user[key];
         const input = document.querySelector(`#user-modal__${key}`);
         input.value = value;
      }
   }

   this.closeUserInfoModal = function () {
      const userInfoModal = document.querySelector('.user-modal');
      userInfoModal.classList.add('modal_closed');
   }

   //<ФУНКЦИИ СТРАНИЦЫ "ТРЕНИРОВКА">====================================================================

   this.addExercise = function (exercise) {
      if (trainingWrapper) {
         trainingWrapper.innerHTML += Exercise.render(exercise.exerciseName, exercise.exerciseSet, exercise.exerciseWeight, exercise.exerciseTime, exercise.id);
      }

      document.querySelector('.sidebar').classList.add('hidden');
      document.querySelector('.mainblock__body').classList.add('active-training');
      document.querySelector('.mainblock__header').classList.add('active-training');
      document.querySelector('.mainblock__content').classList.add('active-training');
   }

   this.renderExercise = function (exercise) {
      if (trainingWrapper) {
         for (let key in exercise) {
            const exerciseKey = exercise[key];
            trainingWrapper.innerHTML += Exercise.render(exerciseKey.exerciseName, exerciseKey.exerciseSet, exerciseKey.exerciseWeight, exerciseKey.exerciseTime);
         }
      }
   }

   this.renderOptions = function (exercise) {
      if (exercisesSelectWrapper) {
         for (let key in exercise) {
            const exerciseKey = exercise[key];
            exercisesSelectWrapper.innerHTML += Options.render(exerciseKey.title);
         }
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

   this.removeExercise = function (event) {
      event.target.closest('.exercise').remove();
   }

   this.changeBlockColor = function (event) {
      switch (event.target.value) {
         case 'В ожидании':
            event.target.closest('.exercise').classList.add('wait');
            event.target.closest('.exercise').classList.remove('inprogress');
            event.target.closest('.exercise').classList.remove('ready');
            break;
         case 'В процессе':
            event.target.closest('.exercise').classList.remove('wait');
            event.target.closest('.exercise').classList.add('inprogress');
            event.target.closest('.exercise').classList.remove('ready');
            break;
         case 'Готово':
            event.target.closest('.exercise').classList.remove('wait');
            event.target.closest('.exercise').classList.remove('inprogress');
            event.target.closest('.exercise').classList.add('ready');
            break;
         default:
            break;
      }
   }

   this.clearTrainingBlock = function () {
      if (trainingWrapper) {

         let rockImg = document.querySelector('.rock');
         rockImg.classList.remove('hidden');
         setTimeout(() => {
            rockImg.classList.add('hidden');
         }, 3000);

         let exercises = document.querySelectorAll('.exercise');

         exercises.forEach(el => {
            el.remove();
         });
      }

      document.querySelector('.sidebar').classList.remove('hidden');
      document.querySelector('.mainblock__body').classList.remove('active-training');
      document.querySelector('.mainblock__header').classList.remove('active-training');
      document.querySelector('.mainblock__content').classList.remove('active-training');
   }

   this.startStopwatch = function (hours, minutes, seconds, status) {
      document.querySelector('.time').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      document.querySelector('.start').setAttribute(`${status}`, `${status}`);
   }

   this.pauseStopwatch = function (status) {
      document.querySelector('.start').removeAttribute(`${status}`, `${status}`);
   }

   this.resetStopwatch = function (hours, minutes, seconds, status) {
      document.querySelector('.time').textContent = `0${hours}:0${minutes}:0${seconds}`;

      document.querySelector('.start').removeAttribute(`${status}`, `${status}`);
   }

   //<ФУНКЦИИ СТРАНИЦЫ "ПИТАНИЕ">==============================================

   this.renderProducts = function (products) {
      if (productsWrapper) {
         for (let key in products) {
            const productKey = products[key];
            productsWrapper.innerHTML += ProductBlock.render(productKey.product, productKey.protein, productKey.fat, productKey.carbohydrates, productKey.calories);
         }
      }
   }

   this.searchProduct = function (value) {
      const productsTitle = document.querySelectorAll('.products-table__name');

      if (value !== '') {
         productsTitle.forEach((element) => {
            let elementTitle = element.innerText.toLowerCase();
            let elementParent = element.closest('.products-table__row');

            if (elementTitle.search(value) === -1) {
               elementParent.classList.add('hide');
            } else {
               elementParent.classList.remove('hide');
            }

         });
      } else {
         productsTitle.forEach((element) => {
            let elementParent = element.closest('.products-table__row');
            elementParent.classList.remove('hide');
         });
      }
   }

   //<ФУНКЦИИ СТРАНИЦЫ "БАЗА ТРЕНИРОВОК">==================================================================

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

   this.renderExercises = function (exercises) {
      if (exercisesWrapper) {
         for (let key in exercises) {
            const exercise = exercises[key];
            exercisesWrapper.innerHTML += ExerciseBlock.render(exercise.title, exercise.image, exercise.instruction);
         }
      }
   }
}

//<ФУНКЦИИ СТРАНИЦЫ "ПРОГРЕСС">==================================================================

function initChart() {
   return new Chart(document.querySelector('#myChart'), {
      type: 'line',
      data: {
         labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
         datasets: [{
            label: 'Динамика веса, кг',
            data: [94, 92, 90, 88, 84, 82, 80, 78, 76,],
            borderWidth: 2
         },
         {
            label: 'Жим лёжа, кг',
            data: [20, 30, 40, 40, 50, 55, 60, 65, 70,],
            borderWidth: 2
         },
         {
            label: 'Приседания со штангой, кг',
            data: [40, 50, 60, 70, 80, 85, 85, 85, 85,],
            borderWidth: 2
         }],
      },
      options: {
         scales: {
            y: {
               beginAtZero: true
            }
         }
      }
   });
}

export default View;