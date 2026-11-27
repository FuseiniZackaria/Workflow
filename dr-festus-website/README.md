# Dr. Festus Mechanical & Trading Ventures: Website

React (Vite) + Tailwind CSS frontend, Node.js + Express backend. All plain JavaScript.

## Run it in VS Code
Requires Node.js 18 or newer.

```bash
npm install        # installs root, client and server dependencies
npm run dev        # starts API (http://localhost:5000) and site (http://localhost:5173)
```
Open http://localhost:5173.

## Production
```bash
npm start          # builds the client, then Express serves site + API on http://localhost:5000
```

## Edit the content
- Business details, services, gallery and parts list: `client/src/data/site.js`
- Photos and video: `client/public/images`, `client/public/video`
- Colours and fonts: `client/tailwind.config.js`

## Booking and contact forms
Submissions are saved to `server/data/submissions.json`.
To also get them by email, copy `server/.env.example` to `server/.env` and fill in the SMTP settings.
To view submissions in a browser, set `ADMIN_KEY=somesecret` in `server/.env`, then open `/api/submissions?key=somesecret`.
