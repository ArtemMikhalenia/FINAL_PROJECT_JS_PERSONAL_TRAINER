class Controller {
   myContainer = null;
   myModel = null;

   init(model, container) {
      this.myContainer = container;
      this.myModel = model;

      const buttonOpenModal = this.myContainer.querySelector('.btn-start');
      buttonOpenModal.addEventListener('click', this.openLogInWindow.bind(this));

      const buttonCloseModal = this.myContainer.querySelector('#modal-close');
      buttonCloseModal.addEventListener('click', this.closeLogInWindow.bind(this));
   }

   openLogInWindow() {
      this.myModel.openLogInWindow();
   }

   closeLogInWindow() {
      this.myModel.closeLogInWindow();
   }
}

// function ClockController() {
//    let myClockContainer = null;
//    let myClockModel = null;

//    this.init = function (model, container) {
//       myClockModel = model;
//       myClockContainer = container;

//       const buttonStart = myClockContainer.querySelector('.btn-start');
//       buttonStart.addEventListener('click', this.startFunc);
//       const buttonStop = myClockContainer.querySelector('.btn-stop');
//       buttonStop.addEventListener('click', this.stopFunc);
//    }

//    this.startFunc = function () {
//       myClockModel.startClock();
//    }

//    this.stopFunc = function () {
//       myClockModel.stopBtn();
//    }
// };

export default Controller;