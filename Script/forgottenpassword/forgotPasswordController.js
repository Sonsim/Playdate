function sendEmail() {
    let input = document.getElementById('emailInput').value;
    let inbox = model.inbox.passwordChange;

    inbox.push(input);
    console.log(inbox)

}