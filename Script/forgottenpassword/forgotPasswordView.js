function updateForgotPasswordView () {
    let app = document.getElementById('app');

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
        <button onclick id="email">Send epost</button>
      </div>
      <br> <br>
      <div id="bilde">
        <img src="../img/Playdate.png" alt="bilde av hund">
      </div>
      <br> <br>
      <div id="return">
        <button id="return">Tilbake</button>
      </div>
    </div>
    `
};