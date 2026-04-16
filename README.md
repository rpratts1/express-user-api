# Express User API Project

Author: Roland

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

## Technologies Used

- Node.js
- Express
- JavaScript
- JSON
- Thunder Client
- Visual Studio Code

## Features

This API supports the following operations:

- Create a user with `POST /users`
- Read all users with `GET /users`
- Read one user by ID with `GET /users/:id`
- Update a user with `PUT /users/:id`
- Delete a user with `DELETE /users/:id`

Additional features:
- Rejects empty names
- Rejects missing names
- Rejects duplicate names ignoring uppercase/lowercase
- Saves user data to `users.json`

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

## Installation Steps

1. Open the project folder in Visual Studio Code
2. Open the terminal
3. Run:

```bash
npm install