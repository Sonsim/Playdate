

function sendFeedback(){
    const email = document.getElementById('emailInput').value;
    const nameOfSender = document.getElementById('nameInput').value;
    const subject= document.getElementById('subjectInput').value;
    const content= document.getElementById('contentInput').value;
    const inbox = model.inbox.allEmails;
   
    const newEmail = {
        name: nameOfSender,
        email: email,
        subject: subject,
        message: content,
       
    }

     
    model.inbox.allEmails["newEmail"] = newEmail;
    const sender = model.inbox.allEmails.newEmail.name;

    model.inbox.allEmails[sender] = model.inbox.allEmails.newEmail;

    delete model.inbox.allEmails.newEmail;

    console.log(model.inbox.allEmails)
}