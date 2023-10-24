function updateFeedbackView() {

    let app = document.getElementById('app');

    app.innerHTML = /*HTML*/ `
    <div class="feedbackBody" style="margin: 0;box-sizing: border-box;display: flex;height: 100vh;justify-content: center;">
      <div class="box" style="{width: 500px;}">
        <header class="feedback-header style="margin: 40px 0 0 25px;">
          <img class="logo" style="width: 60px;height: 60px;" src="img/Playdate.png" alt="Logo" />
        </header>
        <main class="feedback-main" style="display: flex;flex-direction: column;align-items: center;">
          <input style="width: 200px;margin-bottom: 10px;padding: 2.5px 0 2.5px 0;" type="text" placeholder="Navn" />
          <input style="width: 200px;margin-bottom: 10px;padding: 2.5px 0 2.5px 0;" type="email" placeholder="Epost" />
          <input style="width: 200px;margin-bottom: 10px;padding: 2.5px 0 2.5px 0;" type="text" placeholder="Emne" />
          <textarea style="margin-top: 20px;width: 300px;margin-bottom: 20px;" rows="14" placeholder="Gi en tilbakemelding"></textarea>
          <button style="width: 120px;border: none;padding: 12px 0 12px 0;border-radius: 7px;cursor: pointer;">Send inn</button>
        </main>
        <footer class="feedback-footer" style="margin-left: 25px;">
          <a class="back-btn" style="text-decoration: none;color: black;"><i class="fa fa-arrow-left"></i> Tilbake </a>
        </footer>
      </div>
    </div>
    `


}