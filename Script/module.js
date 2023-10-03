const model = {
    app: {
        currentPage: "",
        // Legg inn AllPages Array
        loggedInAs: "",
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
            login: false,
            registerUserProfil: false,
            forgottenPassword: false,
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
    // data
    fakeUsers: {
        Easy: {
            img: 'img/Easy1.jpg',
            type: 'Husky-Samoyed-mix',
            name: "Easy",
            age: '3',
            favoriteToy: 'Ball',
        },
        Frøya: {
            age: '3',
            type: 'dachshund',
            favoriteToy: 'Puten hennes/ hånden min',
        },
        Ludo: {
            age: '3',
            type: 'Staffordshire Bullterrier',
            favoriteToy: 'Hender',
        },
        newUser
    }
    },

    //data
    /*         petProfilePage:{
            name: '',
            age: '',
            race: '',
            gender: '',
            description: '',
            image: '',
        },
        humanProfilePage:{
            name: '',
            age: '',
            gender: '',
            description: '',
            image: '',
            location: '',
        } */


}




/* const model2 = {
    app: {
        loggedInAs: null,
        currentPage: null,
        user: {
            firstName: null,
            imageUrl: null,
        },
    },
    inputs: {
        loginPage: {
            userName: '',
            password: '',
            error: '',
        },
        profilePage: {
            firstName: '',
            imageUrl: '',
        },
        mainPage: {
        },
    },
    themes: [
        {name: 'light', foreColor: 'black', backColor: 'white'},
        {name: 'dark', foreColor: 'lightgray', backColor: '#222222'},
        {name: 'mix', foreColor: 'white', backColor: 'darkblue'},
    ]
};




const model3 = {
    app: {
        loggedInUser: null,
        currentPage: 'productDetailPage',
        displayMode: 'dark',
        language: 'no',
    },
    inputs: {
        shoppingCartPage: {
            items: [
                {
                    productId: 123,
                    count: 1,
                },
                {
                    productId: 124,
                    count: 2,
                },
            ],
        },
        productListPage: {
            searchText: null,
            sort: {
                field: 'price',
                isAscending: true,
            },
            layout: 'list',
        },
        productDetailPage: {
            productId: 123,
            zipCode: '3292',
            currentImageIndex: 0,

        },
    },
    // data
    shoppingCart: [
        {
            productId: 123,
            count: 1,
        },
    ],
    purchases: [

    ],
    products: [
        {
            id: 123,
            title: 'Svive Oberon switch Gaming Tastatur',
            description: 'Full størrelse, mekanisk, nordisk-layout, TTC switches, RGB, USB',
            beforePrice: null,
            price: 1319,
            stars: 4.5,
            variants: ['Brown', 'Red'],
            inStockCount: 50,
            images: [],
            brand: 1,
        },
        {
            id: 124,
            title: 'Svive Triton...',
            description: '60%....',
            beforePrice: 799,
            price: 499,
            stars: 3.5,
            variants: null,
            inStockCount: 50,
            images: [],
            brand: 1,
        },
    ],
    brands: [
        { id: 1, name: 'Svive', url: 'www.svive.com' },
        { id: 2, name: 'Logitech', url: 'www.logitech.com' },
    ],
};

 - Per side: 
   1: Hvilke data vises her - og hvordan skal de ligge i 
      modellen for at vi skal kunne tegne opp siden?
   2: Hva kan brukeren gjøre på denne siden - og hvilke 
      endringer i modellen følger av det?
*/ 