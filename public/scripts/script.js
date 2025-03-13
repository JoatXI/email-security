const sensitiveKeywords = [
    "bank account number", "account number", "routing number", "IBAN", 
    "SWIFT code", "BIC", "credit card number", "debit card number", 
    "card number", "CVV", "CVC", "expiration date", "expiry date", 
    "security code", "username", "user name", "login id", "password", 
    "passcode", "PIN", "login credentials", "security question", 
    "security answer", "social security number", "SSN", 
    "national insurance number", "driver's license number", 
    "passport number", "tax identification number", "TIN", "bank", 
    "confidential", "private", "sensitive", "credit-card", "otp", 
    "security question", "passport number", "one-time password"
];

function senseInfo(emailBody) {
    if (!emailBody) return false;
    const lowerCaseBody = emailBody.toLowerCase();

    return sensitiveKeywords.some(keyword => lowerCaseBody.includes(keyword.toLowerCase()));
}

document.addEventListener('DOMContentLoaded', () => {
    const emailBody = document.getElementById('area');
    const sendButton = document.getElementById('send');
    const warningMessage = document.getElementById('warning-message');

    emailBody.addEventListener('input', () => {
    
        if (senseInfo(emailBody.value)) {
            warningMessage.style.display = 'block';
            sendButton.disabled = true;
        } else {
            warningMessage.style.display = 'none';
            sendButton.disabled = false;
        }
    });
});