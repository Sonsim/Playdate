
let messageInput = "";
let log = "";
let ownerName = "";
let greeting ="";
let answerWalk= "";
let answerPlay="";
let answerConfused = "";
let answerLocation = "";
let answerTime = "";

//Funksjon for å legge til brukeren man trykker på i Mainpage til i chatsiden
function addUsersToChat(noe) {
    //Henter navnet og bilde av dyret ved å bruke this til å hente informasjonen fra kortet på mainpage
    let petName = noe.parentNode.parentNode.children[1].textContent;
    console.log(petName)
    let petImg = noe.parentNode.parentNode.children[0].innerHTML;

    let oldchats =document.getElementById('chatoutput')
    let chats = document.getElementById('userchats');
    let owners = model.users.owners;
    let arrayOfNames = Object.keys(owners);
   
    

    //Går igjennom alle users i modellen og sammenligner navnet på dyrene med navnet til dyret som stod på kortet man trykket på
    arrayOfNames.forEach(function(name) {
        if (owners[name].pets[0].name == petName) {
            ownerName = name;
            
        }
        
    })
 
    //Setter HTML'en i user-chat til samme bilde, eiernavn og dyrenavn som på kortet man trykket på
    chats.innerHTML += /*HTML*/ `
    
    <div class="user-chat">${petImg} <br>${ownerName} og ${petName}</div>
    
    `
    //Viser frem gammel chat dersom det er noe gammel chat lagret i brukeren man trykket på
    oldchats.innerHTML = /*HTML*/ `
    ${model.users.owners[ownerName].oldchats.content}

    `
}

// Funksjon for å vise frem chatten med botten man prater med. Log i dette tilfellet er alt av userinput og botreply
function showChats() {
    let chatsWithUsers = document.getElementById('chatoutput');
    

    chatsWithUsers.innerHTML = /*HTML*/ `
    <br><div>${log}</div>
    `
}

//Funksjon for å ta input fra bruker, vise fram meldingen i chatvincu og starter botreply funksjonen etter 3 sekunder
function sendMessageToUser() {
    let chatinput = document.getElementById('chatinput');
    chatinput.value = "";
    log += `${messageInput}`;
   showChats();
   setTimeout(() => {
    answerFromBot();
   }, 3000);
 
}

// funksjon for som lager svarene til botten basert på forskjellig input fra bruker
function answerFromBot() {
    // variabel som brukes til å sammenligne input med meldigner som gir svar fra botten
    let messagefromuser = messageInput.toLowerCase();

    let users = model.users.owners;
    let arrayOfOwners = Object.keys(users);
  
 
    //funskjon som sammenligner alle navn i modellen med navnet til brukeren man chatter med. Når de matcher henter den svarene til den aktuelle brukerene 
    // og setter variablene til tilsvarende svar fra modellen.
    arrayOfOwners.forEach(function (ownerObj) {
        if(ownerObj == ownerName) {
            greeting = users[ownerObj].chatAnswers.greeting;
            answerWalk = users[ownerObj].chatAnswers.walkanswer;
            answerPlay = users[ownerObj].chatAnswers.playAnswer;
            answerTime = users [ownerObj].chatAnswers.timeAnswer
            answerConfused = users[ownerObj].chatAnswers.confusedAnswer;
            answerLocation = users[ownerObj].chatAnswers.loactionAnswer;
    }
       
    });

    // funksjon som bestemmer hva botten kan svare på og hvilke svar de forskjellige inputene gir
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
// Sier seg selv vel?
function clearChatlog() {
    log = "";
}
// Funksjon som lagrer chatten med brukeren man har med den aktuelle brukeren
function saveChats() {
    content = log;
 
    //lager et nytt objekt i model.chat med innholden fra chatten man har hatt
    const newChat = {
        from: model.app.currentUser, 
        to: ownerName,
        content: content,
    };
model.chat["newChat"] = newChat;
console.log(model.chat)
//matcher hvem man prater med med navn fra modellen og lagrer chatten under modellen.
if(newChat.to == ownerName) {
    model.users.owners[ownerName].oldchats = newChat;
}
}



