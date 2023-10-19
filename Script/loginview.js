function updateViewLogin () {
    let page = document.getElementById('app');

    page.innerHTML = /*HTML*/ `
    <div id="loginPage">
        <h1 id="heading">Playdate</h1>
        <img src="../img/Playdate.png" alt="bilde av hund">
        <input type="text" placeholder="epost/brukernavn" id="inputDiv">
        <input type="text" placeholder="passord" id="inputDiv">
        <div id="buttons">
            <button id="button" onclick="login()">Logg inn</button>
            <button id="button" onclick="newuser()">Ny bruker?</button>
            <button id="button">Glemt passord?</button>
        </div>
        <div>
            <label for="">Husk meg</label>
            <input type="checkbox" id="myCheckbox" placeholder="Forbli innlogget">
        </div>
    </div>
    `
}