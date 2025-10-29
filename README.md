# 🌐 LinkedIn-Lite

A **social media web app** built using the **MERN stack (MongoDB, Express, React, Node.js)** — inspired by LinkedIn, but lightweight and minimal.  
Users can **sign up, log in, create posts with images, and view posts** shared by others.

---

## 🚀 Live Project

- 🔗 **Frontend (Live Site):** [https://linkedf.netlify.app/](https://linkedf.netlify.app/)
- 🔗 **Backend (API):** [https://linkedin-lite-grhu.onrender.com/](https://linkedin-lite-grhu.onrender.com/)
- 💻 **GitHub Repository (Full Code):** [https://github.com/8zeeshan1/LinkedIn-Lite](https://github.com/8zeeshan1/LinkedIn-Lite)

---

## 🧠 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React (Vite), Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Cloud Storage | AWS S3 |
| Authentication | JWT + bcrypt |
| Deployment | Netlify (Frontend), Render (Backend) |

---

## ✨ Features Implemented

✅ **User Authentication**  
- Signup and login with secure password encryption (bcrypt)  
- JWT-based authentication for session handling  

✅ **Post Creation and Viewing**  
- Create posts with optional image uploads  
- View all user posts in a clean feed layout  
- Images stored securely on AWS S3  

✅ **Responsive Design**  
- Fully responsive and mobile-friendly UI  
- Built using Tailwind CSS and React components  

✅ **Additional Enhancements** *(optional but implemented)*  
- Real-time display of newly created posts  
- Cloud-based image handling (no local storage)

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/8zeeshan1/LinkedIn-Lite.git
cd LinkedIn-Lite
2️⃣ Setup Backend
bash
Copy code
cd backend
npm install
Create a .env file inside backend/:
bash
Copy code
PORT=8000
MONGO_URI=your_mongodb_connection_string
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_bucket_name
AWS_REGION=ap-south-1
JWT_SECRET=your_jwt_secret
Run the backend server:
bash
Copy code
npm start
Backend runs on: http://localhost:8000

3️⃣ Setup Frontend
bash
Copy code
cd ../frontend
npm install
Create a .env file inside frontend/:
bash
Copy code
VITE_API_URL=http://localhost:8000/api
Run the frontend app:
bash
Copy code
npm run dev
Frontend runs on: http://localhost:5173

🧩 Folder Structure
css
Copy code
LinkedIn-Lite/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── utils/
│   │   └── index.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── .env
📦 Deployment Details
Service	Platform	URL
Frontend	Netlify	https://linkedf.netlify.app/
Backend	Render	https://linkedin-lite-grhu.onrender.com/
Database	MongoDB Atlas	Cloud Database
Storage	AWS S3	For images

💡 Evaluation Highlights
Criteria	Status
Working Signup/Login	✅ Implemented
Create and View Posts	✅ Implemented
Clean & Responsive UI	✅ Implemented
Extra Features (Image Uploads, Cloud Storage)	✅ Added

👨‍💻 Developer
MOHD Zeeshan Quraishi
🎓 B.Tech CSE | Bundelkhand Institute of Engineering & Technology, Jhansi
💼 LinkedIn
💻 GitHub
📧 zq8281@gmail.com

📜 License
This project is licensed under the MIT License — free to use, modify, and share.

🏁 Live Preview
🌐 Website: https://linkedf.netlify.app/
📡 API: https://linkedin-lite-grhu.onrender.com/api

yaml
Copy code

---

Would you like me to also add a **short “Project Demo” section** (with placeholders for screenshots or a Loom demo link) so your README looks even better for judges/reviewers?











ChatGPT can make mistakes. Check important info. See Cookie Preferences.
