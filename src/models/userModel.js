import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uername: {
    type: String,
    reuired: [true, "Please provide a username"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// This creates a Mongoose model for the "users" collection in MongoDB. If there is already a model named "users," it uses that; otherwise, it creates a new model with the name "users" based on the userSchema

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User;
