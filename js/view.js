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
   let emailToast = null;
   let passwordInput = null;
   let passwordToast = null;
   let userExist = null;

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

      emailInput = myContainer.querySelector('#email');
      emailToast = myContainer.querySelector('.email-toast');
      passwordInput = myContainer.querySelector('#password');
      passwordToast = myContainer.querySelector('.password-toast');
      userExist = myContainer.querySelector('.register-user-exist');

      const woman = myContainer.querySelector('.woman-image');
      const man = myContainer.querySelector('.man-image');
      const fog = myContainer.querySelector('.fog-image');

      if (hashPageName === "startpage" || hashPageName === "") {
         this.parallaxEffect(myContainer, woman, man, fog);
      }
   }

   this.logInUser = function () {
      window.location.hash = "#mainpage";
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
      emailInput.classList.remove('invalid');
      emailInput.classList.remove('valid');
      passwordInput.classList.remove('invalid');
      passwordInput.classList.remove('valid');
   }

   this.changeToRegistration = function () {
      emailInput.value = '';
      passwordInput.value = '';
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
      passwordInput.classList.remove('valid');
      emailInput.classList.remove('valid');
      modalHeaderLogin.classList.remove('hide');
      modalHeaderRegistration.classList.add('hide');
      modalButtonLogin.classList.remove('hide');
      modalButtonRegistration.classList.add('hide');
      modalBlockRegistration.classList.remove('hide');
      modalBlockLogin.classList.add('hide');
      successfulRegistrationBlock.classList.add('hidden');
   }

   this.ifUserExistShow = function () {
      userExist.classList.remove('hidden');
   }

   this.ifUserNotExistHide = function () {
      userExist.classList.add('hidden');
   }

   this.successfulRegistration = function () {
      successfulRegistrationBlock.classList.remove('hidden');
      this.emailCorrectValidation();
      this.passwordCorrectValidation();
   }

   this.ifError = function (errorCode) {
      if (errorCode === 'auth/invalid-email' || errorCode === 'auth/missing-email') {
         this.emailValidation();
      } else if (errorCode === 'auth/missing-password' || errorCode === 'auth/weak-password') {
         this.emailCorrectValidation();
         this.passwordValidation();
      }
   }

   this.emailValidation = function () {
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      emailToast.classList.remove('hidden');
   }

   this.emailCorrectValidation = function () {
      emailInput.classList.add('valid');
      emailInput.classList.remove('invalid');
      emailToast.classList.add('hidden');
   }

   this.passwordValidation = function () {
      passwordInput.classList.add('invalid');
      passwordInput.classList.remove('valid');
      passwordToast.classList.remove('hidden');
   }

   this.passwordCorrectValidation = function () {
      passwordInput.classList.add('valid');
      passwordInput.classList.remove('invalid');
      passwordToast.classList.add('hidden');
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