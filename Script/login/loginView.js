function updateViewLogin() {
    let page = document.getElementById('app');
    let path = model.app.allPages;

    page.innerHTML = /*HTML*/ `
    <div id="loginBody">
        <div id="loginPage">
                <h1 id="heading">Playdate</h1>
                <img class="logo" src="img/Playdate.png" alt="bilde av hund">
                <input type="email" placeholder="Epost" id="inputDiv">
                <input type="password" placeholder="Passord" id="inputDiv">
            <div id="buttons">
                <div class="loginButtonsBox">
                    <button class="loginBtn"onclick="updateView('${path.mainPage}')">Logg inn</button>
                    <button class="loginButtonForgotPass"onclick="updateView('${path.forgottenPasswordPage}')">Glemt passord?</button>
                </div>
                <div class="forgot-password-box">
                  <button class="newUserBtn"onclick="updateView('${path.createUserPage}')">Ny bruker?</button>
                </div>
            </div>

            <div class="remember-me-box">
                <label for="">Husk meg</label>
                <input type="checkbox" id="myCheckbox" placeholder="Forbli innlogget">
            </div>
        </div>
    </div>
    `
}
