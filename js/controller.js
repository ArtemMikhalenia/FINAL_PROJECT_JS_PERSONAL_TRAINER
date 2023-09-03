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

   function updateState() {
      const hashPageName = location.hash.slice(1).toLowerCase();
      myModel.updateState(hashPageName);
      myModel.manageUser();
      myModel.loadExercises();

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

      const buttonAddExercise = document.querySelector('.add-exercise');
      buttonAddExercise && buttonAddExercise.addEventListener('click', openExerciseModal);

      const buttonLogOut = document.querySelector('.btn-logout');
      buttonLogOut && buttonLogOut.addEventListener('click', logOutUser);

      //drag&drop

      // document.querySelector('.todo-block__content').addEventListener("dragover", function (event) {
      //    event.preventDefault();
      //    // this.classList.add("parent-over");
      // });

      // document.querySelector('.todo-block__content').addEventListener("dragleave", function (event) {
      //    // this.classList.remove("parent-over");
      // });

      // document.querySelector('.todo-block__content').addEventListener("drop", dropElement);

      // document.querySelector('.training-block__inprogress').addEventListener("dragover", function (event) {
      //    event.preventDefault();
      //    // this.classList.add("parent-over");
      // });

      // document.querySelector('.training-block__inprogress').addEventListener("dragleave", function (event) {
      //    // this.classList.remove("parent-over");
      // });

      // document.querySelector('.training-block__inprogress').addEventListener("drop", dropElement);
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

      const mainBlockBody = document.querySelector('.mainblock__body');
      console.log(mainBlockBody);

      let buttonEdit = myContainer.querySelectorAll('span.edit-btn');
      buttonEdit.forEach(el => {
         el.addEventListener('click', function () {
            console.log(buttonEdit);
         })
      })
      console.log(buttonEdit);
   }

   function logOutUser() {
      myModel.logOutUser();
   }

   function registerUser() {
      myModel.registerUser(inputEmail.value, inputPassword.value);
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

   // function dropElement(event) {
   //    event.preventDefault();
   //    let data = event.dataTransfer.getData("text"); // id
   //    let content = event.dataTransfer.getData("content"); // название услуги

   //    // if (this === document.querySelector('.todo-block__content') && !(data in services)) {
   //    //    services[data] = content;
   //    // }

   //    // if (this === document.querySelector('.training-block__inprogress')) {
   //    //    delete services[data];
   //    // }

   //    this.append(document.getElementById(data));
   // }

   function removeExercise(event) {
      myModel.removeExercise(event);
   }

   // function dragExerciseStart(event) {
   //    myModel.dragExerciseStart(event);
   // }

   // function dragExerciseEnd(event) {
   //    myModel.dragExerciseEnd(event);
   // }

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