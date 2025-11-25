# Portfolio Contact Form Backend Setup

## Quick Start Guide

### Step 1: Install Backend Dependencies

Open PowerShell in the project root and run:

```powershell
cd server
npm install
```

### Step 2: Get Gmail App Password

You need a Gmail App Password to send emails. Follow these steps:

1. **Enable 2-Step Verification** (if not already enabled):
   - Visit: https://myaccount.google.com/security
   - Find "2-Step Verification" and turn it ON
   - Follow the prompts to set it up

2. **Generate App Password**:
   - Visit: https://myaccount.google.com/apppasswords
   - You may need to re-enter your password
   - Select "Mail" for the app type
   - Select "Other (Custom name)" for device
   - Type: "Portfolio Backend"
   - Click "Generate"
   - **IMPORTANT**: Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
   - Remove spaces so it becomes: `abcdefghijklmnop`

### Step 3: Create .env File

In the `server` folder, create a new file named `.env` (exactly this name, no .txt extension):

```env
PORT=5000
EMAIL_USER=saividesh29@gmail.com
EMAIL_APP_PASSWORD=paste-your-16-character-password-here
```

**Replace `paste-your-16-character-password-here` with the actual 16-character password from Step 2.**

### Step 4: Install Concurrently (Optional)

To run both frontend and backend with one command:

```powershell
# In project root
npm install
```

### Step 5: Run Everything

**Option A - Run Both Together:**
```powershell
# In project root
npm run dev:all
```

**Option B - Run Separately:**

Terminal 1 - Backend:
```powershell
cd server
npm run dev
```

Terminal 2 - Frontend:
```powershell
npm run dev
```

### Step 6: Test the Contact Form

1. Open your portfolio at `http://localhost:3000`
2. Scroll to the Contact section
3. Fill out the form
4. Click "Send Message"
5. Check your email at `saividesh29@gmail.com`

## What Happens When Someone Submits the Form?

1. User fills out: Name, Email, Subject, Message
2. Frontend sends data to backend (localhost:5000)
3. Backend uses Nodemailer to send email via Gmail
4. **You receive an email at saividesh29@gmail.com** with:
   - Subject: "Portfolio Review: [their subject]"
   - Styled HTML email with terminal theme
   - Their name, email, and message
   - Reply-To set to their email (so you can reply directly)
5. User sees success/error message on the form

## Email Template Preview

The email you receive will look like this:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
New Portfolio Message
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: John Doe
Email: john@example.com
Subject: Project Collaboration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Message:

I loved your portfolio! I'd like to
discuss a potential collaboration...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from your portfolio website
[timestamp]
```

## Troubleshooting

### "Failed to send message"
- Check if backend server is running (should see "Server is running on port 5000")
- Verify .env file has correct EMAIL_USER and EMAIL_APP_PASSWORD
- Make sure there are no extra spaces in the App Password

### "Authentication failed" in server logs
- App Password is incorrect
- 2-Step Verification is not enabled
- Using regular Gmail password instead of App Password

### Frontend can't connect to backend
- Backend must be running on port 5000
- Check for CORS errors in browser console
- Verify Contact.js is calling `http://localhost:5000/api/contact`

### Not receiving emails
- Check spam folder
- Verify EMAIL_USER in .env is `saividesh29@gmail.com`
- Check server console for "Email sent" message

## Security Notes

✅ **Safe to commit:**
- server/server.js
- server/package.json
- server/.env.example
- server/README.md

❌ **NEVER commit:**
- server/.env (contains your App Password)
- server/node_modules

The `.gitignore` file is already configured to protect your credentials.

## API Reference

**Endpoint**: `POST http://localhost:5000/api/contact`

**Request**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response (Success)**:
```json
{
  "success": true,
  "message": "Message sent successfully! I will get back to you soon."
}
```

**Response (Error)**:
```json
{
  "success": false,
  "message": "Error description"
}
```

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Backend**: Deploy to Heroku, Railway, or Render
   - Add environment variables in hosting dashboard
   - Update PORT if needed

2. **Frontend**: Update API URL in `Contact.js`
   - Change `http://localhost:5000/api/contact` to your production backend URL
   - Example: `https://your-backend.herokuapp.com/api/contact`

3. **CORS**: Update CORS origin in `server.js` to your frontend domain

---

**Need Help?** Check server logs for detailed error messages. The backend provides verbose logging for debugging.
