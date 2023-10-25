
let messageInput = "";
let log = "";
let ownerName = "";
let greeting ="";
let answer1= "";


function addUsersToChat(noe) {
    let petName = noe.parentNode.parentNode.children[1].textContent.slice(6);
    let petImg = noe.parentNode.parentNode.children[0].innerHTML;
    
    let chats = document.getElementById('userchats');
    let owners = model.users.owners;
    let arrayOfNames = Object.keys(owners);
   
    


    arrayOfNames.forEach(function(name) {
        if (owners[name].pets[0].name == petName) {
            ownerName = name;
            
        }
        
    })
    

    chats.innerHTML += /*HTML*/ `
    
    <div class="user-chat">${petImg} ${ownerName} og ${petName}</div>

    `
}

function showChats() {
    let chatsWithUsers = document.getElementById('chatoutput');

    chatsWithUsers.innerHTML = /*HTML*/ `
    <br><div>${log}</div>
    `
}


function sendMessageToUser() {
    let chatinput = document.getElementById('chatinput');
    chatinput.value = "";
    log += `${messageInput}`;
   showChats();
   setTimeout(() => {
    answerFromBot();
   }, 1000);
 
}


function answerFromBot() {
    let messagefromuser = messageInput.toLowerCase();

    let users = model.users.owners;
    let arrayOfOwners = Object.keys(users);
  
 

    arrayOfOwners.forEach(function (ownerObj) {
        if(ownerObj = ownerName) {
        greeting = users[ownerObj].chatAnswers.greeting;
        answer1 = users[ownerObj].chatAnswers.walkanswer;
        return greeting, answer1
        }
        
    });


   if(messagefromuser == "hei" || messagefromuser == "hallo") log  += `<div id="botreply"> ${greeting} </div>`;
   if(messagefromuser == "vil du gå tur?") log += `<div id="botreply">${answer1}</div>`;
   else if(messagefromuser != "hei" && messagefromuser != "hallo") log += `'<div id="botreply">Hva mener du?</div>'`;
      showChats();
  }

function clearChatlog() {
    log = "";
}

