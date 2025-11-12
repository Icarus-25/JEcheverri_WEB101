/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");

    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let rsvpButton = document.getElementById("rsvp-button")
let count = 3;

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    event.preventDefault();
    
    // Get form input values
    const nameInput = document.getElementById("name-input");
    const nameValue = nameInput.value;

    const phoneInput = document.getElementById("phone-input");
    const phoneValue = phoneInput.value;

    const emailInput = document.getElementById("email-input");
    const emailValue = emailInput.value;

    // Create new participant paragraph
    const newParticipant = document.createElement("p");
    newParticipant.textContent = `🎟️ ${nameValue} has RSVP'd.`;

    // Find participants div and add the new participant
    const participantsDiv = document.querySelector(".rsvp-participants");
    participantsDiv.appendChild(newParticipant);

    // Update the counter
    count = count + 1;
    
    // Check if counter exists, if so remove it first
    let rsvpCount = document.getElementById("rsvp-count");
    rsvpCount.remove();
    
    // Create new counter paragraph
    rsvpCount = document.createElement("p");
    rsvpCount.id = "rsvp-count";
    rsvpCount.textContent = "⭐" + count + " people have RSVP'd to this event!";
    
    // Append counter to participants div (always at bottom)
    participantsDiv.appendChild(rsvpCount);

    // Clear the form inputs
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
}

// Step 3: Add a click event listener to the submit RSVP button here
rsvpButton.addEventListener("click", addParticipant);
/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/