import {model} from "./module.mjs";


function addUsers () {
    let owners = model.users.owners;
    console.log(owners);

    let app = document.getElementById('app');

    console.log(Object.keys(owners));
    let arrayOfNames = Object.keys(owners);

    arrayOfNames.forEach(function (name) {
        console.log(owners[name].typeOfPet);
        if (owners[name].typeOfPet == "dog") {
            app.innerHTML += owners[name];
        }
    });

}

addUsers();