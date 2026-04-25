// =====================================================
// IMPORT MODULES
// =====================================================

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


// =====================================================
// CREATE EXPRESS APP
// =====================================================

const app = express();


// =====================================================
// SET PORT
// =====================================================

const PORT = process.env.PORT || 3000;


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(express.json());


// =====================================================
// CONNECT TO MONGODB
// =====================================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });


// =====================================================
// CREATE USER SCHEMA
// =====================================================

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);


// =====================================================
// CREATE USER MODEL
// =====================================================

const User = mongoose.model("User", userSchema);


// =====================================================
// HOME ROUTE
// =====================================================

app.get("/", (req, res) => {
  res.send("Hello Roland, your Express + MongoDB server is working!");
});


// =====================================================
// ABOUT ROUTE
// =====================================================

app.get("/about", (req, res) => {
  res.send("This is the About page for the Express MongoDB API.");
});


// =====================================================
// API TEST ROUTE
// =====================================================

app.get("/api", (req, res) => {
  const name = req.query.name || "Guest";

  res.json({
    name: name,
    role: "Developer",
    message: `Hello ${name}, your API is working!`
  });
});


// =====================================================
// GET ALL USERS
// =====================================================

app.get("/users", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: 1 });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error getting users",
      error: error.message
    });
  }
});


// =====================================================
// GET ONE USER BY ID
// =====================================================

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid user ID format"
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error getting user",
      error: error.message
    });
  }
});


// =====================================================
// CREATE USER
// =====================================================

app.post("/users", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({
        message: "Invalid name. Please provide a non-empty text value."
      });
    }

    const cleanName = name.trim();

    const existingUser = await User.findOne({
      name: { $regex: `^${cleanName}$`, $options: "i" }
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists."
      });
    }

    const newUser = new User({
      name: cleanName
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      message: `User ${savedUser.name} added successfully!`,
      user: savedUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message
    });
  }
});


// =====================================================
// UPDATE USER
// =====================================================

app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid user ID format"
      });
    }

    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({
        message: "Invalid name. Please provide a non-empty text value."
      });
    }

    const cleanName = name.trim();

    const duplicateUser = await User.findOne({
      _id: { $ne: id },
      name: { $regex: `^${cleanName}$`, $options: "i" }
    });

    if (duplicateUser) {
      return res.status(409).json({
        message: "Another user already has this name."
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name: cleanName },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      error: error.message
    });
  }
});


// =====================================================
// DELETE USER
// =====================================================

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid user ID format"
      });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
      user: deletedUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      error: error.message
    });
  }
});


// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});