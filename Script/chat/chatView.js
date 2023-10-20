function updateChatView () {
    document.getElementById('app').innerHTML = /*HTML*/
    `
    <div id="sendMessage">
      <input type="text" id="chatinput" placeholder="Give me some text">
      <button id="sendButton">Send</button>
    </div>
    <div id="userchats">
      <div class="user-chat">userChat1</div>
      <div class="user-chat">userChat2</div>
      <div class="user-chat">userChat3</div>
      <div class="user-chat">userChat4</div>
      <div class="user-chat">userChat5</div>
      <div class="user-chat">userChat6</div>
    </div>
    `
};