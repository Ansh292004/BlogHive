# BLOGHIVE

A full-stack blogging platform with a strong focus on backend development. Built with Node.js, Express, MongoDB, and EJS, this project allows users to create, read, and comment on blogs with authentication and file upload support.
```
Features------------

User authentication (signup/login/logout)

Create, update, and delete blogs

Add comments to blogs

Upload blog cover images with Multer

MongoDB models for users, blogs, and comments

Clean separation of routes, models, and views
-----------------------------------------------------------------------------------------------------------------------------
Tech Stack----------

Backend: Node.js, Express.js, MongoDB (Mongoose)

Frontend: EJS templates, Bootstrap (for styling)

File Uploads: Multer

Authentication: JWT (can use passport js)
------------------------------------------------------------------------------------------------------------------------------
Setup & Installation----------
# Clone the repo
git clone https://github.com/Ansh292004/BlogHive.git
cd BlogHive

# Install dependencies
npm install

# Setup environment variables (create a .env file)
PORT=your local machine available ports
MONGODB_URI=your_mongo_connection_string
SESSION_SECRET=your_secret_key

# Run the server
npm start
------------------------------------------------------------------------------------------------------------------------------
## Project Structure

BlogHive/                     # Root folder of the project
│
├── middlewares/              # Custom middlewares
│   └── authentication.js
│
├── models/                   # Database models (Mongoose schemas)
│   ├── blog.js
│   ├── comment.js
│   └── user.js
│
├── public/                   # Static files
│   ├── images/               
│   └── uploads/          
│
├── routes/                   # API routes
│   ├── blog.js
│   └── user.js
│
├── service/                 
│   └── auth.js
│
├── views/                    # EJS views
│   ├── partials/            
│   │   ├── nav.ejs
│   │   ├── script.ejs
│   │   └── head.ejs
│   │
│   ├── addBlog.ejs
│   ├── blog.ejs
│   ├── home.ejs
│   ├── signin.ejs
│   └── signup.ejs            
│
├── .gitignore                # Ignore sensitive files & folders (e.g. .env, node_modules, uploads)
├── index.js                  
├── package.json              # Project metadata and dependencies
└── server.js                 # Main entry file
------------------------------------------------------------------------------------------------------------------------------
Server will start at 👉 http://localhost:PORT
```
