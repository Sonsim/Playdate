


function updateChatView () {
  let path = model.app.allPages;
    document.getElementById('app').innerHTML = /*HTML*/
    `
    <div id="sendMessage">
      <input type="text" id="chatinput" placeholder="Si noe!" oninput="messageInput = this.value">
      <button id="sendButton" onclick="sendMessageToUser(), saveChats()">Send</button>
    </div>
    <div id="chatbox">
        <div id="userchats">
        </div>
        <div id="chatoutput">
        </div>
      </div>
      <button id="backButton" onclick="updateView('${path.mainPage}'), clearChatlog()">Tilbake</button>
    `
};