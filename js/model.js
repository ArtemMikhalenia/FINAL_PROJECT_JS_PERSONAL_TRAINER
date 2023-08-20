class Model {
   constructor() {
      this.myView = null;
   }

   init(view) {
      this.myView = view;
   }

   openLogInWindow() {
      this.myView.openLogInWindow();
   }

   closeLogInWindow() {
      this.myView.closeLogInWindow();
   }
}

function ClockModel() {
   let myClockView = null;
   let currentTime = null;
   let hours = null;
   let minutes = null;
   let seconds = null;
   let timerId = null;
   let timezone = 0;
   let offset = 0;

   this.init = function (view, timezone) {
      myClockView = view;
      this.timezone = timezone;
      this.startClock();
   }

   this.rotate = function () {
      currentTime = new Date();
      const offset = parseFloat(this.timezone);
      hours = 30 * (currentTime.getUTCHours() + offset + (1 / 60) * currentTime.getMinutes());
      minutes = 6 * (currentTime.getMinutes() + (1 / 60) * currentTime.getSeconds());
      seconds = 6 * currentTime.getSeconds();
      myClockView.rotateLines(hours, minutes, seconds);
   }

   this.startClock = function () {
      timerId = setInterval(this.rotate.bind(this), 1000);
   }

   this.stopBtn = function () {
      clearInterval(timerId);
   }
}

export default Model;