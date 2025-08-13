# QuickBlog - AI-Powered Blogging Platform

A modern, full-stack blogging platform built with React, Node.js, and MongoDB. QuickBlog features AI-powered content generation using Google's Gemini AI, real-time commenting, and a comprehensive admin dashboard.

## 🌐 Live Demo

[https://quickblog-ai.vercel.app/](https://quickblog-ai.vercel.app/)


## ✨ Features

### For Readers
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Rich Blog Content**: Markdown support with syntax highlighting
- **Real-time Comments**: Interactive commenting system
- **Newsletter Subscription**: Stay updated with new blog posts
- **Search & Filter**: Easy navigation through blog posts

### For Admins
- **AI-Powered Content Generation**: Generate blog content using Google Gemini AI
- **Rich Text Editor**: WYSIWYG editor with Quill.js
- **Image Management**: Upload and manage images with ImageKit integration
- **Comment Management**: Moderate and manage user comments
- **Dashboard Analytics**: Overview of blog performance and engagement
- **Secure Authentication**: JWT-based admin authentication

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and context
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Quill.js** - Rich text editor
- **React Hot Toast** - Toast notifications
- **Motion** - Animation library
- **Marked** - Markdown parser

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **Google Gemini AI** - AI content generation
- **ImageKit** - Image upload and management

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Google Gemini AI API key
- ImageKit account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd QuickBlog
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Variables**

   Create `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_gemini_api_key
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   ```

5. **Run the Application**

   **Backend:**
   ```bash
   cd backend
   npm run server
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

   The application will be available at:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

## 📁 Project Structure

```
QuickBlog/
├── backend/
│   ├── configs/          # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── server.js        # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React context
│   │   └── assets/      # Static assets
│   └── public/          # Public assets
└── README.md
```

## 🔧 API Endpoints

### Admin Routes
- `POST /api/admin/login` - Admin authentication
- `POST /api/admin/add-blog` - Create new blog post
- `GET /api/admin/blogs` - Get all blogs (admin)
- `PUT /api/admin/blogs/:id` - Update blog post
- `DELETE /api/admin/blogs/:id` - Delete blog post
- `GET /api/admin/comments` - Get all comments
- `DELETE /api/admin/comments/:id` - Delete comment

### Blog Routes
- `GET /api/blogs` - Get all published blogs
- `GET /api/blogs/:id` - Get specific blog
- `POST /api/blogs/:id/comments` - Add comment to blog
- `GET /api/blogs/:id/comments` - Get blog comments

## 🚀 Deployment

### Frontend (Vercel)
The frontend is deployed on Vercel with automatic deployments from the main branch.

### Backend (Render)
The backend is deployed on Render as a web service with the following configuration:
- Build Command: `npm install`
- Start Command: `npm start`
- Environment variables configured in Render dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



QuickBlog - A modern blogging platform with AI-powered content generation.

---

**Note:** Make sure to set up all required environment variables and API keys before running the application locally or deploying to production.
