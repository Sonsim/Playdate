function updateViewMain() {

    document.getElementById('app').innerHTML = /*HTML*/ `

    <section id="page">
            <header>
              <img id="main-Logo" src="../img/Playdate.png" alt="logo">
              <div id="user-profile">
                <div id="name">John Doe</div>
                <div id="profile-picture-box">
                  <img id="profile-picture" onclick="userProfileDropdown()" src="../img/userprofile/profilepic.png" alt="Profile Picture">
                  <div class="user-profile-dropdown">
                    <div>Profil</div>
                    <div>Innboks</div>
                    <div> 
                      <div id="settings" onclick="settingsDropdown()">Innstillinger<div>
                      <div class="settings-dropdown">
                        <div>Barkmode</div>
                        <div>Bytte passord</div>
                        <div>Tillat posisjon</div>
                        <div><a href="feedback-page.html">Send Tilbakemelding</a></div>
                      </div>
                    </div>
                    <div><a id="logout-link" href="login.html">Logg av</a></div>
                </div>
              </div>
           </div>
           </div>
           </div>
            </header>
              <nav id="sidebar">
                <div id="petcategories" onclick="addUsers(this)">Hund</div>
                <div id="petcategories" onclick="addUsers(this)">Katt</div>
                <div id="petcategories" onclick="addUsers(this)">Hamster</div> 
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
            users.innerHTML += /*HTML*/ `
            <div id="fakeusers">
                <div id="photo"><img id="petprofile-picture"src=${owners[name].pets[0].img} alt=""></div>
                <div id="name">Navn: ${owners[name].pets[0].name}</div> <hr>
                <div id="age">Alder: ${owners[name].pets[0].age}</div> <hr>
                <div id="type">Rase: ${owners[name].pets[0].type}</div> <hr>
                <div id="toy">Favorittleke: ${owners[name].pets[0].favoriteToy}</div> <hr>
                <div id="owner"><img id="owner-profilepicture" src=${owners[name].img} alt=""></div>
                <div id="chatbutton"><button><a href="chatpage.html">Send et voff</a></button></div>
            </div>
            `
        }
    });
}