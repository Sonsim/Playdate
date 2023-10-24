function updateViewCreatePet() {
    let page = document.getElementById('app');
    let path = model.app.allPages;

    page.innerHTML = /*HTML*/ `
    <div id=create-pet-background>
    <div class="create-pet-frame">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcvmtYx9E-2KYQ0xX8JN9JN4J8_n3FqbXsA&usqp=CAU"
            alt=""><br>
        <button class="upload-image-btn">Legg til bilde</button><br>
        <input class="pet-input" type="text" placeholder="Type dyr">
        <hr>
        <input class="pet-input" type="text" placeholder="Navn">
        <hr>
        <input class="pet-input" type="number" placeholder="Alder">
        <hr>

        <div class="create-pet-bottom-box">
            <div id="petsAdded">Eks: easy added</div>
            <div class="create-pet-btn-box">
                <button class="pet-button" style="margin-right: 2.5px;">Legg til flere dyr</button>
                <button class="pet-button" onclick="updateView('${path.mainPage}')">Opprett bruker</button>
            </div>
            <img class="pet-logo" src="img/Playdate.png" alt="">
        </div>
    </div>
    </div>
    `
}