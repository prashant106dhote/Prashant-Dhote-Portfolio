# Prashant Dhote — Full Stack Developer Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide (client) and Node.js + Express + Nodemailer (server).
Contact form se message seedha aapke email par aata hai. Is project mein database ki zaroorat nahi hai.

## Run (npm run dev)
```bash
npm run install:all          # ek baar
cp server/.env.example server/.env   # aur values bharo (neeche dekho)
npm run dev                  # client: http://localhost:5173  |  server: http://localhost:5000
```

## Email setup (Gmail)
1. Google Account → Security → 2-Step Verification ON karo.
2. "App passwords" se ek 16-character password banao.
3. `server/.env` mein: `SMTP_USER=aapka@gmail.com`, `SMTP_PASS=<app password>`, `CONTACT_TO_EMAIL=aapka@gmail.com`.
4. `MAIL_DRY_RUN=true` rakhoge to email bhejne ki jagah server console mein print hoga (testing ke liye). Asli email ke liye isse hata do ya `false` karo.

SMTP password sirf server ke `.env` mein rehta hai, frontend mein kabhi nahi jaata.

## Content badalna
- Sab text/links/projects/certificates: `client/src/data.js` (jahan `""` hai wo placeholder hai).
- Resume: apna PDF `client/public/Prashant_Dhote_Resume.pdf` naam se rakho.
- Project screenshots: `client/public/projects/` mein image daalo aur `data.js` mein `image: "/projects/naam.png"` likho.
- Apni photo chahiye to `Hero.jsx` ke `HeroVisual` ko photo se replace kar do.

## Deploy
- Client: Vercel/Netlify (`client`, build `npm run build`, env `VITE_API_URL=<server url>`).
- Server: Render/Railway (`server`, env: `SMTP_*`, `CONTACT_TO_EMAIL`, `CLIENT_ORIGIN=<client url>`).
