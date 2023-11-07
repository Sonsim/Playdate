function updateViewCreateUser() {
  let page = document.getElementById("app");
  const path = model.app.allPages;

  page.innerHTML = /*HTML*/ `
    <div id="createUserBody">
        <div id="backbox">
            <div id="logo-header-box">
                <div id="logo-box"><img id="logo" src="img/Playdate.png" alt="Playdate Logo"> </div><br>
                <div class="Topline"><h2 class="header-create-user">Opprett bruker</h2> </div>
            </div>
                <img id="profilepic" src="img/userprofile/profilepic.png" alt="Profilbilde placeholder">
                <hr>
                <div><span>Last opp bilde: </span><input onchange="uploadImage(this)" type="file" /></div>
                <div id="wrongImgSrc" class="wrongInput"></div>
                <hr>
            <div id="userData">
                    <input id="nameInput"type="text" placeholder="Fullt navn">
                    <div id="wrongUserName" class="wrongInput"></div>
                     <hr>
                    <input id="birthdayInput" type="text" placeholder="DD/MM/YYYY">
                    <div id="wrongBirthday" class="wrongInput"></div>
                     <hr>
                    <input id="locationInput" type="text" placeholder="Boststed">
                    <div id="wrongLocation" class="wrongInput"></div>
                    <hr>
                    <input id="emailInput"type="email" placeholder="Epostadresse">
                    <div id="wrongEmail" class="wrongInput"></div>
                    <hr>
                    <input id="passwordInput" type="password" placeholder="Passord">
                    <div id="wrongPassword" class="wrongInput"></div>
                    <hr>
                    <input id="reapeatPasswordInput" type="password" placeholder="Gjenta passord">
                    <div id="wrongRepeatPassword" class="wrongInput"></div>
                    <hr>
            </div>
                <div>
                    <button id="backbutton" onclick="updateView('${path.loginPage}')">Tilbake</button>
                    <button onclick="createNewUser()">Videre</button>
                </div>
        </div>
    </div>`;
}
