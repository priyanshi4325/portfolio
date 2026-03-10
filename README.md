# 🚀 Portfolio: Full-Stack Command Center

A retro-future terminal portfolio that bridges a modern React frontend with a robust Django backend. Built to simulate a command-driven interface while delivering real production-grade functionality.

---

## 🔗 Live System

* **Live Demo (UI):** https://priyanshi-dass.netlify.app  
* **Backend API:** https://portfolio-backend-5zvg.onrender.com  
* **Database:** Neon PostgreSQL

---

## 🏗 System Architecture

**Frontend:** React + Tailwind CSS
**Backend:** Django + Django REST Framework
**Database:** PostgreSQL (Neon.tech)
**Animations:** Framer Motion
**Deployment:** Netlify (Frontend), Render (Backend)

---

## ✨ Features

* 🖥 Interactive terminal-style user interface
* ⚡ Real-time message submission to backend
* 🔌 RESTful API built with Django REST Framework
* 🎨 Fully responsive design using Tailwind CSS
* 🎞 Smooth terminal animations with Framer Motion
* 🗄 Secure data persistence with PostgreSQL
* ☁️ Production deployment on Netlify + Render

---

## 📡 The Data Uplink (How It Works)

1. **User Input:** Visitor enters commands/messages in the React terminal UI.
2. **API Request:** React sends an asynchronous POST request to the Django backend.
3. **Validation:** Django REST Framework validates the incoming payload.
4. **Persistence:** Clean data is stored securely in PostgreSQL (Neon).
5. **Response:** Success feedback is returned to the frontend terminal.

---

## 🛠 Local Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2️⃣ Frontend Setup

```bash
npm install
npm run dev
```

Frontend runs on: `http://localhost:5175`

---

### 3️⃣ Backend Setup

```bash
cd portfolio-backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs on: `http://localhost:8000`

---

## 📂 Project Structure

```
portfolio/
├── frontend/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
├── portfolio-backend/ # Django backend
│ ├── core/
│ ├── contacts/
│ └── manage.py
└── README.md
```

---

## 🎯 Why This Project Matters

This project demonstrates end-to-end full-stack development skills:

* Frontend UI engineering
* REST API design
* Backend validation and data handling
* Database integration
* Production deployment
* Modern developer tooling

---

## 👩‍💻 Author

**Priyanshi Dass**
Full-Stack Developer | React • Django • PostgreSQL

---

## ⭐ Future Improvements

* Command history in terminal
* Authentication system
* Admin analytics dashboard
* Rate limiting for API
* Unit and integration tests

---

💡 *Built to combine creativity with production-ready engineering.*
