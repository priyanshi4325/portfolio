# Portfolio: Full-Stack Command Center 🚀

A retro-future terminal portfolio that bridges a modern React frontend with a robust Django backend.

## 🏗 System Architecture
- **Frontend:** React + Tailwind CSS (Hosted on Netlify)
- **Backend:** Django + Django REST Framework (Hosted on Render)
- **Database:** PostgreSQL (Neon.tech)
- **State Management:** Framer Motion for terminal animations

## 📡 The Data Uplink
The system uses a custom-built API to handle user inquiries:
1.  **UI:** User enters commands/messages in the React terminal.
2.  **API:** React dispatches an asynchronous `POST` request to the Django backend.
3.  **Persistence:** Django validates the payload and writes to the PostgreSQL database.

## 🚀 Deployment Status
- **UI:** Live on Netlify
- **API:** Live on Render
- **DB:** Live on Neon
