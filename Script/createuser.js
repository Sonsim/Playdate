function updateViewCreateUser() {
    let page = document.getElementById('app');

    app.innerHTML = /*HTML*/ `
    <div id="app">
        <div id="backbox">
            <div class="Topline"><h2>Opprett bruker</h2> </div>
                <img id="profilepic" src="../img/userprofile/profilepic.png" alt="Profilbilde placeholder">
                <hr>
                <button>Last opp bilde</button>
                <hr>
            <div id="userData">
                
                    <input type="text" placeholder="Fullt navn">
                     <hr>
                
                    <div><input type="text" placeholder="Fødelsdato"></div>
                     <hr>
                
                    <input type="text" placeholder="Boststed">
                    <hr>
            
                    <input type="text" placeholder="Epostadresse">
                    <hr>
            
                    <input type="password" placeholder="Passord">
                    <hr>
            
                    <input type="password" placeholder="Gjenta passord">
                    <hr>
            </div>
                <button><a href="create-pet.html">Videre </a></button> <br>
                <div><img id="logo" src="../img/Playdate.png" alt="Playdate Logo"> </div><br>
                <button id="backbutton"><a href="login.html">Tilbake</a></button>
        </div>
    </div>

    `

}