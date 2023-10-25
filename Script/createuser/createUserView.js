function updateViewCreateUser() {
    let page = document.getElementById('app');
    const path = model.app.allPages;

    page.innerHTML = /*HTML*/ `
    <div id="createUserBody">
        <div id="backbox">
            <div class="Topline"><h2>Opprett bruker</h2> </div>
                <img id="profilepic" src="img/userprofile/profilepic.png" alt="Profilbilde placeholder">
                <hr>
                <div><span>Last opp bilde: </span><input onchange="uploadImage(this)" type="file" /></div>
                <hr>
            <div id="userData">
                    <input id="nameInput"type="text" placeholder="Fullt navn">
                     <hr>
                    <input id="birthdayInput" type="text" placeholder="Fødelsdato">
                     <hr>
                    <input id="locationInput" type="text" placeholder="Boststed">
                    <hr>
                    <input id="emailInput"type="text" placeholder="Epostadresse">
                    <hr>
                    <input id="passwordInput" type="password" placeholder="Passord">
                    <hr>
                    <input id="reapeatPasswordInput" type="password" placeholder="Gjenta passord">
                    <hr>
            </div>
                <button onclick="createNewUser(); updateView('${path.createPetPage}')">Videre</button> <br>
                <div><img id="logo" src="img/Playdate.png" alt="Playdate Logo"> </div><br>
                <button id="backbutton" onclick="updateView('${path.loginPage}')">Tilbake</button>
        </div>
    </div>`;

}