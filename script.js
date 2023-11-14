// Paste your Firebase config object here
const firebaseConfig = {
  apiKey: "AIzaSyBzzaSTr42firr3fx5YcdXhDzB4iBLVBOM",
  authDomain: "contact-database-9c47b.firebaseapp.com",
  databaseURL: "https://contact-database-9c47b-default-rtdb.firebaseio.com",
  projectId: "contact-database-9c47b",
  storageBucket: "contact-database-9c47b.appspot.com",
  messagingSenderId: "118822537955",
  appId: "1:118822537955:web:3ef795baeadbe37b7293d6",
  measurementId: "G-0WY0798WFC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function handleFormSubmit() {
  const topicID = document.getElementById('topicID').value;
  const title = document.getElementById('title').value;
  const noq = document.getElementById('noq').value;

  // Validate inputs (add your own validation logic as needed)

  // Create a new quiz object
  const quiz = {
    topicID,
    title,
    noq: parseInt(noq, 10), // Convert 'noq' to an integer
  };

  // Log the quiz object (you can replace this with your Firebase logic)
  // For example, to push data to Firebase:
  const quizzesRef = firebase.database().ref('quizzes');
  quizzesRef.push(quiz);

  // Clear form fields after submission
  document.getElementById('topicID').value = '';
  document.getElementById('title').value = '';
  document.getElementById('noq').value = '';
}
