function updateFeedbackView() {
  let app = document.getElementById('app');
  let path = model.app.allPages;

  app.innerHTML = /*HTML*/ `
    <div class="feedbackBody" >
      <div class="box">
        <header class="feedback-header">
          <img class="logo" src="img/Playdate.png" alt="Logo" />
        </header>
        <main class="feedback-main">
          <input id="nameInput" class="feedbackInput" type="text" placeholder="Navn" />
          <input id="emailInput" class="feedbackInput" type="email" placeholder="Epost" />
          <input id="subjectInput" class="feedbackInput" type="text" placeholder="Emne" />
          <textarea id="contentInput" class="feedbackTextBox" rows="14" placeholder="Gi en tilbakemelding"></textarea>
          <button class="feedback-main button" onclick="sendFeedback(); updateView('${path.mainPage}')">Send inn</button>
        </main>
        <footer class="feedback-footer">
          <Button class="feedbackBackBtn" onclick="updateView('${path.mainPage}')"><i class="arrow left" ></i > Tilbake </Button>
        </footer>
      </div>
    </div>
    `
} 