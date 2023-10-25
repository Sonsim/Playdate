
let messageInput = "";
let log = "";



function addUsersToChat(noe) {
    let petName = noe.parentNode.parentNode.children[1].textContent.slice(5);
    let petImg = noe.parentNode.parentNode.children[0].innerHTML;
    let pet = noe.parentNode.parentNode;
    console.log(pet)
    let chats = document.getElementById('userchats');
    chats.innerHTML += /*HTML*/ `
    
    <div class="user-chat">${petImg}${petName}</div>

    `
}

function showChats() {
    let chatsWithUsers = document.getElementById('chatoutput');

    chatsWithUsers.innerHTML += /*HTML*/ `
    <div>${log}</div>
    `

}

function sendMessageToUser() {
    let chatinput = document.getElementById('chatinput');
    chatinput.value = "";
    log += messageInput;
   showChats();
  // answerFromBot();
}

//function answerFromBot() {
 //   let messagefromuser = messageInput.toLowerCase;

//    if(messagefromuser == "hei" || messagefromuser == "hallo" ) log += `<br> Heisann`
//    showChats();
    //let owners = model.users.owners;
    //let arrayOfNames = Object.keys(owners);

    //arrayOfNames.forEach(function (name) {
    //    if (message == "hei") {
    //      log += /*HTML*/ `<div>test</div>`
    //    }
    //    console.log(owners[name].chatAnswers);
    //});

//}
