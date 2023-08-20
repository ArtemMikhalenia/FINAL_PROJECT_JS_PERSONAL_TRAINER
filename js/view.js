class View {
   myContainer = null;
   modalLogIn = null;

   init(container) {
      this.myContainer = container;
      this.modalLogIn = document.getElementById("modal-login");
   }

   openLogInWindow() {
      this.modalLogIn.classList.remove("modal_closed");
   }

   closeLogInWindow() {
      this.modalLogIn.classList.add("modal_closed");
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