async function mailer(eDetails) {
    try {
        const res = await fetch('/emailer/send', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eDetails)
        });
        
        if (res.status == 400) {
            alert('Invalid details provided')
        } else if (res.status == 201) {
            alert('Email sent successfully')
        }
    } catch (error) {
        alert(`Error occured: ${error.message}`)
    }
}

function isEmail(emailCheck) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailCheck);
}

document.getElementById('send').addEventListener('click', (e) => {
    e.preventDefault();

    const toEmail = document.getElementById('email')
    const emailSubject = document.getElementById('subject')
    const emailContent = document.getElementById('area')

    const details = {
        email: toEmail.value,
        subject: emailSubject.value,
        content: emailContent.value
    }

    let valid = true;

    if (details.email == "") {
        setErrorFor(toEmail, "Email cannot be empty!");
        valid = false;
    } else if (!isEmail(details.email)) {
        setErrorFor(toEmail, "Not a valid email!");
        valid = false;
    } else {
        setSuccessFor(toEmail);
    }

    if (details.subject == "") {
        setErrorFor(emailSubject, "Subject is required!");
        valid = false;
    } else {
        setSuccessFor(emailSubject);
    }

    if (details.content == "") {
        setErrorFor(emailContent, "Message cannot be empty!");
        valid = false;
    } else {
        setSuccessFor(emailContent);
    }

    if (valid) {
        mailer(details);
        toEmail.value = '';
        emailSubject.value = '';
        emailContent.value = '';
    }
});

function setErrorFor(input, message) {
    const formBox = input.parentElement;
    const small = formBox.querySelector("small");

    small.innerText = message;
    formBox.className = "form-box error";
}

function setSuccessFor(input) {
    const formBox = input.parentElement;
    formBox.className = "form-box success";
}