function createNewUser() {
   const img = document.getElementById("profilepic").scr;
   const name = document.getElementById("nameInput").value;
   const birthday = document.getElementById("birthdayInput").value;
   const location = document.getElementById("locationInput").value;
   const email = document.getElementById("emailInput").value;
   const password = document.getElementById("passwordInput").value;
   const reapeatPassword = document.getElementById("reapeatPasswordInput").value;

   //Dette lager et nytt objekt med input verdiene
   const newUser = {
         name: name,
         age: birthday,
         location: location,
         password: password,
         img: img,
   };

   //Dette lagrer newUser i modellen
   model.users.owners["newUser"] = newUser;
   console.log(model.users.owners);
}