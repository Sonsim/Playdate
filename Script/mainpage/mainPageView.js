function updateViewMain() {

  const path = model.app.allPages;
  document.getElementById('app').innerHTML = /*HTML*/ `

    <section id="page">
            <header class="header barkmode-background">
              <img id="main-Logo" src="img/Playdate.png" alt="logo">
              <div id="name-header" class="barkmode-text">${model.app.currentUser}</div>
              <div id="user-profile">
                <div id="profile-picture-box">
                  <img id="profile-picture" onclick="userProfileDropdown()" src="img/userprofile/profilepic.png" alt="Profile Picture">
                  <div class="user-profile-dropdown">
                    <div onclick="updateView('${path.editUserPage}')">Profil</div>
                    <div onclick="updateView('${path.chatPage}')">Innboks</div>
                    <div> 
                      <div id="settings" onclick="settingsDropdown()">Innstillinger<div>
                      <div class="settings-dropdown">
                      <hr style="width:130px;"><div onclick="barkMode()">Barkmode</div>
                        <div onclick="updateView('${path.forgottenPasswordPage}')">Bytte passord</div>
                        <div>Tillat posisjon</div>
                        <div onclick="updateView('${path.feedbackPage}')">Send Tilbakemelding</div><hr style="width:130px;">
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
                <div id="petcategories" onclick="addUsers(this); categoriesBarkMode(); showCategoryArrow(this)"><div>Hund</div></div>
                <div id="petcategories" onclick="addUsers(this); categoriesBarkMode(); showCategoryArrow(this)"><div>Katt</div></div>
                <div id="petcategories" onclick="addUsers(this); categoriesBarkMode(); showCategoryArrow(this)"><div>Gnagere</div></div>
                <div id="petcategories" onclick="addUsers(this); categoriesBarkMode(); showCategoryArrow(this)"><div>Hest</div></div>
                <div id="petcategories" onclick="addUsers(this); categoriesBarkMode(); showCategoryArrow(this)"><div>Sau</div></div>
                <div id="petcategories" onclick="addUsers(this); categoriesBarkMode(); showCategoryArrow(this)"><div>Fugl</div></div>
              </nav>
              <article>
                <div id="arrow" class="Hund arrow-right"></div>
                <div id="arrow" class="Katt arrow-right hidden"></div>
                <div id="arrow" class="Gnagere arrow-right hidden"></div>
                <div id="arrow" class="Hest arrow-right hidden"></div>
                <div id="arrow" class="Sau arrow-right hidden"></div>
                <div id="arrow" class="Fugl arrow-right hidden"></div>
            </article>
            <main id="users"></main>

            
    </section>
    `;
};


function dogsByDefault() {
  let users = document.getElementById('users');
  users.innerHTML = "";

  let owners = model.users.owners;

  let arrayOfNames = Object.keys(owners);

  arrayOfNames.forEach(function (name) {
    if (owners[name].typeOfPet == "Hund") {
      let path = model.app.allPages;
      users.innerHTML += /*HTML*/ `
            <div class="fakeUsers" id="fakeusers">
                <div id="photo"><img id="petprofile-picture"src=${owners[name].pets[0].img} alt=""></div>
                  <div id="name">${owners[name].pets[0].name}</div> <hr>
                  <div id="age">${owners[name].pets[0].age} År</div> <hr>
                  <div id="type">${owners[name].pets[0].type}</div> <hr>
                  <div id="toy">Favorittleke: ${owners[name].pets[0].favoriteToy}</div> <hr>
                  <div id="owner"><img id="owner-profilepicture" src=${owners[name].img} alt=""></div>
                  <div id="chatbutton">
                    <button  id="sendChatBtn" onclick="updateView('${path.chatPage}');addUsersToChat(this)">Send et ${owners[name].pets[0].chatbutton}</button>
                  </div>
                  <div hidden>${owners[name]}</div>
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