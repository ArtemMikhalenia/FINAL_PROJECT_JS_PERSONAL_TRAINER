class Controller {
   myContainer = null;
   myModel = null;
   userName = null;
   email = null;
   password = null;

   init(model, container) {
      //получение элементов, с которыми взаимодействует пользователь
      this.myContainer = container;
      this.myModel = model;

      this.buttonOpenModal = this.myContainer.querySelector('.btn-start');
      this.buttonCloseModal = this.myContainer.querySelector('#modal-close');
      this.buttonChangeToRegistration = this.myContainer.querySelector('#form-register');
      this.buttonChangeToLogin = this.myContainer.querySelector('#form-login');
      this.buttonLogIn = this.myContainer.querySelector('#submit-login');
      this.buttonRegisterUser = this.myContainer.querySelector('#submit-register');
      this.enterUsername = this.myContainer.querySelector('#username');
      this.enterEmail = this.myContainer.querySelector('#email');
      this.enterPassword = this.myContainer.querySelector('#password');

      //события на контроллеры
      this.buttonOpenModal.addEventListener('click', this.openLogInWindow.bind(this));
      this.buttonCloseModal.addEventListener('click', this.closeLogInWindow.bind(this));
      this.buttonChangeToRegistration.addEventListener('click', this.changeToRegistration.bind(this));
      this.buttonChangeToLogin.addEventListener('click', this.changeToLogin.bind(this));
      this.buttonLogIn.addEventListener('click', this.logInUser.bind(this));
      this.buttonRegisterUser.addEventListener('click', this.registerUser.bind(this));

      this.enterUsername.addEventListener('input', this.getNameValuefromInput.bind(this));
      this.enterEmail.addEventListener('input', this.getEmailValuefromInput.bind(this));
      this.enterPassword.addEventListener('input', this.getPasswordValuefromInput.bind(this));
   }

   //методы контроллера, которые вызывают методы модели и передают туда данные
   openLogInWindow() {
      this.myModel.openLogInWindow();
   }

   closeLogInWindow() {
      this.myModel.closeLogInWindow();
   }

   changeToRegistration() {
      this.myModel.changeToRegistration();
   }

   changeToLogin() {
      this.myModel.changeToLogin();
   }

   logInUser() {
      this.myModel.logInUser();
   }

   getNameValuefromInput() {
      this.name = this.enterUsername.value;
      return this.name;
   }

   getEmailValuefromInput() {
      this.email = this.enterEmail.value;
      return this.email;
   }

   getPasswordValuefromInput() {
      this.password = this.enterPassword.value;
      return this.password;
   }

   registerUser() {
      this.myModel.registerUser(this.getNameValuefromInput(), this.getEmailValuefromInput(), this.getPasswordValuefromInput());
   }
}

export default Controller;