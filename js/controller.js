function Controller() {
   let myContainer = null;
   let myModel = null;
   let inputUsername = null;
   let inputEmail = null;
   let inputPassword = null;
   let inputTrainingExerciseName = null;
   let inputTrainingExerciseSet = null;
   let inputTrainingExerciseWeight = null;
   let inputTrainingExerciseTime = null;

   function updateState() {
      const hashPageName = location.hash.slice(1).toLowerCase();
      myModel.updateState(hashPageName);

      const buttonOpenModal = myContainer.querySelector('.btn-start');
      const buttonCloseModal = myContainer.querySelector('#modal-close');
      const buttonChangeToRegistration = myContainer.querySelector('#form-register');
      const buttonChangeToLogin = myContainer.querySelector('#form-login');
      const buttonLogIn = myContainer.querySelector('#submit-login');
      const buttonRegisterUser = myContainer.querySelector('#submit-register');
      const successfulRegistrationBtn = myContainer.querySelector('#successful-registration-btn');

      inputUsername = myContainer.querySelector('#username');
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

      const buttonAddExercise = document.querySelector('.add-exercise');
      buttonAddExercise && buttonAddExercise.addEventListener('click', openExerciseModal);
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
      myModel.logInUser();
   }

   function registerUser() {
      myModel.registerUser(inputUsername.value, inputEmail.value, inputPassword.value);
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

      inputTrainingExerciseName.addEventListener('input', func);
      inputTrainingExerciseSet.addEventListener('input', func);
      inputTrainingExerciseWeight.addEventListener('input', func);
      inputTrainingExerciseTime.addEventListener('input', func);
   }

   function closeExerciseModal() {
      myModel.closeExerciseModal();
   }

   function addExercise() {
      myModel.addExercise();

      const buttonRemoveExercise = document.querySelectorAll('.exercise__delete-btn');
      buttonRemoveExercise && buttonRemoveExercise.forEach(el => {
         el.addEventListener('click', removeExercise);
      });

   }

   function removeExercise() {
      console.log('controller');
      myModel.removeExercise();
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