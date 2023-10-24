function updateForgotPasswordView() {
  let app = document.getElementById('app');
  let path = model.app.allPages;

  app.innerHTML = /*HTML*/
    `
    <div id="forgotPasswordBody">
      <div>
        <header>Glemt Passord</header>
      </div>
      <br> <br> <br>
      <div id="text-box">
       <input type="text" placeholder="Epostadresse:" id="inputDiv">
      </div>
      <br> <br>
      <div id="email">
        <button id="email" onclick="updateView('${path.loginPage}')">Send epost</button>
      </div>
      <br> <br>
      <div id="bilde">
        <img src="img/Playdate.png" alt="bilde av hund">
      </div>
      <br> <br>
      <div id="return">
        <button id="return" onclick="updateView('${path.loginPage}')">Tilbake</button>
      </div>
    </div>
    `
};