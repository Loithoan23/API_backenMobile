// Import các thư viện cần thiết
const express = require('express');
const admin = require('firebase-admin');
const dotenv = require('dotenv');

// Load biến môi trường
dotenv.config();

// Khởi tạo Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();

// Cấu hình body parser cho API
app.use(express.json());

// API gửi thông báo FCM
app.post('/send-notification', (req, res) => {
  const { title, body, token } = req.body;

  const message = {
    notification: {
      title: title,
      body: body
    },
    token: token
  };

  // Gửi thông báo
  admin.messaging().send(message)
    .then((response) => {
      res.status(200).send(`Notification sent successfully: ${response}`);
    })
    .catch((error) => {
      res.status(500).send(`Error sending notification: ${error}`);
    });
});

// Lắng nghe server trên cổng 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
