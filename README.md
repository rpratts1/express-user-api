# Express User API Project

Author: Roland

---

## Live API

You can access the deployed API here:

https://express-user-api-2aws.onrender.com

Base URL:  
https://express-user-api-2aws.onrender.com

Example endpoint:  
https://express-user-api-2aws.onrender.com/users

API test route:  
https://express-user-api-2aws.onrender.com/api?name=Roland

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

- Create new users → `POST /users`
- Retrieve all users → `GET /users`
- Retrieve a user by ID → `GET /users/:id`
- Update user information → `PUT /users/:id`
- Delete users → `DELETE /users/:id`
- Input validation prevents empty or missing names
- Duplicate user prevention is case-insensitive
- File-based data storage using JSON

---

## Technologies Used

- Node.js → https://nodejs.org/
- Express.js → https://expressjs.com/
- JavaScript
- JSON → https://www.json.org/json-en.html
- Visual Studio Code → https://code.visualstudio.com/
- Windows 11 → https://www.microsoft.com/windows/windows-11
- PowerShell → https://learn.microsoft.com/powershell/
- Thunder Client → https://www.thunderclient.com/
- Render → https://render.com/

---

## Project Files

### `server.js`
Main application file containing:
- Express setup
- Routes
- Validation
- File reading and writing
- CRUD operations

### `users.json`
Stores the saved users in JSON format.

### `package.json`
Stores project metadata and dependencies.

### `.gitignore`
Prevents unnecessary files like `node_modules` from being uploaded.

---

## API Endpoints

### Base URL (Local)
`http://localhost:3000`

### Base URL (Live)
`https://express-user-api-2aws.onrender.com`

### Home Route
`GET /`  
Example: `http://localhost:3000/`

### About Route
`GET /about`  
Example: `http://localhost:3000/about`

### Get All Users
`GET /users`  
Example: `http://localhost:3000/users`

### Get User by ID
`GET /users/:id`  
Example: `http://localhost:3000/users/1`

### Create User
`POST /users`

Example body:
```json
{
  "name": "Roland"
}
```

---

These improvements will be implemented as part of ongoing development.

## Future Improvements

To continue improving this project and make it more production-ready, the following enhancements are planned:

### Major Planned Upgrades
- Implement MongoDB to replace JSON file storage for better scalability and persistence
- Add JWT (JSON Web Token) authentication for secure login and protected routes

### Backend Enhancements
- Use environment variables with `.env` for configuration management
- Add centralized error handling middleware
- Improve validation using libraries like Joi or Express Validator

### Security Improvements
- Implement password hashing using bcrypt
- Add rate limiting to prevent abuse
- Use Helmet to secure HTTP headers
- Enable proper CORS configuration

### Performance & Scalability
- Optimize data handling with database indexing
- Add caching for frequently requested data
- Prepare application for scaling using Docker

### Developer Experience
- Add logging using Morgan or Winston
- Write unit and integration tests using Jest or Mocha
- Document API endpoints using Swagger or Postman collections

### Frontend Integration
- Build a frontend interface using React
- Create a dashboard to manage users
- Convert the project into a full-stack application

### Deployment & DevOps
- Set up CI/CD pipelines for automated deployment
- Add monitoring and uptime tracking
- Deploy using cloud services like AWS or Azure