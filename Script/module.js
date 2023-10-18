"use strict";
export const model = {
    app: {
        allPages: ["login.html", "oprett bruker.html", "legg til dyr.html", "hovedside.html", "bruker profil.html", "chat.html", "gi en tilbakemelding.html"],
        currentPage: 0,
        currentUser: "",
        user: {
            owner: {
                fullName: false,
                birthday: false,
                location: false,
                emailadress: false,
                profilePicture: false,
            },
            petProfile: {
                petprofile1: {},
                petprofile2: {},
            }
        },
        themes: [
            { name: 'barkmode', maincolor: 'black', color: 'white' },
            { name: 'lightmode', maincolor: 'white', color: 'black' },
        ],
    },

    input: {
        loginPage: {
            email: '',
            password: '',
            rememberMeCheckBox: false,
        },

        newUserForm: {
            imageOfOwner: "",
            fullName: "",
            birthday: "",
            location: "",
            email: "",
            password: "",
            confirmPassword: "",
            descripton: "",
        },
        newPetForm: {
            imageOfPet: "",
            typeOfPet: "",
            petName: "",
            petAge: "",
            favoriteToy: "",
            descripton: "",
        },
        userProfile: {
            changeImage: "",
            changeType: '',
            changeName: "",
            changeAge: "",
        },
        chatPage: {
            messageToOthers: "",
        },
        forgottenPasswordPage: {
            emailInput: "",
        },
        feedbackPage: {
            name: "",
            emailAdress: "",
            subject: "",
            message: "",
        },
    },
    // data
    users: {
        owners: {
            Sondre: {
                age: '30',
                location: 'Lillestrøm',
                password: 'abcs23',
                img: 'imgurl',
                typeOfPet: "dog",
                pets: [
                    {
                        img: '../img/Easy1.jpg', // default verdi burde være bilde
                        type: 'Husky-Samoyed-mix',
                        name: "Easy",
                        age: '3',
                        favoriteToy: 'Ball',
                    },
                ],
            },
            Aleksander: {
                age: '23',
                location: 'Gressvik',
                img: 'imgurl',
                password: "123",
                typeOfPet: "dog",
                pets:[
                    {
                        img: 'imgurl',
                        type: 'Dachshund',
                        name: "Frøya",
                        age: '3',
                        favoriteToy: 'Puten hennes/ hånden min',
                    },
                ],
            },
            LarsPetter: {
                age: "25",
                location: "Nøtterøy",
                password: '21345',
                img: 'imgurl',
                typeOfPet: "dog",
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Staffordshire Bullterrier',
                        name: "Ludo",
                        age: '3',
                        favoriteToy: 'Hender',
                    },
                ],
            },
            Emma: {
                age: '28',
                location: 'Oslo',
                password: 'password123',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Maine Coon',
                        name: "Fluffy",
                        age: '5',
                        favoriteToy: 'Feather wand',
                    },
                ],
            },
            Mia: {
                age: '32',
                location: 'Bergen',
                password: 'catlover99',
                img: '../img/userprofile/profilepic.png',
                typeOfPet: "dog",
                pets: [
                    {
                        img: '../img/petprofile/petplaceholder.png',
                        type: 'Labrador Retriever',
                        name: "Buddy",
                        age: '2',
                        favoriteToy: 'Squeaky ball',
                    },
                ],
            },
            Erik: {
                age: '40',
                location: 'Trondheim',
                password: 'doggy123',
                img: '../img/userprofile/profilepic.png',
                typeOfPet: "dog",
                pets: [
                    {
                        img: '../img/petprofile/petplaceholder.png',
                        type: 'Golden Retriever',
                        name: "Max",
                        age: '4',
                        favoriteToy: 'Tennis ball',
                    },
                ],
            },
            Ingrid: {
                age: '27',
                location: 'Stavanger',
                password: 'pawprint22',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Siamese', 
                        name: "Luna",
                        age: '2',
                        favoriteToy: 'Feather teaser',
                    },
                ],
            },
            Edgar: {
                age: '40',
                location: 'Tromsø',
                password: 'martinpass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Ravn', 
                        name: "Verma",
                        age: '6',
                        favoriteToy: 'Pallas-byste',
                    },
                ],
            },
            Julie: {
                age: '29',
                location: 'Drammen',
                password: 'julie123',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Persian', 
                        name: "Leo",
                        age: '4',
                        favoriteToy: 'Feather ball',
                    },
                ],
            },
            Sara: {
                age: '33',
                location: 'Kristiansand',
                password: 'sara567',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Hamster', 
                        name: "Rocky",
                        age: '4',
                        favoriteToy: 'Løpeball',
                    },
                ],
            },
            Andreas: {
                age: '31',
                location: 'Fredrikstad',
                password: 'andy123',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Ragdoll', 
                        name: "Mittens",
                        age: '3',
                        favoriteToy: 'Yarn ball',
                    },
                ],
            },
            Karoline: {
                age: '26',
                location: 'Ålesund',
                password: 'karolinepass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Hamster', 
                        name: "Rex",
                        age: '5',
                        favoriteToy: 'Klatrestativ',
                    },
                ],
            },
            Thomas: {
                age: '37',
                location: 'Drammen',
                password: 'thomas456',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Tabby',
                        name: "Whiskers",
                        age: '4',
                        favoriteToy: 'Feather wand',
                    },
                ],
            },
            Kristine: {
                age: '28',
                location: 'Bodø',
                password: 'kristinepass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Hamster', 
                        name: "Riley",
                        age: '3',
                        favoriteToy: 'Løpehjul',
                    },
                ],
            },
            Oskar: {
                age: '24',
                location: 'Haugesund',
                password: 'oskarpass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Hamster', 
                        name: "Bruno",
                        age: '4',
                        favoriteToy: 'Klatrestativ',
                    },
                ],
            },
            Sandra: {
                age: '29',
                location: 'Molde',
                password: 'sandra89',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Hamster',
                        name: "Sky",
                        age: '3',
                        favoriteToy: 'Løpehjul',
                    },
                ],
            },
            Christian: {
                age: '34',
                location: 'Sandefjord',
                password: 'christianpass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Persian',
                        name: "Fluffy",
                        age: '4',
                        favoriteToy: 'Feather teaser',
                    },
                ],
            },
            Henriette: {
                age: '27',
                location: 'Moss',
                password: 'henriettepass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Araberhest', 
                        name: "Simba",
                        age: '2',
                        favoriteToy: 'Ball',
                    },
                ],
            },
            Emil: {
                age: '25',
                location: 'Halden',
                password: 'emilpass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Andalusier', 
                        name: "Charlie",
                        age: '3',
                        favoriteToy: 'Ball',
                    },
                ],
            },
            Martine: {
                age: '29',
                location: 'Ås',
                password: 'martinepass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Berberhest', 
                        name: "Nala",
                        age: '2',
                        favoriteToy: 'Ball',
                    },
                ],
            },
            AndreasO: {
                age: '32',
                location: 'Gjøvik',
                password: 'andyo123',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Dølahest',
                        name: "Bella",
                        age: '3',
                        favoriteToy: 'Ball',
                    },
                ],
            },
            Anette: {
                age: '27',
                location: 'Larvik',
                password: 'anettepass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Dala sau', 
                        name: "Milo",
                        age: '2',
                        favoriteToy: 'Ball',
                    },
                ],
            },
            Fredrik: {
                age: '36',
                location: 'Kristiansund',
                password: 'fredrikpass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Dala sau',
                        name: "Thor",
                        age: '4',
                        favoriteToy: 'Tug rope',
                    },
                ],
            },
            Vilde: {
                age: '24',
                location: 'Mandal',
                password: 'vildepass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Merino', 
                        name: "Leo",
                        age: '2',
                        favoriteToy: 'Feather teaser',
                    },
                ],
            },
            Tom: {
                age: '30',
                location: 'Drammen',
                password: 'tom123',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Oxford down',
                        name: "Rocky",
                        age: '3',
                        favoriteToy: 'Squeaky bone',
                    },
                ],
            },
            Maria: {
                age: '31',
                location: 'Stavanger',
                password: 'maria123',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Merino', 
                        name: "Luna",
                        age: '2',
                        favoriteToy: 'Laser pointer',
                    },
                ],
            },
            Simen: {
                age: '28',
                location: 'Tønsberg',
                password: 'simenpass',
                img: 'imgurl',
                typeOfPet: "dog",
                pets: [
                    {
                        img: 'imgurl',
                        type: 'German Shepherd',
                        name: "Rex",
                        age: '5',
                        favoriteToy: 'Tug toy',
                    },
                ],
            },
            Malin: {
                age: '26',
                location: 'Kristiansand',
                password: 'malinpass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Persian',
                        name: "Whiskers",
                        age: '4',
                        favoriteToy: 'Feather wand',
                    },
                ],
            },
            Oliver: {
                age: '32',
                location: 'Haugesund',
                password: 'oliver123',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Hamster', 
                        name: "Kitty",
                        age: '3',
                        favoriteToy: 'Mouse toy',
                    },
                ],
            },
            Amanda: {
                age: '29',
                location: 'Molde',
                password: 'amanda123',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Araberhest', 
                        name: "Simba",
                        age: '2',
                        favoriteToy: 'Laser pointer',
                    },
                ],
            },
            Petter: {
                age: '24',
                location: 'Lillestrøm',
                password: 'petterpass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Dalasau', 
                        name: "Bella",
                        age: '3',
                        favoriteToy: 'Squeaky ball',
                    },
                ],
            },
            Louise: {
                age: '29',
                location: 'Bergen',
                password: 'louisepass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Pappegøye',
                        name: "Sky",
                        age: '3',
                        favoriteToy: 'Frisbee',
                    },
                ],
            },
            Jonathan: {
                age: '34',
                location: 'Stavanger',
                password: 'jonathan123',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Maine Coon', //endre
                        name: "Whiskers",
                        age: '4',
                        favoriteToy: 'Feather ball',
                    },
                ],
            },
            Nora: {
                age: '27',
                location: 'Tromsø',
                password: 'norapass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Bulldog', //endre
                        name: "Rocky",
                        age: '3',
                        favoriteToy: 'Squeaky bone',
                    },
                ],
            },
            Tobias: {
                age: '32',
                location: 'Drammen',
                password: 'tobiaspass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Ragdoll', //endre
                        name: "Leo",
                        age: '2',
                        favoriteToy: 'Feather teaser',
                    },
                ],
            },
            Emily: {
                age: '32',
                location: 'Bergen',
                password: 'emilypass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Parrot',
                        name: "Rio",
                        age: '5',
                        favoriteToy: 'Colorful rings',
                    },
                ],
            },
            Lucas: {
                age: '28',
                location: 'Oslo',
                password: 'lucaspass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Canary',
                        name: "Sunny",
                        age: '2',
                        favoriteToy: 'Swinging perch',
                    },
                ],
            },
            Isabella: {
                age: '24',
                location: 'Trondheim',
                password: 'isabellapass',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Budgerigar',
                        name: "Skye",
                        age: '3',
                        favoriteToy: 'Mirror bell',
                    },
                ],
            },
            Oliver: {
                age: '30',
                location: 'Drammen',
                password: 'oliver123',
                img: 'imgurl',
                pets: [
                    {
                        img: 'imgurl',
                        type: 'Cockatiel',
                        name: "Peaches",
                        age: '4',
                        favoriteToy: 'Bells and beads',
                    },
                ],
            },
        },
    },
    inbox: {
        allEmails: [
            { name: "", email: "", subject: "", message: "", }
        ],
    },
    chat: {
        Aleksander_Sondre: [
            {
                from: "Sondre",
                to: "Aleksander",
                timestamp: "2023-10-04 12:00",
                content: "Hold kjeft."
            },
            {
                from: "Aleksander",
                to: "Sondre",
                timestamp: "2023-10-04 12:03",
                content: "No u"
            },
        ],
    },
}
//newMessage: [
//    {from: "", to:"", timestamp: "", content: ""}
//],
//possibleMessages: ["Hei!", "Hvordan går det?",],//Ferdig koda spørsmål knyttet til appens tema
//chatAnswers: ["blablabla", "loremipsum"],//Ferdig koda svar
//    },
//}

// let arrayName = sortAlphabetically(input.from + "_" + input.to)
// if (model.chat.arrayName exists) model.chat.arrayName.push(newMessage)
// else model.chat.add(arrayName + newMessage)
