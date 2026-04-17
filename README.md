# Express User API Project

Author: Roland

---

## Live API

(Replace this after deployment)

Base URL:  
https://your-app-name.onrender.com

Example endpoint:  
https://your-app-name.onrender.com/users

---

## Project Overview

This project is a beginner-friendly REST API built with Node.js and Express. It supports full CRUD operations for users and stores user data in a local JSON file.

The project demonstrates:
- Express server setup
- Route creation
- Query parameters
- Route parameters
- JSON request handling
- Input validation
- Duplicate-name checking
- File-based persistence using `users.json`
- API testing with Thunder Client

---

## Features

- Create new users → POST /users
- Retrieve all users → GET /users
- Retrieve a user by ID → GET /users/:id
- Update user information → PUT /users/:id
- Delete users → DELETE /users/:id
- Input validation (prevents empty or missing names)
- Duplicate user prevention (case-insensitive)
- File-based data storage using JSON

---

## Technologies Used

- Node.js
- Express.js
- JavaScript
- JSON
- Thunder Client
- Visual Studio Code
- Render (deployment)

---

## Project Files

### server.js
Main application file containing:
- Express setup
- Routes
- Validation
- File reading and writing
- CRUD operations

### users.json
Stores the saved users in JSON format.

### package.json
Stores project metadata and dependencies.

### .gitignore
Prevents unnecessary files like node_modules from being uploaded.

---

## API Endpoints

### Base URL (Local)
http://localhost:3000

### Base URL (Live)
https://express-user-api-2aws.onrender.com

---

### Home Route
http://localhost:3000/

### About Route
http://localhost:3000/about

---

### Get All Users
GET /users  
http://localhost:3000/users

Get user by ID
http://localhost:3000/users/1

API test route
http://localhost:3000/api?name=Roland

## GitHub Repository

https://github.com/rpratts1/express-user-api

## Useful Resources

Node.js Documentation
https://nodejs.org/

Express.js Documentation
https://expressjs.com/

JSON Format Guide
https://www.json.org/json-en.html

NPM Documentation
https://www.npmjs.com/

Git Documentation
https://git-scm.com/

GitHub Platform
https://github.com/

## API Testing Tools

Thunder Client
https://www.thunderclient.com/

Postman
https://www.postman.com/

https://www.postman.com/

## Notes

Data is stored locally in users.json
IDs are auto-incremented
Duplicate user names are not allowed

## Future Improvements

Connect to a database (MongoDB or MySQL)
Add authentication
Deploy API to cloud (Render)
Add frontend interface






