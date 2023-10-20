function updateFeedbackView() {

    let app = document.getElementById('app');

    app.innerHTML = /*HTML*/ `
    <div class="feedbackBody>
      <div class="box">
        <header class="feedback-header">
          <img class="logo" src="../img/Playdate.png" alt="Logo" />
        </header>
        <main class="feedback-main>
          <input type="text" placeholder="Navn" />
          <input type="email" placeholder="Epost" />
          <input type="text" placeholder="Emne" />
          <textarea rows="14" placeholder="Gi en tilbakemelding"></textarea>
          <button>Send inn</button>
        </main>
        <footer class="feedback-footer">
          <a class="back-btn" href="../html/settings.html"><i class="fa fa-arrow-left"></i> Tilbake </a>
        </footer>
      </div>
    </div>
    `


}