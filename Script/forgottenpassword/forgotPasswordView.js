function updateForgotPasswordView() {
  let app = document.getElementById('app');
  let path = model.app.allPages;

  app.innerHTML = /*HTML*/
    `
    <div id="forgotPasswordBody">
      <div id="backboxFP">
        <h1 id="headerFP">Glemt Passord</h1>
    
      <br> 
      <div id="text-box">
       <input type="text" placeholder="Epostadresse" id="emailInput">
      </div>
      <br> 
      <div>
        <button id="email" onclick="; sendEmail();updateView('${path.loginPage}')">Send epost</button>
      </div>
      <br> <br>
      <div id="bilde">
        <img src="img/Playdate.png" alt="Playdate Logo">
      </div>
      <br> <br>
      <div id="return">
        <button id="returnbtn" onclick="updateView('${path.loginPage}')">Tilbake</button>
      </div>
      </div>
    </div>
    `
};