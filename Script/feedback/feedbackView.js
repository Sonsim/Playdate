function updateFeedbackView() {
  let app = document.getElementById('app');
  let path = model.app.allPages;

  app.innerHTML = /*HTML*/ `
    <div class="feedbackBody" >
      <div class="box">
        <header class="feedback-header">
          <img class="logo" src="img/Playdate.png" alt="Logo" />
          <h2>Gi oss en tilbakemelding</h2>
        </header>
        <main class="feedback-main">
          <input id="nameInput" class="feedbackInput" type="text" placeholder="Navn" />
          <input id="emailInput" class="feedbackInput" type="email" placeholder="Epost" />
          <input id="subjectInput" class="feedbackInput" type="text" placeholder="Emne" />
          <textarea id="contentInput" class="feedbackTextBox" rows="14" placeholder="Gi en tilbakemelding"></textarea>
          <div class="wrong-input"></div>
          <div class="button-box">
            <button class="feedbackBackBtn" onclick="updateView('${path.mainPage}')"><i class="arrow left"></i>Tilbake</button>
            <button class="feedback-main-button" onclick="sendFeedback()">Send inn</button>
          </div>
        </main>
      </div>
    </div>
    `
} 
