# Express User API Project

Author: Roland

---

## Live API

You can access the deployed API here:

https://express-user-api-2aws.onrender.com

Example endpoint:
https://express-user-api-2aws.onrender.com/users

Note:
The live version may reset data due to free hosting limitations.

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

---

### Get User by ID
GET /users/:id  
Example: http://localhost:3000/users/1

---

### Create User
POST /users  

Example Body:
```json
{
  "name": "Roland"
}
