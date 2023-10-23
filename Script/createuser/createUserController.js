function createNewUser() {
   const newUser = Object.create(model.input.newUserForm);

   newUser.FullName = "Geir";

   console.log(newUser)
   
}

createNewUser();



