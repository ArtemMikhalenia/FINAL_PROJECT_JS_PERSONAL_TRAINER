import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

// import { getAuth, auth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

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

   //метод валидации
   // this.isEmptyOrSpaces = function (string) {
   //    return string === null || string.match(/^ *$/) !== null;
   // }

   // this.validateData = function (user, email, password) {
   //    //только латинские буквы
   //    let userNameRegEx = /^[a-zA-Z\s]+$/;
   //    //стандартная валидация почты
   //    let emailRegEx = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
   //    //пароль должен содержать как минимум 1 цифру, 1 букву нижнего регистра, 1 букву верхнего регистра и не менее 8 символов
   //    let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

   //    // if (this.isEmptyOrSpaces(user) || this.isEmptyOrSpaces(email) || this.isEmptyOrSpaces(password)) {
   //    //    if (this.isEmptyOrSpaces(user)) {
   //    //       myView.isEmptyOrSpaces(user);
   //    //    } else if (this.isEmptyOrSpaces(email)) {
   //    //       myView.isEmptyOrSpaces(email);
   //    //    } else if (this.isEmptyOrSpaces(password)) {
   //    //       myView.isEmptyOrSpaces(password);
   //    //    }
   //    //    // myView.isEmptyOrSpaces();
   //    //    return false;
   //    // }

   //    if (!userNameRegEx.test(user)) {
   //       myView.usernameValidation();
   //       return false;
   //    } else {
   //       myView.usernameCorrectValidation();
   //    }

   //    if (!emailRegEx.test(email)) {
   //       myView.emailValidation();
   //       return false;
   //    } else {
   //       myView.emailCorrectValidation();
   //    }

   //    if (!passwordRegEx.test(password)) {
   //       myView.passwordValidation();
   //       return false;
   //    } else {
   //       myView.passwordCorrectValidation();
   //    }

   //    return true;
   // }


   //метод регистрации пользователя

   this.registerUser = async function (email, password) {
      // if (!this.validateData(user, email, password)) {
      //    return;
      // } else {
      //    const db = getDatabase();
      //    const dbRef = ref(db);

      //    //получаем путь к нашей папке в базе
      //    await get(child(dbRef, "UsersList/" + user))
      //       .then((snapshot) => {
      //          //если пользователь существует, то вызываем метод View
      //          if (snapshot.exists()) {
      //             const dbUser = snapshot.val();
      //             console.log(dbUser)
      //             if (email === dbUser.email) {
      //                console.log(dbUser)
      //             }
      //             myView.ifUserExistShow();
      //          } else {
      //             myView.ifUserNotExistHide();
      //             //если пользователь отсутствует, то записываем его в базу
      //             set(ref(db, "UsersList/" + user),
      //                {
      //                   username: user,
      //                   email: email,
      //                   password: password,
      //                   fullName: 'Нет данных',
      //                   birthday: 'Нет данных',
      //                   gender: 'Нет данных',
      //                   weight: 'Нет данных',
      //                   height: 'Нет данных',
      //                   medicalInfo: 'Нет данных',
      //                   goal: 'Нет данных',
      //                   phone: 'Нет данных',
      //                   achievements: 'Нет данных',
      //                })
      //                //если регистрация прошла успешно, то вызываем метод View
      //                .then(() => {
      //                   myView.successfulRegistration();
      //                })
      //                //если регистрация не удалась, то вызываем метод View
      //                .catch((error) => {
      //                   myView.ifError(error);
      //                })
      //          }
      //       })
      // }

      await createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {

            const user = userCredential.user;

            set(ref(database, "UsersList/" + user.uid),
               {
                  username: 'Нет данных',
                  email: email,
                  password: password,
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

   this.logInUser = function () {
      myView.logInUser();
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