function sendFeedback(){
    const email = document.getElementById('emailInput').value;
    const nameOfSender = document.getElementById('nameInput').value;
    const subject= document.getElementById('subjectInput').value;
    const content= document.getElementById('contentInput').value;
    const inbox = model.inbox.allEmails;

    const nameRegex = /^[A-Za-z]+( [A-Za-z]+)+$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const subjectRegex = /^[A-Za-z0-9\s.,!?&'"()-]{1,100}$/;
    const messageRegex = /^[A-Za-z0-9\s.,!?&'"()-]{1,100}$/;

    let nameVerify = nameRegex.test(nameOfSender);
    let emailVerify = emailRegex.test(email);
    let subjectVerify = subjectRegex.test(subject);
    let messageVerify = messageRegex.test(content);

   if(nameVerify && emailVerify && subjectVerify && messageVerify) {
        const newEmail = {
            name: nameOfSender,
            email: email,
            subject: subject,
            message: content,
        };

        model.inbox.allEmails["newEmail"] = newEmail;
        const sender = model.inbox.allEmails.newEmail.name;

        model.inbox.allEmails[sender] = model.inbox.allEmails.newEmail;

        delete model.inbox.allEmails.newEmail;

        console.log(model.inbox.allEmails)

        const path = model.app.allPages;
        updateView(path.mainPage);
   };

   if(nameVerify == false || emailVerify == false || subjectVerify == false || messageVerify == false) {
    document.querySelector(".wrong-input").textContent = "Vennligst fyll ut alle feltene";
   };
};