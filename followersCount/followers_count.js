let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Increment the count by 1
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
}

function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }
 
  function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
  }
  
  // Reset count back to 0
function resetCount() {
    count = 0;                    // Set count back to 0
    displayCount();               // Update page to show 0
    alert("Followers count has been reset! 🔄"); // Show alert
}