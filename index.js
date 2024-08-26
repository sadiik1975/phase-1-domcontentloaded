// Your code goes here
// Add an event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    // Select the paragraph element with id="text"
    const paragraph = document.getElementById("text");
  
    // Replace the text content of the paragraph
    paragraph.textContent = "This is really cool!";
  });
  
  // Log a message to confirm when the script loads
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
  