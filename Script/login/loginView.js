function updateViewLogin() {
    let page = document.getElementById('app');
    let path = model.app.allPages;

    page.innerHTML = /*HTML*/ `
    <div id="loginBody">
        <div id="loginPage">
        <h1 id="heading">Playdate</h1>
        <img src="img/Playdate.png" alt="bilde av hund">
        <input type="text" placeholder="epost/brukernavn" id="inputDiv">
        <input type="text" placeholder="passord" id="inputDiv">
        <div id="buttons">
        
            <button id="button"
             onclick="updateView(
                '${path.mainPage}')
                ">Logg inn</button>

            <button id="button"
             onclick="updateView(
                '${path.createUserPage}')
                ">Ny bruker?</button>

            <button id="button"
            onclick="updateView(
                '${path.forgottenPasswordPage}')
                ">Glemt passord?</button>
        </div>
        <div>
            <label for="">Husk meg</label>
            <input type="checkbox" id="myCheckbox" placeholder="Forbli innlogget">
        </div>
        </div>
    </div>
    `
}