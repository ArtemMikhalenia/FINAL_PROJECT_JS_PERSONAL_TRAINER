class View {
   myContainer = null;
   modalLogIn = null;

   init(container) {
      this.myContainer = container;
      this.modalWindow = this.myContainer.querySelector("#modal");
      this.modalOverlay = this.myContainer.querySelector(".modal__overlay");
      this.modalHeaderLogin = this.myContainer.querySelector('.modal-header.login');
      this.modalButtonLogin = this.myContainer.querySelector('.form-submit-login');
      this.modalBlockLogin = this.myContainer.querySelector('.form-login__block');
      this.modalHeaderRegistration = this.myContainer.querySelector('.modal-header.register');
      this.modalButtonRegistration = this.myContainer.querySelector('.form-submit-register');
      this.modalBlockRegistration = this.myContainer.querySelector('.form-register__block');

      this.usernameInput = this.myContainer.querySelector('#username');
      this.usernameToast = this.myContainer.querySelector('.username-toast');
      this.emailInput = this.myContainer.querySelector('#email');
      this.emailToast = this.myContainer.querySelector('.email-toast');
      this.enterPassword = this.myContainer.querySelector('#password');
      this.passwordToast = this.myContainer.querySelector('.password-toast');
   }

   openLogInWindow() {
      this.modalWindow.classList.remove("modal_closed");
      this.modalOverlay.classList.remove("modal_closed");
   }

   closeLogInWindow() {
      this.modalWindow.classList.add("modal_closed");
      this.modalOverlay.classList.add("modal_closed");
      this.usernameInput.value = '';
      this.emailInput.value = '';
      this.enterPassword.value = '';
      this.usernameInput.classList.remove('invalid');
      this.usernameInput.classList.remove('valid');
      this.emailInput.classList.remove('invalid');
      this.emailInput.classList.remove('valid');
      this.enterPassword.classList.remove('invalid');
      this.enterPassword.classList.remove('valid');
   }

   changeToRegistration() {
      this.modalHeaderLogin.classList.add('hide');
      this.modalHeaderRegistration.classList.remove('hide');
      this.modalButtonLogin.classList.add('hide');
      this.modalButtonRegistration.classList.remove('hide');
      this.modalBlockRegistration.classList.add('hide');
      this.modalBlockLogin.classList.remove('hide');
   }

   changeToLogin() {
      this.modalHeaderLogin.classList.remove('hide');
      this.modalHeaderRegistration.classList.add('hide');
      this.modalButtonLogin.classList.remove('hide');
      this.modalButtonRegistration.classList.add('hide');
      this.modalBlockRegistration.classList.remove('hide');
      this.modalBlockLogin.classList.add('hide');
   }

   ifUserExist() {
      alert('Пользователь уже существует! Введите другие данные.');
   }

   successfulRegistration() {
      alert('Вы успешно зарегистрировались!');
   }

   ifError(error) {
      error;
   }

   usernameValidation() {
      this.usernameInput.classList.add('invalid');
      this.usernameInput.classList.remove('valid');
      this.usernameToast.classList.remove('hidden');
   }

   usernameCorrectValidation() {
      this.usernameInput.classList.remove('invalid');
      this.usernameInput.classList.add('valid');
      this.usernameToast.classList.add('hidden');
   }

   emailValidation() {
      this.emailInput.classList.add('invalid');
      this.emailInput.classList.remove('valid');
      this.emailToast.classList.remove('hidden');
   }

   emailCorrectValidation() {
      this.emailInput.classList.add('valid');
      this.emailInput.classList.remove('invalid');
      this.emailToast.classList.add('hidden');
   }

   passwordValidation() {
      this.enterPassword.classList.add('invalid');
      this.enterPassword.classList.remove('valid');
      this.passwordToast.classList.remove('hidden');
   }

   passwordCorrectValidation() {
      this.enterPassword.classList.add('valid');
      this.enterPassword.classList.remove('invalid');
      this.passwordToast.classList.add('hidden');
   }
}

export default View;