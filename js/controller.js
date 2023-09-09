function Controller() {
   let myContainer = null;
   let myModel = null;
   let inputEmail = null;
   let inputPassword = null;
   let exerciseSearchInput = null;
   let productsSearchInput = null;
   let btnStart = null;
   let btnPause = null;
   let btnReset = null;
   let status = 'disabled';

   function updateState() {
      const hashPageName = location.hash.slice(1).toLowerCase();
      myModel.updateState(hashPageName);
      myModel.manageUser();
      myModel.loadExercises();
      myModel.loadProducts();
      myModel.loadOptions();
      myModel.loadExercise();

      //кнопки начальной страницы и модального окна
      const buttonOpenModal = myContainer.querySelector('.btn-start');
      const buttonCloseModal = myContainer.querySelector('#modal-close');
      const buttonChangeToRegistration = myContainer.querySelector('#form-register');
      const buttonChangeToLogin = myContainer.querySelector('#form-login');
      const buttonLogIn = myContainer.querySelector('#submit-login');
      const buttonRegisterUser = myContainer.querySelector('#submit-register');
      const successfulRegistrationBtn = myContainer.querySelector('#successful-registration-btn');

      inputEmail = myContainer.querySelector('#email');
      inputPassword = myContainer.querySelector('#password');

      //события на контроллеры
      if (hashPageName === "startpage" || hashPageName === "") {
         buttonOpenModal.addEventListener('click', openLogInWindow);
         buttonCloseModal.addEventListener('click', closeLogInWindow);
         buttonChangeToRegistration.addEventListener('click', changeToRegistration);
         buttonChangeToLogin.addEventListener('click', changeToLogin);
         buttonLogIn.addEventListener('click', logInUser);
         buttonRegisterUser.addEventListener('click', registerUser);

         successfulRegistrationBtn.addEventListener('click', changeToLogin);

         myContainer.addEventListener('mousemove', parallaxFunction);
      }

      if (hashPageName === "excersisesdatabase") {
         exerciseSearchInput = document.querySelector('.exercises-search');
         exerciseSearchInput.addEventListener('input', searchExercise);
      }

      if (hashPageName === "dietpage") {
         productsSearchInput = document.querySelector('.products-search');
         productsSearchInput.addEventListener('input', searchProduct);
      }

      const buttonOpenInfoModal = myContainer.querySelector('.edit-info-btn');
      buttonOpenInfoModal && buttonOpenInfoModal.addEventListener('click', openUserInfoModal);

      const buttonAddExercise = myContainer.querySelector('.add-exercise');
      buttonAddExercise && buttonAddExercise.addEventListener('click', openExerciseModal);

      const buttonFinishTraining = myContainer.querySelector('.btn-finish-training');
      buttonFinishTraining && buttonFinishTraining.addEventListener('click', clearTrainingBlock);

      const buttonLogOut = myContainer.querySelector('.btn-logout');
      buttonLogOut && buttonLogOut.addEventListener('click', logOutUser);

      if (hashPageName === "trainingpage") {
         btnStart = document.querySelector(".start");
         btnStart.addEventListener('click', startStopwatch);
         btnPause = document.querySelector(".pause");
         btnPause.addEventListener("click", pauseStopwatch);
         btnReset = document.querySelector(".reset");
         btnReset.addEventListener("click", resetStopwatch);
         let stopwatch = document.querySelector(".time");
      }

      if (hashPageName === "progresspage") {
         const tabBtns = document.querySelectorAll('.tab-button');

         tabBtns.forEach(el => {
            el.addEventListener('click', openTabs);
         })
      }
   }


   //<ПАРАЛЛАКС>==========================================================================
   function parallaxFunction() {
      myModel.parallaxEffect();
   }

   //<МОДАЛЬНОЕ ОКНО ГЛАВНОГО ЭКРАНА>===================================================================================
   function openLogInWindow() {
      myModel.openLogInWindow();
   }

   function closeLogInWindow() {
      myModel.closeLogInWindow();
   }

   function changeToRegistration() {
      myModel.changeToRegistration();
   }

   function changeToLogin() {
      myModel.changeToLogin();
   }

   function logInUser() {
      myModel.logInUser(inputEmail.value, inputPassword.value);
   }

   function logOutUser() {
      myModel.logOutUser();
   }

   function registerUser() {
      myModel.registerUser(inputEmail.value, inputPassword.value);
   }

   //<ФУНКЦИИ СТРАНИЦЫ "АККАУНТ">===================================================================================================

   function openUserInfoModal() {
      myModel.openUserInfoModal();

      const buttonCloseInfoModal = document.querySelector('.user-modal__close');
      buttonCloseInfoModal.addEventListener('click', closeUserInfoModal);
      const buttonSaveUserInfo = document.querySelector('.user-modal__save');
      buttonSaveUserInfo.addEventListener('click', changeUserInfo);
   }

   function changeUserInfo() {
      const nameInput = document.querySelector('.user-modal__name');
      const birthdayInput = document.querySelector('.user-modal__birthday');
      const genderInput = document.querySelector('.user-modal__gender');
      const weightInput = document.querySelector('.user-modal__weight');
      const heightInput = document.querySelector('.user-modal__height');
      const medicalInfoInput = document.querySelector('.user-modal__medicalInfo');
      const goalInput = document.querySelector('.user-modal__goal');
      const phoneInput = document.querySelector('.user-modal__phone');
      const emailInput = document.querySelector('.user-modal__email');
      const achievementsInput = document.querySelector('.user-modal__achievements');

      myModel.changeUserInfo(nameInput.value, birthdayInput.value, genderInput.value, weightInput.value, heightInput.value, medicalInfoInput.value, goalInput.value, phoneInput.value, emailInput.value, achievementsInput.value);
   }

   function closeUserInfoModal() {
      myModel.closeUserInfoModal();
   }

   //<ФУНКЦИИ СТРАНИЦЫ "ТРЕНИРОВКА">===================================================================================================

   function openExerciseModal() {
      myModel.openExerciseModal();

      const buttonCloseExerciseModal = document.querySelector('.training-modal__close');
      buttonCloseExerciseModal.addEventListener('click', closeExerciseModal);

      const buttonAddExercise = document.querySelector('.training-modal__add');
      buttonAddExercise.addEventListener('click', addExercise);
   }

   function closeExerciseModal() {
      myModel.closeExerciseModal();
   }

   function addExercise() {
      const inputTrainingExerciseName = document.querySelector('#exercisename');
      const inputTrainingExerciseSet = document.querySelector('#exerciseset');
      const inputTrainingExerciseWeight = document.querySelector('#exerciseweight');
      const inputTrainingExerciseTime = document.querySelector('#exercisetime');

      myModel.addExercise(inputTrainingExerciseName.value, inputTrainingExerciseSet.value, inputTrainingExerciseWeight.value, inputTrainingExerciseTime.value);

      const buttonRemoveExercise = document.querySelectorAll('.exercise__delete-btn');
      buttonRemoveExercise && buttonRemoveExercise.forEach(el => {
         el.addEventListener('click', removeExercise);
      });

      const select = document.querySelectorAll('.select');
      select && select.forEach(el => {
         // let selectValue = el.value;
         el.addEventListener('change', changeBlockColor);
         // el.addEventListener('change', changeExerciseStatus(selectValue));
      })
   }

   function clearTrainingBlock() {
      myModel.clearTrainingBlock(status);
   }

   function changeBlockColor(event) {
      myModel.changeBlockColor(event);
   }

   function startStopwatch(event) {
      event.preventDefault();
      myModel.startStopwatch(status);
   }

   function pauseStopwatch(event) {
      event.preventDefault();
      myModel.pauseStopwatch(status);
   }

   function resetStopwatch(event) {
      event.preventDefault();
      myModel.resetStopwatch(status);
   }

   // function changeExerciseStatus(selectValue) {
   //    myModel.changeExerciseStatus(selectValue);
   // }

   function removeExercise(event) {
      myModel.removeExercise(event);
   }

   //<ФУНКЦИИ СТРАНИЦЫ "ПИТАНИЕ">===================================================================================================

   function searchProduct() {
      myModel.searchProduct(productsSearchInput.value);
   }

   //<ФУНКЦИИ СТРАНИЦЫ "БАЗА ТРЕНИРОВОК">===================================================================================================

   function searchExercise() {
      myModel.searchExercise(exerciseSearchInput.value);
   }

   //<ФУНКЦИИ СТРАНИЦЫ "ПРОГРЕСС">===================================================================================================

   function openTabs(event) {
      myModel.openTabs(event);
   }


   return {
      init: function (container, model) {
         myContainer = container;
         myModel = model;

         window.addEventListener("hashchange", updateState);
         updateState();
      }
   }
}

export default Controller;