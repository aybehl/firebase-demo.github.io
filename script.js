// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnocwXEHwmG1Lz7dNQO_Ld1l2uKjI5jcw",
    authDomain: "random-project-b511b.firebaseapp.com",
    databaseURL: "https://random-project-b511b-default-rtdb.firebaseio.com",
    projectId: "random-project-b511b",
    storageBucket: "random-project-b511b.appspot.com",
    messagingSenderId: "180297809192",
    appId: "1:180297809192:web:64fc1f029e41718340e41d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase();

// Fetch comments
const comments = ref(database, "/comments");

// On data event
onValue(
    comments,
  (snapshot) => {
    // Create a reference to the ul element
    const ul = document.getElementById("comments");

    // Empty the ul emelemt
    ul.replaceChildren();

    // Loop through messages
    snapshot.forEach((childSnapshot) => {
      // Get key and children
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      console.log(childKey);
      console.log(childData);

      // Add comment to list
      const text = document.createTextNode(childData.name + ' ~ ' + childData.text);
      const li = document.createElement("li");
      li.appendChild(text);
      ul.appendChild(li);
    });
  },
  {
    onlyOnce: false,
  }
);