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
        <div id="wrongImgSrc" class="wrongInput"></div>

        <input class="pet-input type-of-pet" type="text" placeholder="Type dyr">
        <div id="wrongTypeOfPet" class="wrongInput"></div>
        <hr>
        <input class="pet-input race" type="text" placeholder="Type rase">
        <div id="wrongRace" class="wrongInput"></div>
        <hr>
        <input class="pet-input name"  type="text" id="petInputField" placeholder="Navn">
        <div id="wrongName" class="wrongInput"></div>
        <hr>
        <input class="pet-input age" type="number" placeholder="Alder">
        <div id="wrongAge" class="wrongInput"></div>
        <hr>

        <div class="create-pet-bottom-box">
            <ul id="petList"></ul>
            <div class="create-pet-btn-box">
                <button class="pet-button" onclick="addPetToList()">Legg til flere dyr</button>
                <button class="pet-button" onclick="addPetToUser()">Opprett bruker</button>
            </div>
            <img class="pet-logo" src="img/Playdate.png" alt="">
        </div>

    </div>
    </div>
    
    `
}

}
