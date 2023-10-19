function login () {
    console.log("hi");
    model.app.currentPage = "mainPage";
    console.log(model.app.currentPage);
    updateView();
}

function newuser() {
    model.app.currentPage = 'createUserPage';
    updateView();
}