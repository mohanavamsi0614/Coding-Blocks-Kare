// /// Import Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAV2ZrwGcn4K0e45G81rwsJxZgtIteDVig",
//     authDomain: "auth-cbkare.firebaseapp.com",
//     databaseURL: "https://auth-cbkare-default-rtdb.firebaseio.com/", // Add the database URL
//     projectId: "auth-cbkare",
//     storageBucket: "auth-cbkare.appspot.com",
//     messagingSenderId: "731037765968",
//     appId: "1:731037765968:web:b2f0ec5a8cb611ab555c55"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// // Event registration form submission
// const eventRegistrationForm = document.querySelector("#event-registration-form");

// if (eventRegistrationForm) {
//     eventRegistrationForm.addEventListener("submit", (e) => {
//         e.preventDefault(); // Prevent form from submitting normally

//         // Capture form data
//         const name = document.querySelector("#name").value;
//         const reg_no = document.querySelector("#reg_no").value;
//         const department = document.querySelector("#department").value;
//         const email = document.querySelector("#email").value;
//         const phone = document.querySelector("#phone").value;
//         const event = document.querySelector("#event").value;

//         // Save registration data to Firebase
//         const registrationData = {
//             name: name,
//             reg_no: reg_no,
//             department: department,
//             email: email,
//             phone: phone,
//             event: event,
//         };

//         const newRegistrationRef = ref(db, 'eventRegistrations/' + Date.now()); // Using timestamp as a unique ID

//         set(newRegistrationRef, registrationData)
//             .then(() => {
//                 alert("Registration successful!");
//                 eventRegistrationForm.reset(); // Clear the form
//             })
//             .catch((error) => {
//                 console.error("Error saving registration data:", error);
//                 alert("Error saving registration data: " + error.message);
//             });
//     });
// }
// // Sample JavaScript code for event registration
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission for demonstration
//         alert('Registration Successful!');
//     });
// });

