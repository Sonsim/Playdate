
let messageInput = "";
let log = "";
let ownerName = "";
let greeting ="";
let answerWalk= "";
let answerPlay="";
let answerConfused = "";
let answerLocation = "";
let answerTime = "";
let chosenusers = ""


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
    ${chosenusers}
    <div class="user-chat">${petImg} <br>${ownerName} og ${petName}</div>
    
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
   }, 3000);
 
}


function answerFromBot() {
    let messagefromuser = messageInput.toLowerCase();

    let users = model.users.owners;
    let arrayOfOwners = Object.keys(users);
  
 

    arrayOfOwners.forEach(function (ownerObj) {
        if(ownerObj = ownerName) {
            greeting = users[ownerObj].chatAnswers.greeting;
            answerWalk = users[ownerObj].chatAnswers.walkanswer;
            answerPlay = users[ownerObj].chatAnswers.playAnswer;
            answerTime = users [ownerObj].chatAnswers.timeAnswer
            answerConfused = users[ownerObj].chatAnswers.confusedAnswer;
            answerLocation = users[ownerObj].chatAnswers.loactionAnswer;

       // return greeting, answerWalk, answerPlay, answerConfused, answerLocation, answerLocation
    }
        
    });


   if(messagefromuser == "hei" || messagefromuser == "hallo" || messagefromuser == "halla")
                {log  += `<div id="botreply"> ${greeting} </div>`;}
   if(messagefromuser == "vil du gå tur?" || messagefromuser == "skal vi gå tur?") 
                {log += `<div id="botreply">${answerWalk}</div>`;}
   if(messagefromuser == "kan du i morgen?" || messagefromuser == "har du tid i morgen?" || messagefromuser == "passer det i morgen")
                {log += `<div id="botreply">${answerTime}</div>`;}
   if(messagefromuser == "kan dyrene leke sammen?" || messagefromuser == "vil dyrene leke sammen?")
                {log += `<div id="botreply">${answerPlay}</div>`;}
   if (messagefromuser == "hvor bor du?" || messagefromuser == "hvor er du?")
                {log += `<div id="botreply">${answerLocation}</div>`;}
   else if(messagefromuser != "hei" && messagefromuser != "hallo" && messagefromuser != "vil du gå tur?" && messagefromuser != "skal vi gå tur?" &&
            messagefromuser != "kan du i morgen?" && messagefromuser != "har du tid i morgen?" && messagefromuser != "kan dyrene leke sammen?" &&
            messagefromuser != "vil dyrene leke sammen?" && messagefromuser != "hvor bor du?" && messagefromuser != "hvor er du?") 
                {log += `<div id="botreply"> ${answerConfused}</div>`;};
   
      showChats();
  }

function clearChatlog() {
    log = "";
}

