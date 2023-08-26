class View {
   myContainer = null;
   modalLogIn = null;

   init(container) {
      this.myContainer = container;
      this.modalWindow = document.getElementById("modal");
      this.modalOverlay = document.querySelector(".modal__overlay");
      this.modalHeaderLogin = document.querySelector('.modal-header.login');
      this.modalButtonLogin = document.querySelector('.form-submit-login');
      this.modalBlockLogin = document.querySelector('.form-login__block');
      this.modalHeaderRegistration = document.querySelector('.modal-header.register');
      this.modalButtonRegistration = document.querySelector('.form-submit-register');
      this.modalBlockRegistration = document.querySelector('.form-register__block');
   }

   openLogInWindow() {
      this.modalWindow.classList.remove("modal_closed");
      this.modalOverlay.classList.remove("modal_closed");
   }

   closeLogInWindow() {
      this.modalWindow.classList.add("modal_closed");
      this.modalOverlay.classList.add("modal_closed");
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
}

// function ClockViewDOM() {
//    let myClockModel = null;
//    let myClockContainer = null;

//    let clock = null;
//    let clockCenterX = 180;
//    let clockCenterY = 180;
//    let radius = 145;
//    let numberRadius = 20;
//    let lineH = null;
//    let lineM = null;
//    let lineS = null;

//    this.init = function (container) {
//       myClockContainer = container;
//       this.createClock();
//       this.createClockNumbers();
//       this.createLines();
//       this.rotateLines();
//    }

//    this.createClock = function () {
//       clock = document.createElement('div');
//       clock.classList.add("clock");
//       myClockContainer.append(clock);
//    }

//    this.createClockNumbers = function () {
//       for (let i = 1; i < 13; i++) {
//          const hour = document.createElement("div");
//          hour.classList.add("hour");
//          hour.textContent = i;

//          const angle = i * 30;
//          const radiants = angle / 180 * Math.PI;
//          const x = clockCenterX + radius * Math.sin(radiants);
//          const y = clockCenterY - radius * Math.cos(radiants);
//          const top = Math.round(y - numberRadius);
//          const left = Math.round(x - numberRadius);

//          hour.style.top = top + "px";
//          hour.style.left = left + "px";
//          clock.append(hour);
//       }
//    }

//    this.createLines = function () {
//       lineH = document.createElement('div');
//       lineH.classList.add('lineH');
//       lineH.style.left = Math.round(clockCenterX) + 'px';
//       lineH.style.top = Math.round(clockCenterY) + 'px';
//       clock.append(lineH);

//       lineM = document.createElement('div');
//       lineM.classList.add('lineM');
//       lineM.style.left = Math.round(clockCenterX) + 'px';
//       lineM.style.top = Math.round(clockCenterY) + 'px';
//       clock.append(lineM);

//       lineS = document.createElement('div');
//       lineS.classList.add('lineS');
//       lineS.style.left = Math.round(clockCenterX) + 'px';
//       lineS.style.top = Math.round(clockCenterY) + 'px';
//       clock.append(lineS);
//    }

//    this.rotateLines = function (hours, minutes, seconds) {
//       lineH.style.cssText += `transform: rotate(${hours - 90}deg);`;
//       lineM.style.cssText += `transform: rotate(${minutes - 90}deg);`;
//       lineS.style.cssText += `transform: rotate(${seconds - 90}deg);`;
//    }
// };

export default View;