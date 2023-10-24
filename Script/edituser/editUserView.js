function updateViewEditUser() {
    let app = document.getElementById('app');

    app.innerHTML = /*HTML*/ `
    <div id="box">
    <div id="editpage">
        <div id="user">
            <div><img id="userpic" src="img/userprofile/sondre.jpg" alt=""></div><br>
            <div id="changeimg"><button>Endre bilde</button></div>
            
            <div id="edituser">
                <div><input type="text" placeholder="Navn"></div>
                <hr align="left">
                <div><input type="text" placeholder="Sted"></div>
                <hr align="left">
                <div><input type="text" placeholder="Alder"></div>
                <hr align="left">
                <div><input type="text" placeholder="Kjønn"></div>
                <hr align="left">
            </div>
        </div>
        <div id="pet">
            <div><img id="petpic" src="img/petprofile/dogs/Easy1.jpg" alt=""></div><br>
            <div id="changepetimg"><button>Endre bilde</button></div>
            <div id="editpet">
                <div><input type="text" placeholder="Navn"></div>
                <hr align="left">
                <div><input type="text" placeholder="Rase"></div>
                <hr align="left">
                <div><input type="number" placeholder="Alder"></div>
                <hr align="left">
                <div><input type="text" placeholder="Favoritt leke"></div>
                <hr align="left">
            </div>
        </div>
        
    </div>
    </div>
    <div id="editbuttons"><div><button id="savechanges ">Lagre endringer</button></div><div><button id="addanimal">Legg til dyr</button></div></div>
    <div id="backbutton"><button>Tilbake</button></div>
    `


}