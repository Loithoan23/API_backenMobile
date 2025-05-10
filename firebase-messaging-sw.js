// web/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

// Khởi tạo Firebase App
firebase.initializeApp({
    apiKey: "AIzaSyCrc-cvoYtmA2nbLAR5SV1zGkV3KjOjlu4",
  authDomain: "flutter-ecommerce-app-78a7a.firebaseapp.com",
  projectId: "flutter-ecommerce-app-78a7a",
  storageBucket: "flutter-ecommerce-app-78a7a.firebasestorage.app",
  messagingSenderId: "45271757227",
  appId: "1:45271757227:web:8614d327ec9120f37b22ee",
  measurementId: "G-HCH32RHSZ1"
});

// Lấy firebase messaging
const messaging = firebase.messaging();
