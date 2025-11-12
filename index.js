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
    if (event) {
        event.preventDefault();
    }
    
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
    if (rsvpCount){
        rsvpCount.remove();
    }
    
    // Create new counter paragraph
    rsvpCount = document.createElement("p");
    rsvpCount.id = "rsvp-count";
    rsvpCount.textContent = "⭐" + count + " people have RSVP'd to this event!";
    
    // Append counter to participants div (always at bottom)
    participantsDiv.appendChild(rsvpCount);
}

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();  // ✅ Prevents form from refreshing page
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    if (rsvpInputs[i].value.length < 2){
        containsErrors = true;
        rsvpInputs[i].classList.add("error");
    }
    else {
        rsvpInputs[i].classList.remove("error");
    }

  }
  // TODO: Inside loop, validate the value of each input
  var email = document.getElementById("email-input");
  var emailValue = email.value
  if (!emailValue.includes("@") || !emailValue.includes(".com")){
    containsErrors = true;
    email.classList.add("error");
  }
  else {
    email.classList.remove("error");
  }
  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors == false){
    addParticipant();
    for (let i = 0; i < rsvpInputs.length; i++){
        rsvpInputs[i].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);


/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/