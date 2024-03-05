"use strict";

// server.js
var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var nodemailer = require('nodemailer');

var uuid = require('uuid');

var app = express(); // Middleware

app.use(bodyParser.json()); // MongoDB connection

mongoose.connect('mongodb://localhost:27017/campus_placement', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  return console.log('Connected to MongoDB');
}); // User schema

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    "default": false
  },
  verificationToken: {
    type: String
  }
});
var User = mongoose.model('User', userSchema); // Nodemailer configuration

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    // Your Gmail address
    pass: 'your-password' // Your Gmail password

  }
}); // Routes

app.post('/register', function _callee(req, res) {
  var _req$body, email, password, username, verificationToken, user, mailOptions;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, email = _req$body.email, password = _req$body.password, username = _req$body.username;
          verificationToken = uuid.v4();
          user = new User({
            email: email,
            password: password,
            username: username,
            verificationToken: verificationToken
          });
          _context.next = 6;
          return regeneratorRuntime.awrap(user.save());

        case 6:
          // Send verification email
          mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Verify your email address',
            html: "<p>Hi ".concat(username, ",</p><p>Please click <a href=\"http://localhost:8000/verify/").concat(verificationToken, "\">here</a> to verify your email address.</p>")
          };
          _context.next = 9;
          return regeneratorRuntime.awrap(transporter.sendMail(mailOptions));

        case 9:
          res.status(201).json({
            message: 'Registration successful. Please verify your email address.'
          });
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Registration failed:', _context.t0);
          res.status(500).json({
            error: 'Registration failed. Please try again.'
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
app.get('/verify/:token', function _callee2(req, res) {
  var token, user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = req.params.token;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOneAndUpdate({
            verificationToken: token
          }, {
            $set: {
              isVerified: true
            }
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            error: 'Invalid verification token.'
          }));

        case 7:
          res.redirect('http://localhost:3000/login'); // Redirect to login page after successful verification

          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error('Verification failed:', _context2.t0);
          res.status(500).json({
            error: 'Verification failed. Please try again.'
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
app.post('/login', function _callee3(req, res) {
  var _req$body2, email, password, user;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email,
            password: password
          }));

        case 4:
          user = _context3.sent;

          if (!(!user || !user.isVerified)) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(401).json({
            error: 'Invalid email or password. Please try again.'
          }));

        case 7:
          res.status(200).json({
            message: 'Login successful.'
          });
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error('Login failed:', _context3.t0);
          res.status(500).json({
            error: 'Login failed. Please try again.'
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  return console.log("Server is running on port ".concat(PORT));
});