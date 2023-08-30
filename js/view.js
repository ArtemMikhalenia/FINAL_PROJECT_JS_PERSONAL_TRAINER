function View() {
   let myContainer = null;
   let routesObj = null;
   // let contentContainer = null;
   let modalWindow = null;
   let modalOverlay = null;
   let modalHeaderLogin = null;
   let modalButtonLogin = null;
   let modalBlockLogin = null;
   let modalHeaderRegistration = null;
   let modalButtonRegistration = null;
   let modalBlockRegistration = null;
   let successfulRegistrationBlock = null;
   let usernameInput = null;
   let usernameToast = null;
   let emailInput = null;
   let emailToast = null;
   let passwordInput = null;
   let passwordToast = null;
   let userExist = null;

   this.init = function (container, routes) {
      myContainer = container;
      routesObj = routes;

      // contentContainer = document.querySelector('#main-content');
   }

   this.renderContent = function (hashPageName) {
      let routeName = "default";

      if (hashPageName.length > 0) {
         routeName = hashPageName in routesObj ? hashPageName : "error";
      }

      // window.document.title = routesObj[routeName].title;
      myContainer.innerHTML = routesObj[routeName].render(`${routeName}`);
      // contentContainer.innerHTML = routesObj[routeName].render(`${routeName}`);
      // this.updateButtons(routesObj[routeName].id);

      modalWindow = myContainer.querySelector("#modal");
      modalOverlay = myContainer.querySelector(".modal__overlay");
      modalHeaderLogin = myContainer.querySelector('.modal-header.login');
      modalButtonLogin = myContainer.querySelector('.form-submit-login');
      modalBlockLogin = myContainer.querySelector('.form-login__block');
      modalHeaderRegistration = myContainer.querySelector('.modal-header.register');
      modalButtonRegistration = myContainer.querySelector('.form-submit-register');
      modalBlockRegistration = myContainer.querySelector('.form-register__block');
      successfulRegistrationBlock = myContainer.querySelector('.successful-registration-block');

      usernameInput = myContainer.querySelector('#username');
      usernameToast = myContainer.querySelector('.username-toast');
      emailInput = myContainer.querySelector('#email');
      emailToast = myContainer.querySelector('.email-toast');
      passwordInput = myContainer.querySelector('#password');
      passwordToast = myContainer.querySelector('.password-toast');
      userExist = myContainer.querySelector('.register-user-exist');

      const woman = myContainer.querySelector('.woman-image');
      const man = myContainer.querySelector('.man-image');
      const fog = myContainer.querySelector('.fog-image');

      // this.parallaxEffect(myContainer, woman, man, fog);
   }

   this.updateButtons = function (currentPage) {
      // const menuLinks = menu.querySelectorAll(".mainmenu__link");

      // for (let link of menuLinks) {
      //    currentPage === link.getAttribute("href").slice(1) ? link.classList.add("active") : link.classList.remove("active");
      // }
   }

   this.logInUser = function () {
      window.location.hash = "#mainpage";
   }

   // this.parallaxEffect = function (container, img1, img2, img3) {
   //    myContainer = container;

   //    if (myContainer && img1 && img2 && img3) {
   //       const containerWidth = myContainer.offsetWidth;
   //       const containerHeight = myContainer.offsetHeight;

   //       //коэффициенты
   //       const forMan = 30;
   //       const forWoman = 20;
   //       const forFog = 40;

   //       //Скорость анимации
   //       const speed = 0.05;

   //       //Объявление переменных
   //       let posX = 0;
   //       let posY = 0;
   //       let coordXPercent = 0;
   //       let coordYPercent = 0;

   //       const parallaxFunction = () => {
   //          const distX = coordXPercent - posX;
   //          const distY = coordYPercent - posY;

   //          posX = posX + (distX * speed);
   //          posY = posY + (distY * speed);

   //          img1.style.cssText = `transform: translate(${posX / forMan}%,${posY / forMan}%);`;
   //          img2.style.cssText = `transform: translate(${posX / forWoman}%,${posY / forWoman}%);`;
   //          img3.style.cssText = `transform: translate(${posX / forFog}%,${posY / forFog}%);`;

   //          requestAnimationFrame(parallaxFunction);
   //       }

   //       myContainer.addEventListener("mousemove", function (el) {
   //          // Ноль на середине
   //          const coordX = el.pageX - containerWidth / 2;
   //          const coordY = el.pageY - containerHeight / 2;

   //          //Получаем проценты
   //          coordXPercent = coordX / containerWidth * 100;
   //          coordYPercent = coordY / containerHeight * 100;
   //       });

   //       parallaxFunction();
   //    }
   // }

   this.openLogInWindow = function () {
      modalWindow.classList.remove("modal_closed");
      modalOverlay.classList.remove("modal_closed");
   }

   this.closeLogInWindow = function () {
      modalWindow.classList.add("modal_closed");
      modalOverlay.classList.add("modal_closed");
      usernameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
      usernameInput.classList.remove('invalid');
      usernameInput.classList.remove('valid');
      emailInput.classList.remove('invalid');
      emailInput.classList.remove('valid');
      passwordInput.classList.remove('invalid');
      passwordInput.classList.remove('valid');
   }

   this.changeToRegistration = function () {
      usernameInput.value = '';
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
      usernameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
      usernameInput.classList.remove('valid');
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
   }

   this.ifError = function (error) {
      alert('Произошел сбой, повторите еще раз!');
   }

   this.usernameValidation = function () {
      usernameInput.classList.add('invalid');
      usernameInput.classList.remove('valid');
      usernameToast.classList.remove('hidden');
   }

   this.usernameCorrectValidation = function () {
      usernameInput.classList.remove('invalid');
      usernameInput.classList.add('valid');
      usernameToast.classList.add('hidden');
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
}

export default View;