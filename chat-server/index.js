// const express = require("express");
// const http = require("http");
// const { Server } = require("socket.io");
// const cors = require("cors");

// const app = express();
// app.use(cors());

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("User connected:", socket.id);

//   socket.on("send_message", (data) => {
//     io.emit("receive_message", data); // broadcast to everyone
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

// server.listen(3001, () => {
//   console.log("Server running on port 3001");
// });

// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let captchaStore = {};

// Generate random CAPTCHA
function generateCaptcha(length = 6) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < length; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

// Test route
app.get("/", (req, res) => res.send("Backend is running"));

// GET CAPTCHA
app.get("/api/captcha", (req, res) => {
  const id = Date.now().toString();
  const captcha = generateCaptcha();
  captchaStore[id] = captcha;
  res.json({ id, captcha });
});

// Verify CAPTCHA
app.post("/api/verify-captcha", (req, res) => {
  const { id, userInput } = req.body;

  if (!captchaStore[id]) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid CAPTCHA ID" });
  }

  if (captchaStore[id] === userInput) {
    delete captchaStore[id];
    return res.json({
      success: true,
      message: "CAPTCHA verified successfully",
    });
  } else {
    return res
      .status(400)
      .json({ success: false, message: "Incorrect CAPTCHA" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
