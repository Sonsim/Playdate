function addUsers (htmlElement) {
    const path = model.app.allPages;
    let users = document.getElementById('users');
    users.innerHTML = "";

    let owners = model.users.owners;


    let arrayOfNames = Object.keys(owners);

    arrayOfNames.forEach(function (name) {
        if (owners[name].typeOfPet == htmlElement.textContent) {
            users.innerHTML += /*HTML*/ `
            <div id="fakeusers">
                <div id="photo"><img id="petprofile-picture"src=${owners[name].pets[0].img} alt=""></div>
                <div id="name">Navn: ${owners[name].pets[0].name}</div> <hr>
                <div id="age">Alder: ${owners[name].pets[0].age}</div> <hr>
                <div id="type">Rase: ${owners[name].pets[0].type}</div> <hr>
                <div id="toy">Favorittleke: ${owners[name].pets[0].favoriteToy}</div> <hr>
                <div id="owner"><img id="owner-profilepicture" src=${owners[name].img} alt=""></div>
                <div id="chatbutton"><button onclick="updateView('${path.chatPage}'); addUsersToChat(this)">Send et ${owners[name].pets[0].chatbutton}</button></div>
            </div>
            `
        }
    });
};

function userProfileDropdown () {
    let userProfiledropdown = document.querySelector(".user-profile-dropdown");
    userProfiledropdown.classList.toggle("show-hide-dropdown");
}

function settingsDropdown () {
    let settingsDropdown = document.querySelector(".settings-dropdown");
    settingsDropdown.classList.toggle("show-hide-dropdown");
}

function logoff() {
    model.app.currentPage = 'loginPage'
    updateView();
}