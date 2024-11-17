# Journalistic Website

A dynamic website for tracking currency exchange rates, fetching the latest news, and viewing weather updates, built with Node.js, Express, and MongoDB.

---

## **Project Features**

1. **Authentication and Authorization**  
   - **User Registration:**  
     - Secure password hashing with bcrypt.  
     - Two-factor authentication (2FA) using authenticator apps.  
     - Welcome email upon registration via Nodemailer.  
   - **User Login:**  
     - Role-based access control (Admin, Editor).  
     - Secure session management with cookies.  

2. **Portfolio Management (CRUD)**  
   - Admin users can create, update, and delete portfolio items.  
   - Editors can create but cannot modify or delete existing items.  

3. **API Integration**  
   - Currency rates fetched from the **Currency API**.  
   - News articles fetched from the **News API**.  
   - Weather updates fetched from the **Weather API**.

4. **Responsive Design**  
   - Fully responsive and user-friendly interface using EJS and CSS.

5. **Notifications**  
   - Email notifications for specific events (e.g., failed login attempts, CRUD actions).

---

## **Setup Instructions**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [MongoDB](https://www.mongodb.com/) (Atlas or Local instance)  
- An account on APIs:
  - **Currency API Key:** `eb763fa09b58fa3dc887a6b0`
  - **News API Key:** `7d7d388eab7f473fb9d838ec22f8705b`
  - **Weather API Key:** `d0b8476e4aee8c0c3eda90679dc3406c`

---

### **Installation**

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>

project structure
.
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
├── views/
│   ├── index.ejs
│   ├── dashboard.ejs
│   ├── currency.ejs
│   ├── news.ejs
│   ├── weather.ejs
├── routes/
│   ├── api.js
│   ├── auth.js
├── models/
│   ├── User.js
├── .env
├── app.js
├── package.json
└── README.md

Pages
Home Page

Dashboard

Currency Rates

News

Weather
