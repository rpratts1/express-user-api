// ============================================================
// IMPORT MODULES
// ============================================================

// Import Express framework so we can build a web server
const express = require('express');

// Import File System module so we can read and write files
const fs = require('fs');


// ============================================================
// CREATE APP
// ============================================================

// Create the Express application
const app = express();

// Set the port number the server will listen on
const PORT = 3000;


// ============================================================
// FILE STORAGE SETUP
// ============================================================

// Create an empty users array in case the file is missing or broken
let users = [];

// Try to load saved users from users.json
try {
    // Read the users.json file as text
    const data = fs.readFileSync('users.json', 'utf8');

    // Convert JSON text into a JavaScript array
    users = JSON.parse(data);
} catch (error) {
    // If the file cannot be read, just start with an empty array
    users = [];
}


// ============================================================
// MIDDLEWARE
// ============================================================

// This lets Express understand JSON sent in POST and PUT requests
app.use(express.json());


// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Check whether a name is valid
function isValidName(name) {
    // Name must be text and cannot be empty after trimming spaces
    return typeof name === 'string' && name.trim().length > 0;
}

// Save the current users array into users.json
function saveUsersToFile() {
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
}


// ============================================================
// BASIC TEST ROUTES
// ============================================================

// Home route
app.get('/', (req, res) => {
    res.send('Hello Roland, your Express server is working!');
});

// About route
app.get('/about', (req, res) => {
    res.send('This is the About page for the Express test app.');
});

// API route with query parameter support
app.get('/api', (req, res) => {
    // Read name from URL like ?name=Roland
    // If no name is given, use "Guest"
    const name = req.query.name || 'Guest';

    // Return JSON response
    res.json({
        name: name,
        role: 'Developer',
        message: `Hello ${name}, your API is working!`
    });
});


// ============================================================
// USER ROUTES - READ ALL USERS
// ============================================================

// GET all users
app.get('/users', (req, res) => {
    // Return the whole users array
    res.json(users);
});


// ============================================================
// USER ROUTES - READ ONE USER
// ============================================================

// GET one user by ID
app.get('/users/:id', (req, res) => {
    // Convert the ID from the URL into a number
    const id = parseInt(req.params.id);

    // Look for a user with that matching ID
    const user = users.find(u => u.id === id);

    // If not found, return an error
    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    // If found, return the user
    res.json(user);
});


// ============================================================
// USER ROUTES - CREATE USER
// ============================================================

// POST create a new user
app.post('/users', (req, res) => {
    // Pull name from the JSON body
    const { name } = req.body;

    // Validate the name
    if (!isValidName(name)) {
        return res.status(400).json({
            message: 'Invalid name. Please provide a non-empty text value.'
        });
    }

    // Remove extra spaces from beginning and end
    const trimmedName = name.trim();

    // Check for duplicate names, ignoring uppercase/lowercase
    const existingUser = users.find(
        u => u.name.toLowerCase() === trimmedName.toLowerCase()
    );

    // If duplicate found, return an error
    if (existingUser) {
        return res.status(409).json({
            message: 'User already exists.'
        });
    }

    // Create the new user object
    const newUser = {
        // If users exist, take last ID and add 1
        // If not, start at 1
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        name: trimmedName
    };

    // Add the new user to the array
    users.push(newUser);

    // Save the updated array to users.json
    saveUsersToFile();

    // Return success response
    res.status(201).json({
        message: `User ${trimmedName} added successfully!`,
        user: newUser
    });
});


// ============================================================
// USER ROUTES - UPDATE USER
// ============================================================

// PUT update an existing user
app.put('/users/:id', (req, res) => {
    // Read ID from URL
    const id = parseInt(req.params.id);

    // Read name from request body
    const { name } = req.body;

    // Validate the name
    if (!isValidName(name)) {
        return res.status(400).json({
            message: 'Invalid name. Please provide a non-empty text value.'
        });
    }

    // Find the user with matching ID
    const user = users.find(u => u.id === id);

    // If user not found, return error
    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    // Remove extra spaces
    const trimmedName = name.trim();

    // Check if another user already has this same name
    const duplicateUser = users.find(
        u =>
            u.id !== id &&
            u.name.toLowerCase() === trimmedName.toLowerCase()
    );

    // If duplicate exists, return error
    if (duplicateUser) {
        return res.status(409).json({
            message: 'Another user with that name already exists.'
        });
    }

    // Update the user's name
    user.name = trimmedName;

    // Save updated users array to file
    saveUsersToFile();

    // Return success response
    res.json({
        message: 'User updated successfully',
        user: user
    });
});


// ============================================================
// USER ROUTES - DELETE USER
// ============================================================

// DELETE remove a user by ID
app.delete('/users/:id', (req, res) => {
    // Read ID from URL
    const id = parseInt(req.params.id);

    // Find the index of the user in the array
    const userIndex = users.findIndex(u => u.id === id);

    // If not found, return error
    if (userIndex === -1) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    // Remove the user from the array
    const deletedUser = users.splice(userIndex, 1);

    // Save updated users array to file
    saveUsersToFile();

    // Return success response
    res.json({
        message: 'User deleted successfully',
        user: deletedUser[0]
    });
});


// ============================================================
// START SERVER
// ============================================================

// Start the server and listen on the chosen port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});