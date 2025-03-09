async function mailer(eDetails) {
    try {
        const res = await fetch('/emailer/send', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eDetails)
        });
        
        if (res.status == 401) {
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

document.getElementById('send').addEventListener('click', () => {
    const toEmail = document.getElementById('to-email')
    const carboncopy = document.getElementById('cc-email')
    const emailSubject = document.getElementById('subject')
    const emailContent = document.getElementById('area')

    const details = {
        email: toEmail.value,
        cc: carboncopy.value,
        subject: emailSubject.value,
        content: emailContent.value
    }

    let valid = true;

    if (details.email == "") {
        alert('Email address is required!');
        valid = false;
    } else if (!isEmail(details.email)) {
        alert(`Email: ${details.email} Is not a valid email address!`);
        valid = false;
    }

    if (details.subject == "") {
        alert('Email Subject is required!');
        valid = false;
    }

    if (details.content == "") {
        alert('Email box cannot be empty');
        valid = false;
    }

    if (valid) {
        mailer(details);
        toEmail.value = '';
        carboncopy.value = '';
        emailSubject.value = '';
        emailContent.value = '';
    }
});