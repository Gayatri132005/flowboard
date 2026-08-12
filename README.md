# ThinkBuild Technical Assessment – FlowBoard

A full-stack MERN technical assessment project featuring:
- Responsive SaaS landing page
- Login and Signup
- Client + server validation
- JWT authentication
- MongoDB user storage
- Protected dashboard
- Responsive UI
- Clean component-based React code

## Tech Stack
Frontend: React + Vite + React Router + Axios
Backend: Node.js + Express + MongoDB + Mongoose + JWT + bcryptjs

## 1. Requirements
- Node.js 18+
- MongoDB local installation OR MongoDB Atlas

## 2. Run backend
```bash
cd server
npm install
copy .env.example .env
npm run dev
```

For PowerShell, if `copy` doesn't work:
```powershell
Copy-Item .env.example .env
```

Edit `.env`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/flowboard
JWT_SECRET=change_this_to_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

## 3. Run frontend
Open a second terminal:
```bash
cd client
npm install
npm run dev
```

Open the URL shown by Vite, normally:
http://localhost:5173

## 4. Features to demonstrate
1. Home page
2. Responsive navigation
3. Signup validation
4. Successful registration in MongoDB
5. Login validation
6. JWT authentication
7. Redirect to dashboard
8. Logout
9. Responsive mobile layout

## Suggested screen-recording flow
- Start on Home
- Show responsive layout by resizing browser
- Click Get Started
- Create an account
- Show validation by entering an invalid email/password
- Log in with the created account
- Show dashboard
- Refresh dashboard to demonstrate token persistence
- Logout
- Show GitHub repository structure

## GitHub
Create a new repository and push the complete `thinkbuild_assessment` folder.
Do NOT commit `.env`.
