function updateViewCreatePet() {
    let page = document.getElementById('app');
    let path = model.app.allPages;

    page.innerHTML = /*HTML*/ `
    <div id=create-pet-background>
    <div class="create-pet-frame">



        <img class="pet-image" id="profilepic"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcvmtYx9E-2KYQ0xX8JN9JN4J8_n3FqbXsA&usqp=CAU"
         alt="Profilbilde Placeholder"><br>
         
        <div><span>Last opp bilde: </span><input onchange="uploadPetImage(this)" type="file" /></div><br>


        <input class="pet-input type-of-pet" type="text" placeholder="Type dyr">
        <hr>
        <input class="pet-input race" type="text" placeholder="Type rase">
        <hr>
        <input class="pet-input name"  type="text" id="petInputField" placeholder="Navn">
        <hr>
        <input class="pet-input age" type="number" placeholder="Alder">
        <hr>

        <div class="create-pet-bottom-box">
            <ul id="petList"></ul>
            <div class="create-pet-btn-box">
                <button class="pet-button" onclick="addPetToList()">Legg til flere dyr</button>
                <button class="pet-button" onclick="addPetToUser(); updateView('${path.mainPage}')">Opprett bruker</button>
            </div>
            <img class="pet-logo" src="img/Playdate.png" alt="">
        </div>

    </div>
    </div>
    
    `

}