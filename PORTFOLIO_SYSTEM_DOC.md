# PORTFOLIO SYSTEM DOCUMENTATION

## 1. PRODUCT OVERVIEW

Personal developer portfolio with integrated contact system.
User views portfolio content (projects, skills, experience) and submits contact form.
System guarantees email delivery to portfolio owner via Gmail SMTP with zero message loss.
Constraints: Sub-200ms form validation, Gmail API rate limits (500/day), single-tenant architecture.

---

## 2. SYSTEM DESIGN

**Components:**
- `React Frontend` — Renders portfolio sections, validates contact form, handles client-side state
- `Express Backend` — Receives contact submissions, authenticates with Gmail, sends formatted emails
- `Nodemailer` — SMTP wrapper for Gmail API integration with OAuth2 app password flow
- `Gmail Service` — External email delivery service, rate-limited, requires app-specific password

**System Flow (Contact Submission):**
```
User fills form → Frontend validates → POST /api/contact → Backend authenticates Gmail
→ Nodemailer formats HTML email → Gmail SMTP sends → Portfolio owner receives email
→ Backend returns success → Frontend displays confirmation
```

---

## 3. DATA MODEL

**Entities:**
- `ContactSubmission` — Ephemeral (not persisted): { name, email, subject, message, timestamp }
- `EmailConfig` — Environment vars: { EMAIL_USER, EMAIL_APP_PASSWORD, PORT }

**Key Relationships:**
- ContactSubmission → Email (1:1 transient mapping)
- Email delivery is atomic: success/fail with no partial states

**Invariants:**
- All form fields required before submission
- Email validation via regex on client
- Gmail app password must be 16-char alphanumeric
- No PII stored post-transmission

---

## 4. CLOUD ARCHITECTURE

**Contact Form Flow:**
```
[Client Browser] → [Localhost:3000 React SPA] → [Localhost:5000 Express API]
                                                          ↓
                                                    [Gmail SMTP:465]
                                                          ↓
                                                   [saividesh29@gmail.com]
```

**Compute:**
- Frontend: Static hosting candidate (Vercel/Netlify)
- Backend: Serverless function deployment (Vercel Functions, AWS Lambda + API Gateway)

**Failure Isolation:**
- Gmail outage: Backend returns 500, frontend displays retry UI
- Backend crash: CORS error caught, user notified
- Network timeout: 30s fetch timeout with error boundary

---

## 5. CRITICAL FLOWS

### Contact Form Submission (Revenue-Adjacent)
1. User completes 4-field form with email validation
2. Frontend POSTs JSON to `/api/contact` with 30s timeout
3. Backend validates all fields present (400 if missing)
4. Nodemailer creates Gmail transport with app password
5. Email sent with HTML template (terminal theme) and plaintext fallback
6. Gmail SMTP returns 250 OK or 5XX error
7. Backend logs transmission, returns success/fail to client

**Failure:** Invalid app password → Authentication error → User sees "Server error, try again"

### Gmail Authentication (External Dependency)
1. Backend reads EMAIL_APP_PASSWORD from environment
2. Nodemailer establishes TLS connection to smtp.gmail.com:465
3. OAuth2 flow via app-specific password (16-char token)
4. Connection verified on server startup
5. Transporter cached for request lifetime

**Failure:** 2-factor auth disabled or wrong password → Server logs error → Health check fails

---

## 6. WHAT THIS PROJECT DEMONSTRATES

**System Design:**
- Client-server separation with REST API contract
- External service integration (Gmail SMTP) with credential management
- Error handling across network boundaries

**Backend Reasoning:**
- Environment-based configuration (12-factor app principle)
- Input validation and sanitization
- Transactional email delivery without database persistence

**Data Correctness:**
- Client-side validation prevents malformed requests
- Server-side validation as second barrier
- All-or-nothing email delivery (no partial sends)

**Cloud Awareness:**
- Serverless-ready architecture (stateless backend)
- CORS configuration for cross-origin deployment
- Health check endpoint for monitoring

**Production Thinking:**
- Secrets managed via .env (never committed)
- Graceful error messages hide implementation details
- Gmail rate limiting handled via app password tier
- HTML + plaintext email for client compatibility

---

**Tech Stack:** React 18, Express 4, Nodemailer 6, Framer Motion, Gmail SMTP
**Deployment Model:** SPA frontend + serverless backend function
**Repository:** Portfolio-react (monorepo structure)
