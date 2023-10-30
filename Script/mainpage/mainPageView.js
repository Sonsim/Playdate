function updateViewMain() {

  const path = model.app.allPages;
    document.getElementById('app').innerHTML = /*HTML*/ `

    <section id="page">
            <header>
              <img id="main-Logo" src="img/Playdate.png" alt="logo">
              <div id="user-profile">
                <div id="name">${model.app.currentUser}</div>
                <div id="profile-picture-box">
                  <img id="profile-picture" onclick="userProfileDropdown()" src="img/userprofile/profilepic.png" alt="Profile Picture">
                  <div class="user-profile-dropdown">
                    <div onclick="updateView('${path.editUserPage}')">Profil</div>
                    <div onclick="updateView('${path.chatPage}')">Innboks</div>
                    <div> 
                      <div id="settings" onclick="settingsDropdown()">Innstillinger<div>
                      <div class="settings-dropdown">
                        <div>Barkmode</div>
                        <div onclick="updateView('${path.editUserPage}')">Bytte passord</div>
                        <div>Tillat posisjon</div>
                        <div onclick="updateView('${path.feedbackPage}')">Send Tilbakemelding</div>
                      </div>
                    </div>
                    <div onclick="updateView('${path.loginPage}')">Logg av</div>
                </div>
              </div>
           </div>
           </div>
           </div>
            </header>
              <nav id="sidebar">
                <div id="petcategories" onclick="addUsers(this)">Hund</div>
                <div id="petcategories" onclick="addUsers(this)">Katt</div>
                <div id="petcategories" onclick="addUsers(this)">Gnagere</div> 
                <div id="petcategories" onclick="addUsers(this)">Hest</div> 
                <div id="petcategories" onclick="addUsers(this)">Sau</div> 
                <div id="petcategories" onclick="addUsers(this)">Fugl</div> 
              </nav>
            <main id="users"></main>
    </section>
    `;
};


function dogsByDefault () {
    let users = document.getElementById('users');
    users.innerHTML = "";

    let owners = model.users.owners;

    let arrayOfNames = Object.keys(owners);

    arrayOfNames.forEach(function (name) {
        if (owners[name].typeOfPet == "Hund") {
          let path = model.app.allPages;
            users.innerHTML += /*HTML*/ `
            <div id="fakeusers">
                <div id="photo"><img id="petprofile-picture"src=${owners[name].pets[0].img} alt=""></div>
                <div id="name">Navn: ${owners[name].pets[0].name}</div> <hr>
                <div id="age">Alder: ${owners[name].pets[0].age}</div> <hr>
                <div id="type">Rase: ${owners[name].pets[0].type}</div> <hr>
                <div id="toy">Favorittleke: ${owners[name].pets[0].favoriteToy}</div> <hr>
                <div id="owner"><img id="owner-profilepicture" src=${owners[name].img} alt=""></div>
                <div hidden>${owners[name]}</div>
                <div id="chatbutton"><button onclick="updateView('${path.chatPage}'); addUsersToChat(this)">Send et ${owners[name].pets[0].chatbutton}</button></div>
            </div>
            `
        }
    });
};
//ikke slett
function mainPageFunction() {
  updateViewMain();
  dogsByDefault();
  setProfilePicture();
}
