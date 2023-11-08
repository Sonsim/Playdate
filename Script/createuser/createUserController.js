function uploadImage(htmlElement) {
  const selectedImage = htmlElement.files[0];
  const profileImage = document.getElementById("profilepic");

  if (selectedImage) {
    const imageUrl = URL.createObjectURL(selectedImage);
    profileImage.src = imageUrl;
  }
}

function createNewUser() {
  //Dom-elementer
  const img = document.getElementById("profilepic");
  const name = document.getElementById("nameInput").value;
  const birthday = document.getElementById("birthdayInput").value;
  const location = document.getElementById("locationInput").value;
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  const reapeatPassword = document.getElementById("reapeatPasswordInput").value;

  const path = model.app.allPages;

  //Verifisere bruker input
  const imgRegex = /\bhttps?:\/\/\S+\.(?:png|jpg|jpeg|gif|bmp|svg|webp|tiff|ico)\b|\b\S+\.(?:png|jpg|jpeg|gif|bmp|svg|webp|tiff|ico)\b|https?:\/\/\S+\b|\S+\b/;
  const imgVerify = imgRegex.test(img.src);

  const nameRegex = /^[A-Za-z]+( [A-Za-z]+)+$/;
  const nameVerify = nameRegex.test(name);

  const birthdayRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; //Matches dd/mm/yyyy
  const birthdayVerify = birthdayRegex.test(birthday);

  const locationRegex = /^[A-ZÅÄÖa-zåäö\s-]+$/;
  const locationVerify = locationRegex.test(location);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailVerify = emailRegex.test(email);

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; //Must contain one big letter, one digit, must be 8 long
  const passwordVerify = passwordRegex.test(password);

  const reapeatPasswordVerify = false;
  if(reapeatPassword) {
   reapeatPasswordVerify = password == reapeatPassword;
  }

  //Lagre bruker i modellen
  if (imgVerify && nameVerify && birthdayVerify && locationVerify && emailVerify && passwordVerify && reapeatPasswordVerify) {
    //Dette lager et nytt objekt med input verdiene
    const newUser = {
      name: name,
      age: birthday,
      location: location,
      email: email,
      password: password,
      reapeatPassword: reapeatPassword,
      img: img.src,
    };

    //Dette lagrer newUser i modellen
    model.users.owners["newUser"] = newUser;

    updateView(path.createPetPage);
  }

  if (imgVerify == false) {
    document.getElementById("wrongImgSrc").textContent = "Vennligst last opp et bilde";
  }
  if (nameVerify == false) {
    document.getElementById("wrongUserName").textContent = "Vennligst oppgi både navn og etternavn";
  }
  if (birthdayVerify == false) {
    document.getElementById("wrongBirthday").textContent = "Vennligst oppgi en gyldig dato";
  }
  if (locationVerify == false) {
    document.getElementById("wrongLocation").textContent = "Vennligst oppgi et gyldig sted";
  }
  if (emailVerify == false) {
    document.getElementById("wrongEmail").textContent = "Vennligst oppgi en gyldig epost";
  }
  if (passwordVerify == false) {
   document.getElementById("wrongPassword").textContent = "Passord må være minst 8 tegn langt, og ha minst en stor bokstav og ett tall";
 }
 if (reapeatPasswordVerify == false) {
   document.getElementById("wrongRepeatPassword").textContent = "Passord må være like";
 }
}
