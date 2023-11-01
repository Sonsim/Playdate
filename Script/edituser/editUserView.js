function updateViewEditUser() {
    let app = document.getElementById('app');
    let path = model.app.allPages;

    console.log(model.app.currentUser);
    let user = model.app.currentUser;
    let currentPic = model.users.owners[user].img;
    let currentPetPic = model.users.owners[user].pets[0].img
    
    app.innerHTML = /*HTML*/ `
    <div id="box">
    <div id="editpage">
        <div id="user">
            <div><img id="userpic" src="${currentPic}" alt=""></div><br>
            <div id="changeimg"><button>Endre bilde</button></div>
            
            <div id="edituser">
                <div><input id="ownerName" type="text" placeholder="Navn"></div>
                <hr align="left">
                <div><input id="ownerPlace" type="text" placeholder="Sted"></div>
                <hr align="left">
                <div><input id="ownerAge" type="text" placeholder="Alder"></div>
                <hr align="left">
                <div><input  id="ownerEmail" type="text" placeholder="Epost"></div>
                <hr align="left">
            </div>
        </div>
        <div id="pet">
            <div><img id="petpic" src="${currentPetPic}" alt=""></div><br>
            <div id="changepetimg"><button>Endre bilde</button></div>
            <div id="editpet">
                <div><input id="petName" type="text" placeholder="Navn"></div>
                <hr align="left">
                <div><input id=petRace type="text" placeholder="Rase"></div>
                <hr align="left">
                <div><input id="petAge" type="number" placeholder="Alder"></div>
                <hr align="left">
                <div><input id="petToy" type="text" placeholder="Favoritt leke"></div>
                <hr align="left">
            </div>
        </div>
    </div>
    </div>
    <div id="allbuttons">
        <div class="saveChangesAndAddAnimals">
          <button class="editUserHeightBtn" onclick="saveChanges()" id="savechanges" >Lagre endringer</button>
          <button class="editUserHeightBtn" onclick="updateView('${path.createPetPage}')" id="addanimal">Legg til dyr</button>
        </div>
        <div class="back-button">
          <button class="editUserHeightBtn" onclick="updateView('${path.mainPage}')"><i class="arrow left" ></i >Tilbake</button>
        </div>
    </div>
    `}