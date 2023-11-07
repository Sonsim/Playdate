function addUsers(htmlElement) {
    const path = model.app.allPages;
    let users = document.getElementById('users');
    users.innerHTML = "";

    let owners = model.users.owners;


    let arrayOfNames = Object.keys(owners);

    arrayOfNames.forEach(function (name) {
        if (owners[name].typeOfPet == htmlElement.children[0].innerText) {
            users.innerHTML += /*HTML*/ `
            <div class="fakeUsers" id="fakeusers">
                <div id="photo"><img id="petprofile-picture"src=${owners[name].pets[0].img} alt=""></div>
                <div id="name"> ${owners[name].pets[0].name}</div> <hr>
                <div id="age"> ${owners[name].pets[0].age} år</div> <hr>
                <div id="type"> ${owners[name].pets[0].type}</div> <hr>
                <div id="toy">Favorittleke: ${owners[name].pets[0].favoriteToy}</div> <hr>
                <div id="owner"><img id="owner-profilepicture" src=${owners[name].img} alt=""></div>
                <div id="chatbutton"><button id="sendChatBtn" onclick="updateView('${path.chatPage}'); addUsersToChat(this)">Send et ${owners[name].pets[0].chatbutton}</button></div>
            </div>
            `
        }
    });
};

function userProfileDropdown() {
    let userProfiledropdown = document.querySelector(".user-profile-dropdown");
    userProfiledropdown.classList.toggle("show-hide-dropdown");
}

function settingsDropdown() {
    let settingsDropdown = document.querySelector(".settings-dropdown");
    settingsDropdown.classList.toggle("show-hide-dropdown");
}

function logoff() {
    model.app.currentPage = 'loginPage'
    updateView();
}

function setProfilePicture() {
    let ownerNames = model.users.owners;
    let ownerArray = Object.keys(ownerNames)

    ownerArray.forEach(function (owner) {
        if (owner == model.app.currentUser) {
            let profilepic = document.getElementById('profile-picture');
            let profilePictureSrc = model.users.owners[owner].img;
            profilepic.src = profilePictureSrc;
        }
    })
}

function barkMode() {
    const page = document.body;
    const header = document.querySelector(".header");
    const sideBar = document.getElementById("sidebar");
    const users = document.getElementById("users");
    let fakeUsers = document.querySelectorAll(".fakeUsers");
    let petcategories = document.querySelectorAll("#petcategories");
    //Header
    header.style.backgroundColor = "rgb(24, 26, 27)";
    header.style.color = "#e8e6e3";
    //Sidebar
    sideBar.style.backgroundColor = "rgb(24, 26, 27)";
    sideBar.style.color = "#e8e6e3";
    //Page Background
    users.style.backgroundColor = "rgb(24, 26, 27)";
    users.style.color = "#e8e6e3";
    //Page
    page.style.backgroundColor = "rgb(24, 26, 27)";
    //Fakeuser
    for(let i = 0; i < fakeUsers.length; i++) {
        fakeUsers[i].style.backgroundColor = "hsl(0, 0%, 71%)";

    };
    //Petcategories
    for(let i = 0; i < petcategories.length; i++) {
        petcategories[i].style.backgroundColor = "hsl(0, 0%, 71%)";
    };
};
function categoriesBarkMode () {
    const page = document.body;
    const backgroundColor = window.getComputedStyle(page).backgroundColor;
    const desiredColor = "rgb(24, 26, 27)";
    
    if (backgroundColor == desiredColor) {
       //Fakeuser
       let fakeUsers = document.querySelectorAll(".fakeUsers");
       for(let i = 0; i < fakeUsers.length; i++) {
           fakeUsers[i].style.backgroundColor = "hsl(0, 0%, 71%)";
       };
    }
};

function showCategoryArrow(element){
    const arrowsArray = document.querySelectorAll(".arrow-right");

    arrowsArray.forEach(arrow => {
        arrow.style.visibility = "hidden";
        
        if(element.innerText == arrow.classList[0]) {
            arrow.style.visibility = "visible";
            console.log(arrow)
        };
    });
};

