# Portfolio Backend Server

Email backend for portfolio contact form using Node.js, Express, and Nodemailer.

## Setup Instructions

### 1. Install Dependencies

Navigate to the server directory and install packages:

```bash
cd server
npm install
```

### 2. Configure Gmail App Password

To send emails via Gmail, you need to generate an App Password:

1. **Enable 2-Step Verification:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable "2-Step Verification" if not already enabled

2. **Generate App Password:**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Name it "Portfolio Backend"
   - Click "Generate"
   - Copy the 16-character password (no spaces)

### 3. Create Environment File

```bash
# In the server directory
cp .env.example .env
```

Edit `.env` file:
```env
PORT=5000
EMAIL_USER=saividesh29@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password-here
```

### 4. Run the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### POST `/api/contact`
Send contact form message

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss..."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! I will get back to you soon."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message"
}
```

### GET `/api/health`
Health check endpoint

**Response:**
```json
{
  "status": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Email Template

Emails are sent with a styled terminal-themed HTML template matching your portfolio design, including:
- Sender name and email
- Subject line
- Message content
- Timestamp
- Reply-to functionality (replies go directly to the sender's email)

## Running Both Frontend and Backend

From the root directory:

```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend  
npm run dev
```

Or use the concurrent script (see root package.json).

## Security Notes

- `.env` file is in `.gitignore` - never commit credentials
- Uses Gmail App Password (not your actual password)
- CORS enabled for frontend communication
- Input validation on all fields

## Troubleshooting

**Email not sending?**
- Verify App Password is correct (16 characters, no spaces)
- Ensure 2-Step Verification is enabled on Gmail
- Check EMAIL_USER matches your Gmail address
- Review server console for error messages

**CORS errors?**
- Ensure backend is running on port 5000
- Check frontend is calling `http://localhost:5000/api/contact`

**Port already in use?**
- Change PORT in .env file
- Update frontend API URL in Contact.js to match
