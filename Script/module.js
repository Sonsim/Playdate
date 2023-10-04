"use strict";
const model = {
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
                pets: [
                    {
                        img: 'img/Easy1.jpg', //default verdi burde være et standard bilde
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
                pets:[
                    {
                        img: 'imgurl',
                        type: 'dachshund',
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
