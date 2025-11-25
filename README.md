# Developer Portfolio

A modern, dark-themed developer portfolio built with React.js featuring smooth animations and interactive effects.

## Features

- 🌙 Dark theme with red/black color scheme
- ✨ Smooth animations using Framer Motion
- 🎨 Minimal design with thin borders
- 📱 Fully responsive
- 🎭 Interactive hover effects
- ⚡ Fast and optimized
- 💼 Experience and Education sections
- 🚀 Current project showcase (DropIQ)
- 📄 Resume download functionality
- 🔲 Grid background pattern

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your actual values:
     - Replace `YOUR_FILE_ID_1` etc. with your Google Drive certificate file IDs
     - Set `REACT_APP_API_URL` to your backend API URL (default: http://localhost:5000)
     - Verify your contact information (email, phone, location)
     - Check your social media URLs (GitHub, LinkedIn, LeetCode)
   - Add your resume PDF file to the `public` folder as `resume.pdf`

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Environment Variables

This project uses environment variables to manage sensitive data and configuration. All variables are prefixed with `REACT_APP_` to be accessible in the React app.

### Certificate Links
- `REACT_APP_CERT_EXPERIENCE_1/2/3`: Google Drive file IDs for experience certificates
- `REACT_APP_CERT_ACHIEVEMENT_1/2/3/4/5`: Google Drive file IDs for achievement certificates

### API Configuration
- `REACT_APP_API_URL`: Backend API URL for contact form

### Contact Information
- `REACT_APP_EMAIL`: Your email address
- `REACT_APP_PHONE`: Your phone number
- `REACT_APP_LOCATION`: Your location

### Social Links
- `REACT_APP_GITHUB`: Your GitHub profile URL
- `REACT_APP_LINKEDIN`: Your LinkedIn profile URL
- `REACT_APP_LEETCODE`: Your LeetCode profile URL

**Important:** Never commit your `.env` file to Git. The `.gitignore` file is configured to exclude it along with PDF files and certificates.

## Customization

Update the content in the component files to personalize:
- Hero section with your name and title
- About section with your bio
- Experience section with your work history
- Education section with your degrees and certifications
- Skills section with your technologies
- Current Project section (DropIQ or your own project)
- Projects section with your portfolio work
- Contact section with your information

### Uploading Your Certificates to Google Drive

1. Upload your certificates to Google Drive
2. Right-click each file → Get link → Set to "Anyone with the link can view"
3. Copy the file ID from the URL (e.g., in `https://drive.google.com/file/d/FILE_ID_HERE/view`, copy `FILE_ID_HERE`)
4. Update the corresponding environment variables in `.env` with these file IDs

### Adding Your Resume

1. Export your resume as a PDF file
2. Name it `resume.pdf`
3. Place it in the `public` folder
4. The download button will automatically work (already configured in `.gitignore` to prevent committing)

## Technologies Used

- React.js
- Framer Motion
- React Icons
- CSS3
