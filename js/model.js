import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

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

   // this.parallaxEffect = function () {
   //    myView.parallaxEffect();
   // }

   //метод валидации
   this.validateData = function (user, email, password) {
      //только латинские буквы
      let userNameRegEx = /^[a-zA-Z\s]+$/;
      //стандартная валидация почты
      let emailRegEx = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      //пароль должен содержать как минимум 1 цифру, 1 букву нижнего регистра, 1 букву верхнего регистра и не менее 8 символов
      let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

      if (!userNameRegEx.test(user)) {
         myView.usernameValidation();
         return false;
      } else {
         myView.usernameCorrectValidation();
      }

      if (!emailRegEx.test(email)) {
         myView.emailValidation();
         return false;
      } else {
         myView.emailCorrectValidation();
      }

      if (!passwordRegEx.test(password)) {
         myView.passwordValidation();
         return false;
      } else {
         myView.passwordCorrectValidation();
      }

      return true;
   }

   //метод регистрации пользователя
   this.registerUser = function (user, email, password) {
      if (!this.validateData(user, email, password)) {
         return;
      } else {
         const db = getDatabase();
         const dbRef = ref(db);

         //получаем путь к нашей папке в базе
         get(child(dbRef, "UsersList/" + user))
            .then((snapshot) => {
               //если пользователь существует, то вызываем метод View
               if (snapshot.exists()) {
                  myView.ifUserExistShow();
               } else {
                  myView.ifUserNotExistHide();
                  //если пользователь отсутствует, то записываем его в базу
                  set(ref(db, "UsersList/" + user),
                     {
                        username: user,
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
                     //если регистрация прошла успешно, то вызываем метод View
                     .then(() => {
                        myView.successfulRegistration();
                     })
                     //если регистрация не удалась, то вызываем метод View
                     .catch((error) => {
                        myView.ifError(error);
                     })
               }
            })
      }
   }

   this.logInUser = function () {
      myView.logInUser();
   }

   this.updateState = function (pageName) {
      myView.renderContent(pageName);
   }
}

export default Model;