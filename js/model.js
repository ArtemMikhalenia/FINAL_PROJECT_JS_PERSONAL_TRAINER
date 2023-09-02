import { getDatabase, ref, set, update, get, child } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

// import { getAuth, auth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

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
   this.registerUser = async function (email, password) {
      await createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {

            const user = userCredential.user;

            set(ref(database, "UsersList/" + user.uid),
               {
                  username: 'Нет данных',
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

   this.logInUser = async function (email, password) {
      await signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;

            update(ref(database, "UsersList/" + user.uid),
               {
                  // username: 'Нет данных',
                  email: email,
                  // password: password,
                  // fullName: 'Нет данных',
                  // birthday: 'Нет данных',
                  // gender: 'Нет данных',
                  // weight: 'Нет данных',
                  // height: 'Нет данных',
                  // medicalInfo: 'Нет данных',
                  // goal: 'Нет данных',
                  // phone: 'Нет данных',
                  // achievements: 'Нет данных',
               })

            myView.successfulLogIn();
         })
         .catch((error) => {
            const errorCode = error.code;

            myView.ifError(errorCode);
         });
   }

   this.openExerciseModal = function () {
      myView.openExerciseModal();
   }

   this.closeExerciseModal = function () {
      myView.closeExerciseModal();
   }

   this.addExercise = function (exerciseName, exerciseSet, exerciseWeight, exerciseTime) {
      myView.addExercise(exerciseName, exerciseSet, exerciseWeight, exerciseTime);
   }

   // this.dragExerciseStart = function (event) {
   //    myView.dragExerciseStart(event);
   // }

   // this.dragExerciseEnd = function (event) {
   //    myView.dragExerciseEnd(event);
   // }

   this.removeExercise = function (event) {
      myView.removeExercise(event);
   }

   this.updateState = function (pageName) {
      myView.renderContent(pageName);
   }
}

export default Model;