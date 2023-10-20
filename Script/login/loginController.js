function login () {
    model.app.currentPage = updateViewMain(), dogsByDefault();
    updateView();
}

function newuser() {
    model.app.currentPage = 'createUserPage';
    updateView();
}