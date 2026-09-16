# email-security
With the rise of cyber threats, ensuring secure email communication is more critical than ever. This project challenges students to develop a method for detecting when emails should be sent securely.

## Tech Stack
- GitHub

- HTML

- CSS

- JavaScript

- Figma

- MongoDB

- Cypress

## Application Features
1. **Sensitive Keyword Detection**
   - Identifies sensitive keywords within the email body.
   - Excludes footers or signatures from the detection.
   
2. **Word Count Detection**
   - Tracks word count in the email body excluding the footer.
   - Generates a prompt based on the word count for secure email sending.

3. **Email Send Simulation**
   - Mocks the email sending process to test security detection without actual transmission.
   
4. **Real-time Feedback**
   - Provides real-time feedback to the user as they type the email content.
   
5. **Highlighting Detected Keywords**
   - Highlights sensitive keywords within the email body.
   - Allows the user to review and modify flagged content before sending.

6. **User Interface (UI)**
   - Simple and clean interface with email fields (To, CC, Subject, Body).
   - Interactive buttons such as "Send," "Add Signature," and "Check."

7. **Test Case Integration (Cypress)**
   - Automated testing to ensure accuracy in word count, keyword detection, and email send simulation.
   
8. **Secure Email Prompt**
   - Notifies the user if the email requires secure sending based on detected sensitive keywords or word count.