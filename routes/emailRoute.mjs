import Email from "../model/Email.mjs";
import express from 'express';

const sendEmail = express.Router();

sendEmail.post('/send', async (req, res) => {
    const {email, cc, subject, content} = req.body;
    if (!email || !subject || !content) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        const result = await Email.insertOne({
            "email": email,
            "cc": cc,
            "subject": subject,
            "content": content
        });
        console.log(result);
        res.status(201).json({"success":  "email sent successfully"});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

export default sendEmail;