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
  console.log('New Quiz:', quiz);

  // Clear form fields after submission
  document.getElementById('topicID').value = '';
  document.getElementById('title').value = '';
  document.getElementById('noq').value = '';
}
