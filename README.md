BLOGHIVE

A full-stack blogging platform with a strong focus on backend development. Built with Node.js, Express, MongoDB, and EJS, this project allows users to create, read, and comment on blogs with authentication and file upload support.
```
Features----------

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
├── models/
│   ├── blog.js
│   ├── comment.js
├── routes/
│   ├── blog.js
│   ├── authentication.js
├── views/
│   ├── addBlog.ejs
│   ├── blog.ejs
│   ├── home.ejs
│   ├── nav.ejs
│   ├── head.ejs
│   ├── script.ejs
├── public/
│   └── uploads/
├── index.js
├── package.json
├── .gitignore
└── README.md
------------------------------------------------------------------------------------------------------------------------------
Server will start at 👉 http://localhost:PORT
```
