// this script is generated by chatGPT
  
  // Get the thought and source elements
  const thoughtElement = document.getElementById("thought");
  const sourceElement = document.getElementById("source");
  
  // Get the new thought button element
  const newquoteBtn = document.getElementById("new-quote-btn");
  
  // Function to generate a random thought
function generatequote() {
    // Load the thoughts from the JSON file
    fetch("quotes.json")
      .then(response => response.json())
      .then(data => {
        // Get a random thought from the thoughts array
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomthought = data[randomIndex];
        
        // Update the thought and source elements with the new thought
        thoughtElement.textContent = `"${randomthought.thought}"`;
        sourceElement.textContent = `- ${randomthought.source}`;
      })
      .catch(error => console.log(error));
  }
  
  
  // Add a click event listener to the new thought button
  newquoteBtn.addEventListener("click", generatequote);
  
  // Generate a thought when the page loads
  generatequote();


