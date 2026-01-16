# 🛒 O-mart – Local Shops Online Marketplace

O-mart is a full-stack MERN application that allows **local shop owners** to list their products and **users** to browse and order them online — inspired by **Zepto’s speed** and **Netflix-style UI**.

---

## 🚀 Features

### 👤 User
- Register & Login (JWT Authentication)
- Browse products from nearby shops
- Place orders

### 🏪 Shop Owner
- Register shop (admin approval ready)
- Add products with image upload
- Manage inventory

### 🖼️ Media
- Product image upload using **Cloudinary**

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Axios
- React Router DOM

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer + Cloudinary

---

## 📁 Project Structure

local-shop-app/
│
├── backend/
│ ├── routes/
│ ├── models/
│ ├── config/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── api/
│ │ └── App.js
│
└── README.md


---

## ⚙️ Environment Variables

Create `.env` inside `backend/`:

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret


---

## ▶️ Run Locally

### Backend
```bash
cd backend
npm install
node server.js

http://localhost:5001

cd frontend
npm install
npm start

