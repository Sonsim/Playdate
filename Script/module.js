"use strict";
const model = {
    app: {
        allPages: {
            mainPage: "mainPageFunction",
            loginPage: "updateViewLogin",
            chatPage: "updateChatView",
            createPetPage: "updateViewCreatePet",
            createUserPage: "updateViewCreateUser",
            editUserPage: "updateViewEditUser",
            feedbackPage: "updateFeedbackView",
            forgottenPasswordPage: "updateForgotPasswordView",
        },
        currentPage: "loginPage",
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
            petage: "",
            favoriteToy: "",
            descripton: "",
        },
        userProfile: {
            changeImage: "",
            changeType: '',
            changeName: "",
            changeage: "",
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
                img: 'img/userprofile/sondre.jpg',
                typeOfPet: "Hund",
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
                        img: 'img/petprofile/dogs/Easy1.jpg', // default verdi burde være bilde
                        type: 'Husky-Samoyed-mix',
                        name: "Easy",
                        age: '3',
                        favoriteToy: 'Ball',
                        chatbutton: 'voff',
                    },
                ],
            },
            Aleksander: {
                age: '23',
                location: 'Gressvik',
                img: 'img/userprofile/profilepic.png',
                password: "123",
                typeOfPet: "Hund",
                chatAnswers: {
                    greeting: "Halla",
                    walkanswer: "Sorry, det passer ikke",
                    loactionAnswer: "Gressvik",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Kanskje",
                    timeAnswer: "Tror ikke det passer",
                },
                pets:[
                    {
                        img: 'img/petprofile/dogs/Froya.jpg',
                        type: 'Dachshund',
                        name: "Frøya",
                        age: '3',
                        favoriteToy: 'Puten hennes/ hånden min',
                        chatbutton: 'voff',
                    },
                ],
            },
            LarsPetter: {
                age: "25",
                location: "Nøtterøy",
                password: '21345',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Hund",
                chatAnswers: {
                    greeting: "Hallo!",
                    walkanswer: "Det blir morsomt!",
                    loactionAnswer: "Nøtterøy",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, det burde gå fint!",
                    timeAnswer: "Tror det skal passe!",

                },
                pets: [
                    {
                        img: 'img/petprofile/dogs/Ludo.jpg',
                        type: 'Staffordshire Bullterrier',
                        name: "Ludo",
                        age: '3',
                        favoriteToy: 'Hender',
                        chatbutton: 'voff',
                    },
                ],
            },
            Emma: {
                age: '28',
                location: 'Oslo',
                password: 'password123',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Katt",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Nei, katten min liker ikke tur",
                    loactionAnswer: "Oslo",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, katten elsker å leke",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/cats/fluffy.jpg',
                        type: 'Maine Coon',
                        name: "Fluffy",
                        age: '5',
                        favoriteToy: 'Feather wand',
                        chatbutton: 'mjau',
                    },
                ],
            },
            Mia: {
                age: '32',
                location: 'Bergen',
                password: 'catlover99',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Hund",
                chatAnswers: {
                    greeting: "Halllaien!",
                    walkanswer: "Ja, hunden min elsker tur",
                    loactionAnswer: "Bergen",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Det har jeg og hunden kjempelyst til?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/dogs/Buddy.jpg',
                        type: 'Labrador Retriever',
                        name: "Buddy",
                        age: '2',
                        favoriteToy: 'Squeaky ball',
                        chatbutton: 'voff',
                    },
                ],
            },
            Erik: {
                age: '40',
                location: 'Trondheim',
                password: 'doggy123',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Hund",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Dessverre, jeg orker ikke",
                    loactionAnswer: "Trondheim",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Hunden min liker ikke det",
                    timeAnswer: "Passer ikke",

                },
                pets: [
                    {
                        img: 'img/petprofile/dogs/max.jpg',
                        type: 'Golden Retriever',
                        name: "Max",
                        age: '4',
                        favoriteToy: 'Tennis ball',
                        chatbutton: 'voff',
                    },
                ],
            },
            Jon: {
                age: '27',
                location: 'Stavanger',
                password: 'pawprint22',
                img: 'img/userprofile/garfieldowner.png',
                typeOfPet: "Katt",
                chatAnswers: {
                    greeting: "Hi",
                    walkanswer: "My cat just want to eat lasagna",
                    loactionAnswer: "Stavanger",
                    confusedAnswer: "What do you mean?",
                    playAnswer: "Garfield hates anything related to exercise",
                    timeAnswer: "If i can get Garfield away from the lasagna",

                },
                pets: [
                    {
                        img: 'img/petprofile/cats/garfield.png',
                        type: 'orange tabby Persian', 
                        name: "Garfield",
                        age: '2',
                        favoriteToy: 'Lasagne',
                        chatbutton: 'mjau',
                    },
                ],
            },
            Edgar: {
                age: '40',
                location: 'Tromsø',
                password: 'martinpass',
                img: 'img/userprofile/edgar.jpg',
                typeOfPet: "Fugl",
                chatAnswers: {
                    greeting: "Nevermore",
                    walkanswer: "NEVERMORE",
                    loactionAnswer: "NeVeRmOrE",
                    confusedAnswer: "N E V E R M O R E",
                    playAnswer: "NE ve ER mo RE",
                    timeAnswer: "nEvErMoRe",

                },
                pets: [
                    {
                        img: 'img/petprofile/birds/verma.jpg',
                        type: 'Ravn', 
                        name: "Verma",
                        age: '6',
                        favoriteToy: 'Pallas-byste',
                        chatbutton: 'pip',
                    },
                ],
            },
            Julie: {
                age: '29',
                location: 'Drammen',
                password: 'julie123',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Katt",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Drammen",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/cats/leo.jpg',
                        type: 'Persian', 
                        name: "Leo",
                        age: '4',
                        favoriteToy: 'Feather ball',
                        chatbutton: 'mjau',
                    },
                ],
            },
            Sara: {
                age: '33',
                location: 'Kristiansand',
                password: 'sara567',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Gnagere",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Kristiansand",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/hamsters/hamster1.jpg',
                        type: 'Hamster', 
                        name: "Rocky",
                        age: '4',
                        favoriteToy: 'Løpeball',
                        chatbutton: 'pip',
                    },
                ],
            },
            Andreas: {
                age: '31',
                location: 'Fredrikstad',
                password: 'andy123',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Katt",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Fredrikstad",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/cats/mittens.jpg',
                        type: 'Ragdoll', 
                        name: "Mittens",
                        age: '3',
                        favoriteToy: 'Yarn ball',
                        chatbutton: 'mjau',
                    },
                ],
            },
            Joacim: {
                age: '49',
                location: 'Valle',
                password: 'karolinepass',
                img: 'img/userprofile/Joacim.jpg',
                typeOfPet: "Gnagere",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Dessverre, jeg er opptatt med å rykke ned med Vålerenga",
                    loactionAnswer: "Intility Arena",
                    confusedAnswer: "Det skjønte jeg ikke, akkurat som jeg ikke skjønner hvordan man leder en fotballklubb",
                    playAnswer: "Ja, hvis vi kan se LSK slå Vålerenga samtidig",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/hamsters/bakke.jpg',
                        type: 'Rotte', 
                        name: "Geir",
                        age: '54',
                        favoriteToy: 'Penga til Trøim',
                        chatbutton: 'pip',
                    },
                ],
            },
            Thomas: {
                age: '37',
                location: 'Drammen',
                password: 'thomas456',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Katt",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Drammen",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/cats/whiskers.jpg',
                        type: 'Tabby',
                        name: "Whiskers",
                        age: '4',
                        favoriteToy: 'Feather wand',
                        chatbutton: 'mjau',
                    },
                ],
            },
            Kristine: {
                age: '28',
                location: 'Bodø',
                password: 'kristinepass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Gnagere",
                chatAnswers: {
                    greeting: "Heia!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Bodø",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/hamsters/mus1.jpg',
                        type: 'Mus', 
                        name: "Riley",
                        age: '3',
                        favoriteToy: 'Ost',
                        chatbutton: 'pip',
                    },
                ],
            },
            Oskar: {
                age: '24',
                location: 'Haugesund',
                password: 'oskarpass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Gnagere",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Haugesund",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/hamsters/hamster2.jpg',
                        type: 'Hamster', 
                        name: "Bruno",
                        age: '4',
                        favoriteToy: 'Klatrestativ',
                        chatbutton: 'pip',
                    },
                ],
            },
            Clint: {
                age: '29',
                location: 'Molde',
                password: 'sandra89',
                img: 'img/userprofile/clint.jpg',
                typeOfPet: "Gnagere",
                chatAnswers: {
                    greeting: "Hi!",
                    walkanswer: "Yes, if we can annoy Tom the cat",
                    loactionAnswer: "Molde",
                    confusedAnswer: "What do you mean?",
                    playAnswer: "Yes, lets do it!",
                    timeAnswer: "That works, see you then!",

                },
                pets: [
                    {
                        img: 'img/petprofile/hamsters/jery.png',
                        type: 'Mus',
                        name: "Jerry",
                        age: '3',
                        favoriteToy: 'Tom',
                        chatbutton: 'pip',
                    },
                ],
            },
            Christian: {
                age: '34',
                location: 'Sandefjord',
                password: 'christianpass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Katt",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Sandefjord",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/cats/fluffy2.jpg',
                        type: 'Persian',
                        name: "Fluffy",
                        age: '4',
                        favoriteToy: 'Feather teaser',
                        chatbutton: 'mjau',
                    },
                ],
            },
            Henriette: {
                age: '27',
                location: 'Moss',
                password: 'henriettepass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Hest",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Moss",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/horses/Arabian1.jpg',
                        type: 'Araberhest', 
                        name: "Simba",
                        age: '2',
                        favoriteToy: 'Ball',
                        chatbutton: 'neigh',
                    },
                ],
            },
            Todd: {
                age: '25',
                location: 'Halden',
                password: 'emilpass',
                img: 'img/userprofile/todd.jpg',
                typeOfPet: "Hest",
                chatAnswers: {
                    greeting: "Hi!",
                    walkanswer: "Yes, but Bojack needs a drink first",
                    loactionAnswer: "Halden",
                    confusedAnswer: "What do you mean?",
                    playAnswer: "Bojack doesn't like playing",
                    timeAnswer: "That wont work",

                },
                pets: [
                    {
                        img: 'img/petprofile/horses/bojak.jpg',
                        type: 'Andalusier', 
                        name: "Bojack",
                        age: '3',
                        favoriteToy: 'Ball',
                        chatbutton: 'neigh',
                    },
                ],
            },
            Poseidon: {
                age: '29',
                location: 'Olympus',
                password: 'martinepass',
                img: 'img/userprofile/poseidon.jpg',
                typeOfPet: "Hest",
                chatAnswers: {
                    greeting: "Good day mortal!",
                    walkanswer: "We dont walk, we fly!",
                    loactionAnswer: "Olympus",
                    confusedAnswer: "speak plainly mortal",
                    playAnswer: "We dont have time for such a trivial thing",
                    timeAnswer: "A god doesnt have time for mortals",

                },
                pets: [
                    {
                        img: 'img/petprofile/horses/pegasus.jpg',
                        type: 'Camarillo White Horse', 
                        name: "Pegasus",
                        age: '2',
                        favoriteToy: 'Ball',
                        chatbutton: 'neigh',
                    },
                ],
            },
            Gandalf: {
                age: '54962',
                location: 'Gjøvik',
                password: 'andyo123',
                img: 'img/userprofile/gandalf.jpg',
                typeOfPet: "Hest",
                chatAnswers: {
                    greeting: "Greetings!",
                    walkanswer: "Fly you fools",
                    loactionAnswer: "The Shire",
                    confusedAnswer: "I was talking aloud to myself. A habit of the old: they choose the wisest person present to speak to.",
                    playAnswer: "A wizard is never late, nor is he early. He arrives precisely when he means to.",
                    timeAnswer: "I did not pass through fire And death to bandy crooked words with a witless worm.",

                },
                pets: [
                    {
                        img:'img/petprofile/horses/shadow.jpg',
                        type: 'Andalusier',
                        name: "Shadowfax",
                        age: '3',
                        favoriteToy: 'Ball',
                        chatbutton: 'neigh',
                    },
                ],
            },
            Anette: {
                age: '27',
                location: 'Larvik',
                password: 'anettepass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Sau",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Larvik",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/sheep/dala.jpg',
                        type: 'Dala sau', 
                        name: "Milo",
                        age: '2',
                        favoriteToy: 'Ball',
                        chatbutton: 'bahh',
                    },
                ],
            },
            Fredrik: {
                age: '36',
                location: 'Kristiansund',
                password: 'fredrikpass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Sau",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Larvik",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/sheep/dolly.jpg',
                        type: 'Finn-Dorset',
                        name: "Dolly",
                        age: '4',
                        favoriteToy: 'Tug rope',
                        chatbutton: 'bahh',
                    },
                ],
            },
            Vilde: {
                age: '24',
                location: 'Mandal',
                password: 'vildepass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Sau",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Mandal",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/sheep/merino1.jpg',
                        type: 'Merino', 
                        name: "Leo",
                        age: '2',
                        favoriteToy: 'Feather teaser',
                        chatbutton: 'bahh'
                    },
                ],
            },
            Tom: {
                age: '30',
                location: 'Drammen',
                password: 'tom123',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Sau",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Drammen",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/sheep/oxford.jpg',
                        type: 'Oxford down',
                        name: "Rocky",
                        age: '3',
                        favoriteToy: 'Squeaky bone',
                        chatbutton: 'bahh'
                    },
                ],
            },
            Maria: {
                age: '31',
                location: 'Stavanger',
                password: 'maria123',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Sau",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Stavanger",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/sheep/merino2.jpg',
                        type: 'Merino', 
                        name: "Luna",
                        age: '2',
                        favoriteToy: 'Laser pointer',
                        chatbutton: 'bahh'
                    },
                ],
            },
            Simen: {
                age: '28',
                location: 'Tønsberg',
                password: 'simenpass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Hund",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Tønsberg",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/dogs/rex.jpg',
                        type: 'German Shepherd',
                        name: "Rex",
                        age: '5',
                        favoriteToy: 'Tug toy',
                        chatbutton: 'voff',
                    },
                ],
            },
            Alfredo: {
                age: '32',
                location: 'Haugesund',
                password: 'oliver123',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Gnagere",
                chatAnswers: {
                    greeting: "Bonjour!",
                    walkanswer: "Remy liker ikke å gå tur",
                    loactionAnswer: "Haugesund",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, hvis Remy kan lage mat",
                    timeAnswer: "Det passer, remy ordner mat til oss!",

                },
                pets: [
                    {
                        img: 'img/petprofile/hamsters/rata.jpg',
                        type: 'Rotte', 
                        name: "Remy",
                        age: '3',
                        favoriteToy: 'Matlaging',
                        chatbutton: 'pip',
                    },
                ],
            },
            Amanda: {
                age: '29',
                location: 'Molde',
                password: 'amanda123',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Hest",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Molde",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/horses/Arabian2.jpg',
                        type: 'Araberhest', 
                        name: "Nala",
                        age: '2',
                        favoriteToy: 'Laser pointer',
                        chatbutton: 'neigh',
                    },
                ],
            },
            Petter: {
                age: '24',
                location: 'Oslo',
                password: 'petterpass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Sau",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Oslo",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/sheep/lance.jpg',
                        type: 'Dalasau', 
                        name: "Lance Corporal Derby XXX",
                        age: '3',
                        favoriteToy: 'Skru på julelys',
                        chatbutton: 'bahh'
                    },
                ],
            },
            Louise: {
                age: '29',
                location: 'Bergen',
                password: 'louisepass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Fugl",
                chatAnswers: {
                    greeting: "Hallaien!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Bergen",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/petplaceholder.png',
                        type: 'Pappegøye',
                        name: "Sky",
                        age: '3',
                        favoriteToy: 'Frisbee',
                        chatbutton: 'pip',
                    },
                ],
            },
            Aslak: {
                age: '34',
                location: 'Stavanger',
                password: 'trygve123',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Hest",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Stavanger",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/horses/Arabian3.jpg',
                        type: 'Araberhest', 
                        name: "Odin",
                        age: '4',
                        favoriteToy: 'Feather ball',
                        chatbutton: 'neigh',
                    },
                ],
            },
     
            Aladdin: {
                age: '32',
                location: 'Bergen',
                password: 'emilypass',
                img: 'img/userprofile/aladdin.jpg',
                typeOfPet: "Fugl",
                chatAnswers: {
                    greeting: "Hallaien!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Bergen",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/birds/Jago.jpg',
                        type: 'Papegøye',
                        name: "Jaro",
                        age: '5',
                        favoriteToy: 'Colorful rings',
                        chatbutton: 'pip',
                    },
                ],
            },
            Harry: {
                age: '28',
                location: 'Oslo',
                password: 'lucaspass',
                img: 'img/userprofile/Harry.jpg',
                typeOfPet: "Fugl",
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
                        img:'img/petprofile/birds/hedwig.jpg',
                        type: 'Snøugle',
                        name: "Hedwig",
                        age: '2',
                        favoriteToy: 'Swinging perch',
                        chatbutton: 'pip',
                    },
                ],
            },
            Isabella: {
                age: '24',
                location: 'Trondheim',
                password: 'isabellapass',
                img: 'img/userprofile/profilepic.png',
                typeOfPet: "Fugl",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, det blir morro!",
                    loactionAnswer: "Trondheim",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, når da?",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/petplaceholder.png',
                        type: 'Budgerigar',
                        name: "Skye",
                        age: '3',
                        favoriteToy: 'Mirror bell',
                        chatbutton: 'pip',
                    },
                ],
            },
            Frode: {
                age: '30',
                location: 'Lillestrøm',
                password: 'oliver123',
                img: 'img/userprofile/frode.jpg',
                typeOfPet: "Fugl",
                chatAnswers: {
                    greeting: "Hei!",
                    walkanswer: "Ja, vi kan gå til Åråsen!",
                    loactionAnswer: "Lillestrøm",
                    confusedAnswer: "Hva mener du?",
                    playAnswer: "Ja, så lenge det er fotball",
                    timeAnswer: "Det passer, sees da!",

                },
                pets: [
                    {
                        img: 'img/petprofile/birds/gullik.jpg',
                        type: 'Kanarifugl',
                        name: "Gullik",
                        age: '4',
                        favoriteToy: 'Fotball',
                        chatbutton: 'pip',
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
