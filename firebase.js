const firebaseConfig = {
  apiKey: "AIzaSyBpxwRlTj4WXrgRgtW1nIm3M0c4a3uD_NI",
  authDomain: "fitness-tracker-90019.firebaseapp.com",
  projectId: "fitness-tracker-90019",
  storageBucket: "fitness-tracker-90019.firebasestorage.app",
  messagingSenderId: "315065483544",
  appId: "1:315065483544:web:f204984f88b94a661d5e6d",
  measurementId: "G-7DG334Y9M4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();