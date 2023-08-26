import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

class Model {
   myView = null;

   init(view) {
      this.myView = view;
   }

   openLogInWindow() {
      this.myView.openLogInWindow();
   }

   closeLogInWindow() {
      this.myView.closeLogInWindow();
   }

   changeToRegistration() {
      this.myView.changeToRegistration();
   }

   changeToLogin() {
      this.myView.changeToLogin();
   }

   validateData(user, email, password) {
      //только латинские буквы
      let userNameRegEx = /^[a-zA-Z\s]+$/;
      //стандартная валидация почты
      let emailRegEx = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      //пароль должен содержать как минимум 1 цифру, 1 букву нижнего регистра, 1 букву верхнего регистра и не менее 8 символов
      let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

      if (!userNameRegEx.test(user)) {
         this.myView.usernameValidation();
         return false;
      } else {
         this.myView.usernameCorrectValidation();
      }

      if (!emailRegEx.test(email)) {
         this.myView.emailValidation();
         return false;
      } else {
         this.myView.emailCorrectValidation();
      }

      if (!passwordRegEx.test(password)) {
         this.myView.passwordValidation();
         return false;
      } else {
         this.myView.passwordCorrectValidation();
      }

      return true;
   }

   //метод регистрации пользователя
   registerUser(user, email, password) {
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
                  this.myView.ifUserExistShow();
               } else {
                  this.myView.ifUserNotExistHide();
                  //если пользователь отсутствует, то записываем его в базу
                  set(ref(db, "UsersList/" + user),
                     {
                        username: user,
                        email: email,
                        password: password,
                     })
                     //если регистрация прошла успешно, то вызываем метод View
                     .then(() => {
                        this.myView.successfulRegistration();
                     })
                     //если регистрация не удалась, то вызываем метод View
                     .catch((error) => {
                        this.myView.ifError(error);
                     })
               }
            })
      }
   }
}

export default Model;