const sensitiveKeywords = [
    "bank account number", "account number", "routing number", "IBAN", 
    "SWIFT code", "BIC", "credit card number", "debit card number", 
    "card number", "CVV", "CVC", "expiration date", "expiry date", 
    "security code", "username", "user name", "login id", "password", 
    "passcode", "PIN", "login credentials", "security question", 
    "security answer", "social security number", "SSN", "security clearance",
    "national insurance number", "driver's license number", 
    "passport number", "tax identification number", "TIN", "bank", 
    "confidential", "private", "sensitive", "credit-card", "otp", 
    "security question", "passport number", "one-time password",
    "account", "phone", "insurance", "sort code", "NI", "NI number"
];

const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
const phonePattern = /\b\d{3}[-\s]?\d{4}[-\s]?\d{4}\b/;
const creditCardPattern = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/;
const sortCodePattern = /\b\d{2}[-\s]?\d{2}[-\s]?\d{2}\b/;

function senseInfo(emailBody) {
    if (!emailBody) return false;
    const lowerCaseBody = emailBody.toLowerCase();

    const detectedKeyword = sensitiveKeywords.some(keyword => lowerCaseBody.includes(keyword.toLowerCase()));
    if (detectedKeyword) return true;
    
    const patterns = [emailPattern, phonePattern, creditCardPattern, sortCodePattern];
    return patterns.some(pattern => pattern.test(emailBody));
}

document.addEventListener('DOMContentLoaded', () => {
    const emailBody = document.getElementById('area');
    const sendButton = document.getElementById('send');
    const form = document.getElementById('form');
    const warningMessage = document.getElementById('warning-message');

    emailBody.addEventListener('input', () => {
    
        if (senseInfo(emailBody.value)) {
            warningMessage.style.display = 'block';
            sendButton.disabled = true;
            sendButton.style.cursor = 'default'
            sendButton.style.backgroundColor = 'gray'
            sendButton.style.borderColor = 'gray'
            form.style.paddingBottom = '.875rem'

        } else {
            warningMessage.style.display = 'none';
            sendButton.disabled = false;
            sendButton.style.cursor = 'pointer'
            sendButton.style.backgroundColor = '#043a45'
            sendButton.style.borderColor = '#043a45'
            form.style.paddingBottom = '3rem'
        }
    });
});