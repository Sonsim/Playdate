let editUser = model.app.currentUser;
const userName = model.users.owners[editUser].name;
const userLocation = model.users.owners[editUser].location;
const userEmail = model.users.owners[editUser].Email;

const petName = model.users.owners[editUser].pets[0].name;
const petAge = model.users.owners[editUser].pets[0].age;
const petRace = model.users.owners[editUser].pets[0].type;
const petToy = model.users.owners[editUser].pets[0].favoriteToy;


function saveChanges() {
    const editOwnerName = document.getElementById('ownerName').value;
    const editOwnerLocation = document.getElementById('ownerPlace').value;
    const editOwnerAge = document.getElementById('ownerAge').value;
    const editOwnerEmail = document.getElementById('ownerEmail').value;

    const editPetName = document.getElementById('petName').value;
    const editPetRace = document.getElementById('petRace').value;
    const editPetAge = document.getElementById('petAge').value;
    const editPetToy = document.getElementById('petToy').value;



    let currentUser = model.app.currentUser;
    let currentUserProfile = model.users.owners[currentUser];

    const updatedUser = {
        age: editOwnerAge,
        email: editOwnerEmail,
        location: editOwnerLocation,
        password: '123',
        img: 'img/userprofile/sondre.jpg',
        typeOfPet: "Hund",
        oldChats: [""],
        chatAnswers: {
            greeting: "Hei!",
            walkanswer: "Ja, det blir morro!",
            loactionAnswer: "Lillestrøm",
            confusedAnswer: "Hva mener du?",
            playAnswer: "Ja, når da?",
            timeAnswer: "Det passer, sees da!",

        },
        pets: [
            {
                img: 'img/petprofile/dogs/Easy1.jpg', 
                type: editPetRace,
                name: editPetName,
                age: editPetAge,
                favoriteToy: editPetToy,
                chatbutton: 'voff',
            },
        ],
    }

    model.users.owners[editOwnerName] = updatedUser;
    delete model.users.owners[currentUser];
    model.app.currentUser = editOwnerName;

    console.log(model.users.owners);



    /*
// JavaScript Program to illustrate renaming key
 
// Creating an object 'capital' with
// key "Persia" and value "Tehran"
let capitals = [{
    "Persia": "Tehran"
}];
console.log(capitals);
 
// Function to rename old key
function renameKey(obj, old_key, new_key) {
 
    // Check if old key = new key
    if (old_key !== new_key) {
 
        // Modify old key
        Object.defineProperty(obj, new_key,
 
            // Fetch description from object
            Object.getOwnPropertyDescriptor(obj, old_key));
 
        // Delete old key
        delete obj[old_key];
    }
}
function rename() {
    capitals.forEach(obj => renameKey(obj, 'Persia', 'Iran'));
    console.log(capitals);
}
 
rename();
    
    
    */
    
    currentUserProfile = editOwnerName;
    currentUserProfile.location = editOwnerLocation;
    currentUserProfile.age = editOwnerAge;
    currentUserProfile.email = editOwnerEmail;
}

