class View {
   myContainer = null;
   modalLogIn = null;
   routesObj = null;
   contentContainer = null;
   woman = null;
   man = null;
   fog = null;

   init(container, routes) {
      this.myContainer = container;

      this.routesObj = routes;
      // this.contentContainer = this.myContainer.querySelector('#wrapper');

      // this.modalWindow = this.myContainer.querySelector("#modal");
      // this.modalOverlay = this.myContainer.querySelector(".modal__overlay");
      // this.modalHeaderLogin = this.myContainer.querySelector('.modal-header.login');
      // this.modalButtonLogin = this.myContainer.querySelector('.form-submit-login');
      // this.modalBlockLogin = this.myContainer.querySelector('.form-login__block');
      // this.modalHeaderRegistration = this.myContainer.querySelector('.modal-header.register');
      // this.modalButtonRegistration = this.myContainer.querySelector('.form-submit-register');
      // this.modalBlockRegistration = this.myContainer.querySelector('.form-register__block');
      // this.successfulRegistrationBlock = this.myContainer.querySelector('.successful-registration-block');

      // this.usernameInput = this.myContainer.querySelector('#username');
      // this.usernameToast = this.myContainer.querySelector('.username-toast');
      // this.emailInput = this.myContainer.querySelector('#email');
      // this.emailToast = this.myContainer.querySelector('.email-toast');
      // this.enterPassword = this.myContainer.querySelector('#password');
      // this.passwordToast = this.myContainer.querySelector('.password-toast');
      // this.userExist = this.myContainer.querySelector('.register-user-exist');
   }

   renderContent(hashPageName) {
      let routeName = "default";

      if (hashPageName.length > 0) {
         routeName = hashPageName in routes ? hashPageName : "error";
      }

      window.document.title = this.routesObj[routeName].title;
      this.myContainer.innerHTML = this.routesObj[routeName].render(`${routeName}`);
      // this.updateButtons(routesObj[routeName].id);

      this.modalWindow = this.myContainer.querySelector("#modal");
      this.modalOverlay = this.myContainer.querySelector(".modal__overlay");
      this.modalHeaderLogin = this.myContainer.querySelector('.modal-header.login');
      this.modalButtonLogin = this.myContainer.querySelector('.form-submit-login');
      this.modalBlockLogin = this.myContainer.querySelector('.form-login__block');
      this.modalHeaderRegistration = this.myContainer.querySelector('.modal-header.register');
      this.modalButtonRegistration = this.myContainer.querySelector('.form-submit-register');
      this.modalBlockRegistration = this.myContainer.querySelector('.form-register__block');
      this.successfulRegistrationBlock = this.myContainer.querySelector('.successful-registration-block');

      this.usernameInput = this.myContainer.querySelector('#username');
      this.usernameToast = this.myContainer.querySelector('.username-toast');
      this.emailInput = this.myContainer.querySelector('#email');
      this.emailToast = this.myContainer.querySelector('.email-toast');
      this.enterPassword = this.myContainer.querySelector('#password');
      this.passwordToast = this.myContainer.querySelector('.password-toast');
      this.userExist = this.myContainer.querySelector('.register-user-exist');

      this.woman = this.myContainer.querySelector('.woman-image');
      this.man = this.myContainer.querySelector('.man-image');
      this.fog = this.myContainer.querySelector('.fog-image');

      this.parallaxEffect(this.myContainer, this.woman, this.man, this.fog);
   }

   updateButtons(currentPage) {
      // const menuLinks = menu.querySelectorAll(".mainmenu__link");

      // for (let link of menuLinks) {
      //    currentPage === link.getAttribute("href").slice(1) ? link.classList.add("active") : link.classList.remove("active");
      // }
   }

   parallaxEffect(container, img1, img2, img3) {
      this.myContainer = container;
      // this.woman = img1;
      // this.man = img2;
      // this.fog = img3;

      if (this.myContainer && img1 && img2 && img3) {
         const containerWidth = this.myContainer.offsetWidth;
         const containerHeight = this.myContainer.offsetHeight;

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

         this.myContainer.addEventListener("mousemove", function (el) {
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
      this.successfulRegistrationBlock.classList.add('hidden');
   }

   ifUserExistShow() {
      this.userExist.classList.remove('hidden');
   }

   ifUserNotExistHide() {
      this.userExist.classList.add('hidden');
   }

   successfulRegistration() {
      this.successfulRegistrationBlock.classList.remove('hidden');
   }

   ifError(error) {
      alert('Произошел сбой, повторите еще раз!');
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