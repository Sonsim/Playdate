function uploadImage (htmlElement) {
   const selectedImage = htmlElement.files[0];
   const profileImage = document.getElementById("profilepic");

   if(selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      profileImage.src = imageUrl;
   }
}

function createNewUser() {
   //Dom-elementer
   const img = document.getElementById("profilepic").scr;
   const name = document.getElementById("nameInput").value;
   const birthday = document.getElementById("birthdayInput").value;
   const location = document.getElementById("locationInput").value;
   const email = document.getElementById("emailInput").value;
   const password = document.getElementById("passwordInput").value;
   const reapeatPassword = document.getElementById("reapeatPasswordInput").value;

   //Verifisere bruker input
   let nameRegex = /^[A-Za-z]+( [A-Za-z]+)+$/;
   let nameVerify = nameRegex.test(name);

   let birthdayRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; //Matches dd/mm/yyyy
   let birthdayVerify = birthdayRegex.test(birthday);

   let locationRegex = /^[\w\s,-]+$/;
   let locationVerify = locationRegex.test(location);

   let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
   let emailVerify = emailRegex.test(email);

   let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; //Must contain one big letter, one digit, must be 8 long
   let passwordVerify = passwordRegex.test(password);

   let reapeatPasswordVerify = password == reapeatPassword;



   //Lagre bruker i modellen
   if(nameVerify && birthdayVerify && locationVerify && emailVerify && passwordVerify && reapeatPasswordVerify) {
      //Dette lager et nytt objekt med input verdiene
      const newUser = {
          name: name,
          age: birthday,
          location: location,
          email: email,
          password: password,
          reapeatPassword: reapeatPassword,
          img: img,
      };

      //Dette lagrer newUser i modellen
      model.users.owners["newUser"] = newUser;
      console.log(model.users.owners);
   }
}
