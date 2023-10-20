function goBack() {
    model.app.currentPage = 'loginPage';
    updateView();

}

function next() {
    model.app.currentPage = 'createPetPage';
    updateView();
}