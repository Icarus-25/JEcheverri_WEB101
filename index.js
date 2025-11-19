/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Ensure initial label matches current theme state
if (document.body.classList.contains("dark-mode")) {
  themeButton.textContent = "Light Mode";
} else {
  themeButton.textContent = "Dark Mode";
}
// Step 2: Write the callback function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  // Update button text depending on active theme
  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

// Header buttons
const rsvpHeaderBtn = document.getElementById("rsvp-header-btn");
const contactBtn = document.getElementById("contact-btn");

rsvpHeaderBtn.addEventListener("click", () => {
  document.getElementById("rsvp").scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", () => {
  window.location.href = "mailto:info@latinxparty.com";
});

// Reduce Motion button
const reduceMotionBtn = document.getElementById('reduce-motion-btn');
reduceMotionBtn.addEventListener('click', reduceMotion);

function reduceMotion() {
    document.body.classList.toggle('no-motion');
}

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
let rsvpSubmitButton = document.getElementById("rsvp-button")
let count = 3;

const addParticipant = (person) => {
    // Create new participant paragraph
    const newParticipant = document.createElement("p");
    newParticipant.textContent = `🎟️ ${person.name} has RSVP'd.`;

    // Find participants div and add the new participant
    const participantsDiv = document.querySelector(".rsvp-participants");
    participantsDiv.appendChild(newParticipant);

    // Update the counter
    count++;
    
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
  event.preventDefault();  // Prevents form from refreshing page
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // Build person object from inputs (trim whitespace)
  let person = {
    name: rsvpInputs[0].value.trim(),
    phone: rsvpInputs[1].value.trim(),
    email: rsvpInputs[2].value.trim()
  };

  // Validate name (required, min length 2)
  if (person.name.length < 2) {
    containsErrors = true;
    rsvpInputs[0].classList.add("error");
  } else {
    rsvpInputs[0].classList.remove("error");
  }

  // Validate phone (keep existing rule: min length 2)
  if (person.phone.length < 2) {
    containsErrors = true;
    rsvpInputs[1].classList.add("error");
  } else {
    rsvpInputs[1].classList.remove("error");
  }

  // Validate email: must contain '@' and '.com'
  if (!person.email.includes("@") || !person.email.includes(".com")) {
    containsErrors = true;
    rsvpInputs[2].classList.add("error");
  } else {
    rsvpInputs[2].classList.remove("error");
  }

  // If no errors, add participant and clear fields
  if (!containsErrors) {
    // Optionally you could pass person to addParticipant if you refactor it
    addParticipant(person);
    toggleModal(person)
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpSubmitButton.addEventListener("click", validateForm);


/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/
// Show a simple thank-you modal. Accepts a `person` object with name/email/phone
function toggleModal(person) {
  const modal = document.getElementById('success-modal');
  const modalContent = document.getElementById('modal-text');
  if (!modal || !modalContent) return;

  // Personalized content
  modalContent.textContent = `Thanks ${person.name}! We've recorded your RSVP and will contact you at ${person.email}.`;

  // Make the modal visible (display:flex expected in CSS)
  modal.style.display = 'flex';

  // Start the image animation only if reduce motion is off
  if (!document.body.classList.contains('no-motion')) {
    intervalId = setInterval(animateImage, 500);
  }

  // Auto-hide after 5 seconds
  setTimeout(() => {
    modal.style.display = 'none';
    if (intervalId) clearInterval(intervalId);
  }, 5000);
}

// TODO: animation variables and animateImage() function
var rotateFactor = 0;
var modalImage = document.querySelector('.modal-item img');
var intervalId;

// Select the close button
const closeButton = document.getElementById('close-modal-button');

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('success-modal');
  modal.style.display = 'none';
  if (intervalId) clearInterval(intervalId);
}

// Add event listener to the close button
closeButton.addEventListener('click', closeModal);

function animateImage() {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}