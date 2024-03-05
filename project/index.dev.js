"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var bcrypt = require("bcrypt");

var nodemailer = require("nodemailer");

var UserModel = require("./models/users"); // Assuming this is correctly defined


var app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/campus", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var port = 8000; // Nodemailer transporter setup for sending emails

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    // Replace with your email
    pass: "your-email-password" // Replace with your email password

  }
}); // Endpoint for user registration

app.post("/register", function _callee(req, res) {
  var _req$body, name, email, pass, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, pass = _req$body.pass;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(UserModel.create(req.body));

        case 4:
          user = _context.sent;
          console.log("User registered:", user);
          console.log("Registration complete"); // Send verification email to the user

          _context.next = 9;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: "your-email@gmail.com",
            // Replace with your email
            to: email,
            subject: "Verify your email address",
            html: "<p>Hi ".concat(name, ",</p><p>Thank you for registering. Please verify your email address to complete the registration process.</p>")
          }));

        case 9:
          // Sending a response indicating successful registration
          res.status(200).json({
            message: "Registration successful",
            user: user
          });
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          console.error("Error occurred during registration:", _context.t0); // Sending a response indicating registration failure

          res.status(500).json({
            error: "Registration failed"
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
}); // Endpoint for user login

app.post("/login", function _callee2(req, res) {
  var _req$body2, email, pass, user, isPasswordValid;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, pass = _req$body2.pass;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(UserModel.findOne({
            email: email
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            error: "User not found"
          }));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(pass, user.pass));

        case 9:
          isPasswordValid = _context2.sent;

          if (isPasswordValid) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.status(401).json({
            error: "Invalid email or password"
          }));

        case 12:
          // If everything is correct, send a success response with user's name
          res.status(200).json({
            message: "Login successful",
            userName: user.name
          });
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](1);
          console.error("Error occurred during login:", _context2.t0);
          res.status(500).json({
            error: "Login failed"
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 15]]);
});
app.listen(port, function () {
  console.log("Server is running on port: " + port);
});