//Upload bilde funksjon
function uploadPetImage(htmlElement) {
    const selectedImage = htmlElement.files[0];
    const profileImage = document.getElementById("profilepic");

    if (selectedImage) {
        const imageUrl = URL.createObjectURL(selectedImage);
        profileImage.src = imageUrl;
    }
}

function addPetToUser() {
    //Dom-elementer
    const img = document.querySelector(".pet-image").src;
    const typeofPet = document.querySelector(".type-of-pet").value;
    const race = document.querySelector(".race").value;
    const name = document.querySelector(".name").value;
    const age = document.querySelector(".age").value;

    const path = model.app.allPages;


    //Verifisere bruker input
    let imgRegex = /\bhttps?:\/\/\S+\.(?:png|jpg|jpeg|gif|bmp|svg|webp|tiff|ico)\b|\b\S+\.(?:png|jpg|jpeg|gif|bmp|svg|webp|tiff|ico)\b|https?:\/\/\S+\b|\S+\b/;
    let imgVerify = imgRegex.test(img.src);

    let typeRegex = /^[Hh]und|[Kk]att|[Hh]est|[Ss]au|[Gg]nager$/;
    let typeVerify = typeRegex.test(typeofPet);

    console.log(typeVerify);

    let raceRegex = /^[A-Za-z\s'-]+$/;
    let raceVerify = raceRegex.test(race);

    let nameRegex = /^[A-Za-z\s'-]+$/;
    let nameVerify = nameRegex.test(name);

    let ageRegex = /^\d+(\.\d{1,2})?$/;
    let ageVerify = ageRegex.test(age);
    
    const newPet = {
        img: img,
        type: typeofPet,
        race: race,
        name: name,
        age: age
    };
    

    if(imgVerify && typeVerify && raceVerify && nameVerify && ageVerify) {
        //Dette lager et nytt objekt med input verdiene
        newPet.img = img;
        newPet.typeofPet = typeofPet;
        newPet.race = race;
        newPet.name = name;
        newPet.age = age;

        //Dette lagrer newPet i newUser
        if (model.users.owners.newUser) {
            model.users.owners.newUser["pet"] = newPet;
            const nameOfOwner = model.users.owners.newUser.name;

            //Her lagrer vi et nytt objekt med navne til eieren
            model.users.owners[nameOfOwner] = model.users.owners.newUser;

            //Og så sletter vi new User
            delete model.users.owners.newUser;

            //Så står vi igjen med at en ny bruker er lagret under riktig navn.
            updateView(path.mainPage);
        }
    }

    if (imgVerify == false) {
        document.getElementById("wrongImgSrc").textContent = "Vennligst last opp et bilde";
    }
    if (typeVerify == false) {
        document.getElementById("wrongTypeOfPet").textContent = "Vennligst oppgi type dyr: hund, katt, hest, sau, fugl, eller gnager";
    }
    if (raceVerify == false) {
        document.getElementById("wrongRace").textContent = "Vennligst oppgi en dyrerase";
    }
    if (nameVerify == false) {
        document.getElementById("wrongName").textContent = "Vennligst oppgi navn";
    }
    if (ageVerify == false) {
        document.getElementById("wrongAge").textContent = "Vennligst oppgi alder";
    }
}

// Legger navnet til på listen "Added pets".
function addPetToList() {
    let petInputField = document.getElementById("petInputField");
    let petList = document.getElementById("petList");
    let itemText = petInputField.value;

    if (itemText.trim() !== "") {
        let listPet = document.createElement("li");
        listPet.textContent = itemText;
        petList.appendChild(listPet);
        petInputField.value = "";
    }
}

