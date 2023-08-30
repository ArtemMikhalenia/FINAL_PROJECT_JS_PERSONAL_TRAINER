function Controller() {
   let myContainer = null;
   let myModel = null;
   let inputUsername = null;
   let inputEmail = null;
   let inputPassword = null;

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
      buttonOpenModal.addEventListener('click', openLogInWindow);
      buttonCloseModal.addEventListener('click', closeLogInWindow);
      buttonChangeToRegistration.addEventListener('click', changeToRegistration);
      buttonChangeToLogin.addEventListener('click', changeToLogin);
      buttonLogIn.addEventListener('click', logInUser);
      buttonRegisterUser.addEventListener('click', registerUser);
      successfulRegistrationBtn.addEventListener('click', changeToLogin);

      // myContainer.addEventListener('mousemove', parallaxFunction);
   }

   function parallaxFunction() {
      myModel.parallaxEffect();
   }

   //методы контроллера, которые вызывают методы модели и передают туда данные
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

   return {
      init: function (container, model) {
         //получение элементов, с которыми взаимодействует пользователь
         myContainer = container;
         myModel = model;

         window.addEventListener("hashchange", updateState);

         // myContainer.querySelector("#mainmenu").addEventListener("click", function (event) {
         //    event.preventDefault();
         //    window.location.hash = event.target.getAttribute("href");
         // });

         updateState();


      }
   }
}

export default Controller;