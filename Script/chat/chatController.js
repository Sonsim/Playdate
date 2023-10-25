
let messageInput = "";
let log = "";



function addUsersToChat(noe) {
    let petName = noe.parentNode.parentNode.children[1].textContent.slice(6);
    let petImg = noe.parentNode.parentNode.children[0].innerHTML;
    
    let chats = document.getElementById('userchats');
    let ownerName = "";
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
   }, 3000);
 
}


function answerFromBot() {
    let messagefromuser = messageInput.toLowerCase();

   if(messagefromuser == "hei" || messagefromuser == "hallo") log  += '<div id="botreply">Heisann</div>';
   if(messagefromuser == "vil du gå tur?") log += '<div id="botreply">Ja, når skal vi møtes?</div>';
   else if(messagefromuser != "hei" && messagefromuser != "hallo") log += '<div id="botreply">Hva mener du?</div>';
      showChats();
      // velge riktig eier - hvis eiernavn = eiernavn fra siden så skal chatanswers fra den 
  }
