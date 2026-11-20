# Prashant Dhote — Full Stack Developer Portfolio

Built using React + Vite + Tailwind CSS + Framer Motion + Lucide (Client) and Node.js + Express + Nodemailer (Server).

The contact form allows visitors to send messages directly through the website. No database is required.

## Run Locally

```bash
npm run install:all
npm run dev
```

- Client: http://localhost:5173
- Server: http://localhost:5000

## Email Configuration

The contact form uses Nodemailer for email functionality.

Configure the required environment variables in the server environment before running the application.

For testing, you can enable dry-run mode to print email details in the server console instead of sending actual emails.

## Customize Content

- **Text, Links, Projects, and Certificates:** Edit `client/src/data.js`.
- **Resume:** Add your PDF as `client/public/Prashant_Dhote_Resume.pdf`.
- **Project Screenshots:** Add images to `client/public/projects/` and reference them in `data.js` using `image: "/projects/filename.png"`.
- **Profile Photo:** Replace the `HeroVisual` component in `Hero.jsx` with your own photo if desired.

## Deployment

**Client — Vercel / Netlify**
- Root Directory: `client`
- Build Command: `npm run build`
- Environment Variable: `VITE_API_URL` (your deployed server URL).

**Server — Render / Railway**
- Root Directory: `server`
- Configure the required email and frontend-origin environment variables through the hosting platform's environment settings.

**Security:** Never upload `.env` files, passwords, API keys, or private credentials to GitHub.