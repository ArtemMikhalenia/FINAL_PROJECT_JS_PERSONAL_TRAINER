function Controller() {
   let myContainer = null;
   let myModel = null;
   let inputEmail = null;
   let inputPassword = null;
   let inputTrainingExerciseName = null;
   let inputTrainingExerciseSet = null;
   let inputTrainingExerciseWeight = null;
   let inputTrainingExerciseTime = null;
   let exerciseSearchInput = null;
   let nameInput = null;
   let birthdayInput = null;
   let genderInput = null;
   let weightInput = null;
   let heightInput = null;
   let medicalInfoInput = null;
   let goalInput = null;
   let phoneInput = null;
   let emailInput = null;
   let achievementsInput = null;
   let blockToDo = null;
   let blockInProgress = null;
   let blockFinished = null;

   function updateState() {
      const hashPageName = location.hash.slice(1).toLowerCase();
      myModel.updateState(hashPageName);
      myModel.manageUser();
      myModel.loadExercises();


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

      let buttonOpenInfoModal = myContainer.querySelector('.edit-info-btn');
      buttonOpenInfoModal && buttonOpenInfoModal.addEventListener('click', openUserInfoModal);

      const buttonAddExercise = document.querySelector('.add-exercise');
      buttonAddExercise && buttonAddExercise.addEventListener('click', openExerciseModal);

      const buttonLogOut = document.querySelector('.btn-logout');
      buttonLogOut && buttonLogOut.addEventListener('click', logOutUser);

      //drag&drop

      if(hashPageName === "trainingpage"){
         blockToDo = document.querySelector('.todo-block__content');
         blockToDo.addEventListener("dragover", function (event) {
            event.preventDefault();
            myModel.dragOverToDoBlock();
         });
         blockToDo.addEventListener("dragleave", function (event) {
            event.preventDefault();
            myModel.dragLeaveToDoBlock();
         });
         blockToDo.addEventListener("drop", dropElement);
   
         blockInProgress = document.querySelector('.inprogress-block__content');
         blockInProgress.addEventListener("dragover", function (event) {
            event.preventDefault();
            myModel.dragOverProgressBlock();
         });
         blockInProgress.addEventListener("dragleave", function (event) {
            event.preventDefault();
            myModel.dragLeaveProgressBlock();
         });
         blockInProgress.addEventListener("drop", dropElement);
   
         blockFinished = document.querySelector('.finished-block__content');
         blockFinished.addEventListener("dragover", function (event) {
            event.preventDefault();
            myModel.dragOverFinishBlock();
         });
         blockFinished.addEventListener("dragleave", function (event) {
            event.preventDefault();
            myModel.dragLeaveFinishBlock();
         });
         blockFinished.addEventListener("drop", dropElement);
      }
   }

   function parallaxFunction() {
      myModel.parallaxEffect();
   }

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

   function openUserInfoModal() {
      myModel.openUserInfoModal();

      const buttonCloseInfoModal = document.querySelector('.user-modal__close');
      buttonCloseInfoModal.addEventListener('click', closeUserInfoModal);
      const buttonSaveUserInfo = document.querySelector('.user-modal__save');
      buttonSaveUserInfo.addEventListener('click', changeUserInfo);

      nameInput = document.querySelector('.user-modal__name');
      birthdayInput = document.querySelector('.user-modal__birthday');
      genderInput = document.querySelector('.user-modal__gender');
      weightInput = document.querySelector('.user-modal__weight');
      heightInput = document.querySelector('.user-modal__height');
      medicalInfoInput = document.querySelector('.user-modal__medicalInfo');
      goalInput = document.querySelector('.user-modal__goal');
      phoneInput = document.querySelector('.user-modal__phone');
      emailInput = document.querySelector('.user-modal__email');
      achievementsInput = document.querySelector('.user-modal__achievements');
   }

   function changeUserInfo() {
      myModel.changeUserInfo(nameInput.value, birthdayInput.value, genderInput.value, weightInput.value, heightInput.value, medicalInfoInput.value, goalInput.value, phoneInput.value, emailInput.value, achievementsInput.value);
   }

   function closeUserInfoModal() {
      myModel.closeUserInfoModal();
   }

   function openExerciseModal() {
      myModel.openExerciseModal();

      const buttonCloseExerciseModal = document.querySelector('.training-modal__close');
      buttonCloseExerciseModal.addEventListener('click', closeExerciseModal);

      const buttonAddExercise = document.querySelector('.training-modal__add');
      buttonAddExercise.addEventListener('click', addExercise);

      inputTrainingExerciseName = document.querySelector('#exercisename');
      inputTrainingExerciseSet = document.querySelector('#exerciseset');
      inputTrainingExerciseWeight = document.querySelector('#exerciseweight');
      inputTrainingExerciseTime = document.querySelector('#exercisetime');
   }

   function closeExerciseModal() {
      myModel.closeExerciseModal();
   }

   function addExercise() {
      myModel.addExercise(inputTrainingExerciseName.value, inputTrainingExerciseSet.value, inputTrainingExerciseWeight.value, inputTrainingExerciseTime.value);

      const buttonRemoveExercise = document.querySelectorAll('.exercise__delete-btn');
      buttonRemoveExercise && buttonRemoveExercise.forEach(el => {
         el.addEventListener('click', removeExercise);
      });

      // const draggableElement = document.querySelectorAll('.exercise');
      // draggableElement && draggableElement.forEach(el => {
      //    el.addEventListener("dragstart", dragExerciseStart);
      //    el.addEventListener("dragend", dragExerciseEnd);
      // });
   }

   function removeExercise(event) {
      myModel.removeExercise(event);
   }

   function dropElement(event) {
      event.preventDefault();
      myModel.dropElement();
   }

   function searchExercise() {
      let searchInputValue = exerciseSearchInput.value;
      myModel.searchExercise(searchInputValue);
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