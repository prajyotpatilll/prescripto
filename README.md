# DevInsta - Developer Community Platform

## 🚀 Project Overview
DevInsta is a developer community platform where users can create portfolio profiles, manage projects, and add live & GitHub links. Users can view other developers' profiles and projects, making it a great way to showcase skills and network.

---

## 📌 Tech Stack
### **Frontend:**
- React.js (with Vite)
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify

### **Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Cloudinary (for image uploads)
- JSON Web Token (JWT) for authentication
- Multer (for file uploads)
- Validator & bcrypt

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/your-username/DevInsta.git
 cd DevInsta
```

### 2️⃣ Install Dependencies
#### Backend Setup
```sh
 cd backend
 npm install
```

#### Frontend Setup
```sh
 cd frontend
 npm install
```

### 3️⃣ Configure Environment Variables

#### Backend (`backend/.env`)
Create a `.env` file inside the `backend` folder and add the following:
```env
MONGODB_URL=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
JWT_SECREATE_TOKEN=your_jwt_secret_key
```

#### Frontend (`frontend/.env`)
Create a `.env` file inside the `frontend` folder and add:
```env
VITE_BACKEND_URL=http://localhost:5000
```
*For production, update the URL with your deployed backend URL.*

---

### 4️⃣ Run the Project
#### Start the Backend Server
```sh
 cd backend
 npm run server
```
Backend should run on `http://localhost:5000`

#### Start the Frontend
```sh
 cd frontend
 npm run dev
```
Frontend should run on `http://localhost:5173`

