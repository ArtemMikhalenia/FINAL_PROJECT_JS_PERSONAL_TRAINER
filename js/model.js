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

   logInUser() {

   }

   //метод регистрации пользователя
   registerUser(user, email, password) {
      const db = getDatabase();
      const dbRef = ref(db);

      //получаем путь к нашей папке в базе
      get(child(dbRef, "UsersList/" + user))
         .then((snapshot) => {
            //если пользователь существует, то вызываем метод View
            if (snapshot.exists()) {
               this.myView.ifUserExist();
            } else {
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

export default Model;