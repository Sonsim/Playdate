//Upload bilde Funksjonen
function uploadPetImage(htmlElement) {
    const selectedImage = htmlElement.files[0];
    const profileImage = document.getElementById("profilepic");

    if (selectedImage) {
        const imageUrl = URL.createObjectURL(selectedImage);
        profileImage.src = imageUrl;
    }
}

function addPetToUser() {
    const img = document.querySelector(".pet-image").src;
    const typeofPet = document.querySelector(".type-of-pet").value;
    const race = document.querySelector(".race").value;
    const name = document.querySelector(".name").value;
    const age = document.querySelector(".age").value;

    //Verifisere bruker input
    let typeRegex = /^(hund|katt|gnagere|hest|sau|fugl)$/;
    let typeVerify = typeRegex.test(typeofPet);

    let raceRegex = /^[A-Za-z\s'-]+$/;
    let raceVerify = typeRegex.test(race);

    let nameRegex = /^[A-Za-z\s'-]+$/;
    let nameVerify = typeRegex.test(name);

    let ageRegex = /^\d+(\.\d{1,2})?$/;
    let ageVerify = typeRegex.test(age);
    
    const newPet = {
        img: img,
        type: typeofPet,
        race: race,
        name: name,
        age: age
    };
    

    if(typeVerify && raceVerify && nameVerify && ageVerify) {
        //Dette lager et nytt objekt med input verdiene
        newPet.img = img;
        newPet.typeofPet = typeofPet;
        newPet.race = race;
        newPet.name = name;
        newPet.age = age;
    }

    //Dette lagrer newPet i newUser
    if (model.users.owners.newUser) {
        model.users.owners.newUser["pet"] = newPet;
        const nameOfOwner = model.users.owners.newUser.name;

        //Her lagrer vi et nytt objekt med navne til eieren
        model.users.owners[nameOfOwner] = model.users.owners.newUser;

        //Og så sletter vi new User
        delete model.users.owners.newUser;

        //Så står vi igjen med at en ny bruker er lagret under riktig navn.
        console.log(model.users.owners);
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

