// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV2ZrwGcn4K0e45G81rwsJxZgtIteDVig",
  authDomain: "auth-cbkare.firebaseapp.com",
  projectId: "auth-cbkare",
  storageBucket: "auth-cbkare.appspot.com",
  messagingSenderId: "731037765968",
  appId: "1:731037765968:web:b2f0ec5a8cb611ab555c55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// DOM Elements for Sign-Up
const signUpForm = document.querySelector("#sign-up-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// DOM Elements for Sign-In
const signInForm = document.querySelector("#sign-in-form");
const signInEmailInput = document.querySelector("#sign-in-email");
const signInPasswordInput = document.querySelector("#sign-in-password");

// Toggle between sign-in and sign-up
const signUpBtn = document.querySelector("#sign-up-btn");
const signInBtn = document.querySelector("#sign-in-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Sign-up form submission
if (signUpForm) {
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    const email = emailInput.value;
    const password = passwordInput.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log("User created:", user);

        // Save user data to Realtime Database
        set(ref(db, 'users/' + user.uid), {
          email: user.email,
          uid: user.uid
        })
        .then(() => {
          alert("User successfully created!");
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error:", errorCode, errorMessage);
        alert(errorMessage);
      });
  });
}

// Sign-in form submission
if (signInForm) {
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    const email = signInEmailInput.value;
    const password = signInPasswordInput.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user);

        // Retrieve user data from Firebase Realtime Database
        const userRef = ref(db, 'users/' + user.uid);
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              console.log("User data from database:", userData);
              alert("Login successful! User data: " + JSON.stringify(userData));
              // Redirect to the home page or another page
              window.location.href = "index.html"; // Change this to your desired page
            } else {
              console.log("No user data available");
              alert("No user data found.");
            }
          })
          .catch((error) => {
            console.error("Error retrieving user data:", error);
            alert("Error retrieving user data: " + error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error:", errorCode, errorMessage);
        alert(errorMessage);
      });
  });
}
