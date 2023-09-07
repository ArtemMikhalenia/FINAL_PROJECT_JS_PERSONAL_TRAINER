import { getDatabase, ref, set, update, get, child, push } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const firebaseConfig = {
   apiKey: "AIzaSyCmO3VrG4O2UluhvZaewlxjgcoRtevgST0",
   authDomain: "test-1-4f5f1.firebaseapp.com",
   databaseURL: "https://test-1-4f5f1-default-rtdb.firebaseio.com",
   projectId: "test-1-4f5f1",
   storageBucket: "test-1-4f5f1.appspot.com",
   messagingSenderId: "251035603728",
   appId: "1:251035603728:web:e0a8d5340e28a5a80c8b95",
   measurementId: "G-10LCGZCT33"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const settings = {
   start: 0,
   progress: 0,
   currentTime: "",
   playing: false,
   timerId: null,
   get milliseconds() {
      return Math.trunc(this.progress);
   }
};

function Model() {
   let myView = null;

   this.init = function (view) {
      myView = view;
   }

   this.updateState = function (_pageName) {
      myView.renderContent(_pageName);
   }

   this.openLogInWindow = function () {
      myView.openLogInWindow();
   }

   this.closeLogInWindow = function () {
      myView.closeLogInWindow();
   }

   this.changeToRegistration = function () {
      myView.changeToRegistration();
   }

   this.changeToLogin = function () {
      myView.changeToLogin();
   }

   this.parallaxEffect = function () {
      myView.parallaxEffect();
   }

   //метод регистрации пользователя
   this.registerUser = function (email, password) {
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            set(ref(database, "UsersList/" + user.uid),
               {
                  email: email,
                  fullName: 'Нет данных',
                  birthday: 'Нет данных',
                  gender: 'Нет данных',
                  weight: 'Нет данных',
                  height: 'Нет данных',
                  medicalInfo: 'Нет данных',
                  goal: 'Нет данных',
                  phone: 'Нет данных',
                  achievements: 'Нет данных',
               })
            myView.successfulRegistration();
         })
         .catch((error) => {
            const errorCode = error.code;
            myView.ifError(errorCode);
         });
   }

   //метод входа пользователя
   this.logInUser = function (email, password) {
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;

            // update(ref(database, "UsersList/" + user.uid),
            //    {
            //       email: email,
            //    })
            myView.successfulLogIn();
         })
         .catch((error) => {
            const errorCode = error.code;
            myView.ifError(errorCode);
         });
   }

   this.logOutUser = function () {
      signOut(auth).then(() => {
         myView.logOutUser();
      }).catch((error) => {
         myView.logOutUserError(error);
      });
   }

   //метод получения инфы текущего пользователя
   this.manageUser = function () {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            const uid = user.uid;
            get(child(ref(database), "UsersList/" + uid))
               .then(snapshot => {
                  const user = snapshot.val();
                  myView.renderInfo(user);
               })
         }
      });
   }

   this.openUserInfoModal = function () {
      const userUid = auth.currentUser.uid;
      get(child(ref(database), "UsersList/" + userUid))
         .then(snapshot => {
            const user = snapshot.val();
            myView.openUserInfoModal(user);
         })
         .catch((error) => {
            const errorCode = error.code;
            myView.ifError(errorCode);
         });
   }

   this.changeUserInfo = function (name, birthday, gender, weight, height, medicalInfo, goal, phone, email, achievements) {
      const userUid = auth.currentUser.uid;
      const user = {
         email: email,
         fullName: name,
         birthday: birthday,
         gender: gender,
         weight: weight,
         height: height,
         medicalInfo: medicalInfo,
         goal: goal,
         phone: phone,
         achievements: achievements,

      }
      update(ref(database, "UsersList/" + userUid), user);
      myView.renderInfo(user);
      myView.closeUserInfoModal();
   }

   this.closeUserInfoModal = function () {
      myView.closeUserInfoModal();
   }

   this.openExerciseModal = function () {
      myView.openExerciseModal();
   }

   this.closeExerciseModal = function () {
      myView.closeExerciseModal();
   }

   this.startStopwatch = function () {

      let ms, s, h, m;

      const stopwatch = document.querySelector('.stopwatch');
      if (settings.playing === false) {
         settings.playing = true;
         settings.timerId = window.requestAnimationFrame(startTimer);
      }

      if (settings.progress !== 0) {
         settings.start = performance.now() - settings.progress;
      }

      function startTimer(timestamp) {
         if (!settings.start) settings.start = timestamp;
         settings.progress = timestamp - settings.start;
         settings.timerId = window.requestAnimationFrame(startTimer);
         stopwatch.textContent = getDisplay();
      }

      function getDisplay() {
         ms = Math.trunc((settings.milliseconds / 10) % 100);
         s = Math.trunc(settings.milliseconds / 1000)
            .toString()
            .padStart(2, "0");
         h = parseInt(s / 3600);
         s = s % 3600;
         m = Math.trunc(s / 60)
            .toString()
            .padStart(2, "0");
         s = s % 60;

         settings.currentTime = `${formatTime(h)}:${formatTime(m)}:${formatTime(
            s
         )}:${formatTime(ms)}`;
         return settings.currentTime;
      }

      function formatTime(time) {
         return time.toString().padStart(2, "0");
      }
   }

   this.pauseTimer = function () {
      const stopwatch = document.querySelector('.stopwatch');
      settings.playing = false;
      window.cancelAnimationFrame(settings.timerId);
   }

   this.resetTimer = function () {
      const stopwatch = document.querySelector('.stopwatch');
      settings.start += settings.progress;
      settings.progress = 0.01;
      stopwatch.textContent = "00:00:00:00";
   }

   this.addExercise = function (exerciseName, exerciseSet, exerciseWeight, exerciseTime) {
      const userUid = auth.currentUser.uid;

      const exercise = {
         exerciseName: exerciseName,
         exerciseSet: exerciseSet,
         exerciseWeight: exerciseWeight,
         exerciseTime: exerciseTime,
      }

      push(child(ref(database), `UsersList/${userUid}/exercises/`), exercise)

      myView.addExercise(exercise);
      myView.closeExerciseModal();
   }

   this.removeExercise = function (event) {
      myView.removeExercise(event);
   }

   this.changeBlockColor = function (event) {
      myView.changeBlockColor(event);
   }

   this.loadExercises = async function () {
      const snapshot = await get(child(ref(database), 'ExerciseDatabase'));
      if (snapshot.exists()) {
         const exercises = snapshot.val();
         myView.renderExercises(exercises);
      }
   }

   this.loadProducts = async function () {
      const snapshot = await get(child(ref(database), 'Products'));
      if (snapshot.exists()) {
         const products = snapshot.val();
         myView.renderProducts(products);
      }
   }

   this.loadOptions = async function () {
      const snapshot = await get(child(ref(database), 'ExerciseDatabase'));
      if (snapshot.exists()) {
         const option = snapshot.val();
         myView.renderOptions(option);
      }
   }

   this.loadExercise = function () {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            const uid = user.uid;
            get(child(ref(database), `UsersList/${uid}/exercises/`))
               .then(snapshot => {
                  const user = snapshot.val();
                  myView.renderExercise(user);
               })
         }
      });
   }

   this.searchExercise = function (value) {
      myView.searchExercise(value);
   }

   this.searchProduct = function (value) {
      myView.searchProduct(value);
   }

   this.updateState = function (pageName) {
      myView.renderContent(pageName);
   }
}

export default Model;