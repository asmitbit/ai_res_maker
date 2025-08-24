This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

📝 AI Resume Maker

An AI-powered Resume Builder built with Next.js, React, Clerk Authentication, MongoDB, and Google Gemini AI. This application allows users to create, edit, and download professional resumes instantly, powered by AI for content suggestions and formatting.

🚀 Features

🔐 User Authentication with Clerk – Secure login/signup with session management.

📄 Resume Creation & Editing – Input personal details, work experience, education, and skills.

🤖 AI Integration with Google Gemini – Get AI-powered resume content suggestions.

💾 MongoDB Database – Store user resumes persistently with flexible schema.

📤 Download Resume – Export resumes in PDF format.

🎨 Modern UI with TailwindCSS & Shadcn UI – Clean, responsive, and professional design.

🌐 Deployed on Vercel – Fast, production-ready hosting.

🛠️ Tech Stack

Frontend:

Next.js

React.js

TailwindCSS

Shadcn UI

Backend & APIs:

Next.js API Routes

Clerk for Authentication

Google Gemini AI for content generation

Database:

MongoDB (via Mongoose ODM)

Deployment:

Vercel

📂 Project Structure
ai-resume-maker/
│── public/               # Static assets
│── src/
│   ├── app/              # Next.js app directory
│   │   ├── api/          # API routes (backend logic)
│   │   ├── dashboard/    # Protected routes for resume creation
│   │   ├── page.js       # Landing page
│   │   └── layout.js     # Root layout
│   ├── components/       # Reusable UI components
│   ├── lib/              # Utility functions (e.g., db connection)
│   │   └── db.js
│   ├── models/           # Mongoose models (e.g., Resume schema)
│   └── middleware.js     # Clerk authentication middleware
│── .env.local            # Environment variables
│── package.json
│── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/ai-resume-maker.git
cd ai-resume-maker

2️⃣ Install dependencies
npm install

3️⃣ Setup Environment Variables

Create a .env.local file in the root directory and add:

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# MongoDB
DATABASE=mongodb+srv://your-username:your-password@cluster.mongodb.net/resumeDB

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

4️⃣ Run the development server
npm run dev


Open http://localhost:3000
 in your browser.

5️⃣ Build for production
npm run build
npm start

🔑 Authentication (Clerk)

Authentication is handled by Clerk. The middleware.js file ensures that protected routes like /dashboard and /api/resume are only accessible by authenticated users. Clerk automatically manages JWTs, sessions, and tokens, so developers don’t need to implement custom token handling.

🗄️ Database (MongoDB + Mongoose)

MongoDB is used as the database, with Mongoose handling schemas and queries.
Example db.js:

import mongoose from "mongoose";

export default async function db() {
  if (mongoose.connections.readyState >= 1) return;
  
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("✅ Connected to database");
  } catch (err) {
    console.log("❌ DB Connection Error", err);
  }
}

🤖 AI Integration (Google Gemini)

The app integrates Google Gemini AI to generate personalized resume content. When a user inputs their skills or role, Gemini suggests better phrasing or tailored achievements, making resumes more impactful.




📌 Future Enhancements

🌍 Multi-language support

📊 Resume analytics (ATS score checking)

🎨 More resume templates

📤 One-click LinkedIn profile import

👨‍💻 Author

Asmit Adesh

🎓 4th Year Undergraduate at BIT Mesra, Ranchi

💡 Passionate about AI, ML, and Full-Stack Development




