let owners = model.users.owners;
let path = model.app.allPages;

function checkLogin() {

    let ownerNames = Object.keys(owners);
    const inputEmail = document.querySelector(".inputEmail");
    const inputPass = document.querySelector(".inputPass");

    let loginValue = false;

    ownerNames.forEach(function (owner) {
        if (owners[owner].email == inputEmail.value) {
            if (owners[owner].password == inputPass.value) {
                model.app.currentUser = owner;
                loginValue = true;
                updateView(path.mainPage);
            }
        }
    });

    if (loginValue == false) {
        const errorMessageBox = document.getElementById("loginErrorMessage");
        errorMessageBox.textContent = "Feil epost eller passord";
    };
};