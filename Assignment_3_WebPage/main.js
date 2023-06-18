// Toggle for switch light and dark mode
const themeToggleBtn = document.querySelector('.theme-toggle');
const body = document.body;

// Store data locally in the user's browser and retrieve it later
const theme = localStorage.getItem('theme');
// Specified theme to be applied to the entire document body when the page loads
const dataScheme = theme === 'dark' ? 'dark' : 'light';

// Set the initial mode on page load
body.setAttribute('data-scheme', dataScheme);

// When the button is clicked, it toggles the theme and stores the preference
function handleThemeToggle() {
  const currentScheme = body.getAttribute('data-scheme');
  const newScheme = currentScheme === 'dark' ? 'light' : 'dark';
  
  body.setAttribute('data-scheme', newScheme);
  localStorage.setItem('theme', newScheme);
}

// Add an event listener to the themeToggleBtn element
themeToggleBtn.addEventListener('click', handleThemeToggle);



// Display current date and time when user access webpage
const dateTimeElement = document.getElementById("currentDateTime");
// Function to format the date and time as a string
function formatDateTime(date) {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

// Function to uodate the current date and time
function updateDateTime(){
                    const currentDate = new Date();
                    dateTimeElement.textContent = formatDateTime(currentDate);
                  }
// Update the date and time immediately
updateDateTime();

// Update the date and time every second 
setInterval(updateDateTime, 1000);


// Get references to the image and text elements
const imgElement = document.getElementById('impact-image');
const pElement = document.getElementById('image-text');

// Define an array of image/text combinations
const imageCombinations = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/2015_UN_Human_Development_Report_Quartiles_2.png',
    text: '2015 UN Human Development Report Quartiles 2 by AKS471882 is licensed under CC BY-NC 2.0. To view a copy of this license, visit <a href="https://upload.wikimedia.org/wikipedia/commons/d/da/2015_UN_Human_Development_Report_Quartiles_2.png">https://upload.wikimedia.org/wikipedia/commons/d/da/2015_UN_Human_Development_Report_Quartiles_2.png</a>.'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Mobile_Phone_Evolution_1992_-_2014.jpg',
    text: 'Different Device by Jojhnjoy is licensed under CC BY 4.0. To view a copy of this license, visit <a href="https://commons.wikimedia.org/wiki/File:Mobile_Phone_Evolution_1992_-_2014.jpg">https://commons.wikimedia.org/wiki/File:Mobile_Phone_Evolution_1992_-_2014.jpg</a>.'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/JEGA_Video_Adapter_%28Alps_Electric%29.jpg',
    text: 'Top view of JEGA Video Adapter used in Japanese AX computers by Htomari is licensed under CC BY 4.0. To view a copy of this license, visit <a href="https://commons.wikimedia.org/wiki/File:JEGA_Video_Adapter_(Alps_Electric).jpg">https://commons.wikimedia.org/wiki/File:JEGA_Video_Adapter_(Alps_Electric).jpg</a>.'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Social_Media_me_and_other_social_media_systems.gif',
    text: 'Social Media Platforms by or	Alexander van Dijk is licensed under CC BY 4.0. To view a copy of this license, visit <a href="https://commons.wikimedia.org/wiki/File:Social_Media_me_and_other_social_media_systems.gif">https://commons.wikimedia.org/wiki/File:Social_Media_me_and_other_social_media_systems.gif</a>.'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Addiction.png',
    text: 'Addiction by Rimloukil is licensed under CC BY 4.0. To view a copy of this license, visit <a href="https://commons.wikimedia.org/wiki/File:Addiction.png">https://commons.wikimedia.org/wiki/File:Addiction.png</a>.'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Health_Illustrated_Text.png',
    text: 'Health Illustrated Text by Cabblow is licensed under CC BY 4.0. To view a copy of this license, visit <a href="https://commons.wikimedia.org/wiki/File:Health_Illustrated_Text.png">https://commons.wikimedia.org/wiki/File:Health_Illustrated_Text.png</a>.'
  }
];

// Function to change the image and text based on the selected combination
function changeImage(imageIndex) {
  const chosenImage = imageCombinations[imageIndex].image;
  const chosenText = imageCombinations[imageIndex].text;

  // Update the image and text elements with the chosen combination
  imgElement.src = chosenImage;
  pElement.innerHTML = chosenText;
}

// Attach click event listeners to the buttons
const buttons = document.getElementsByClassName('image-button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    changeImage(i);
  });
}

// Get the input and button elements
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');
const userNameSpan = document.getElementById('user-name');
const greetingHeading = document.getElementById('greeting-heading');

// Event listener for the button click
nameButton.addEventListener('click', function() {
  const userName = nameInput.value;
  if (userName) {
    userNameSpan.textContent = userName;
    greetingHeading.style.display = 'block'; // Show the greeting heading
  }
});
// Function to initialize the theme based on user preference stored in local storage
function initializeTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    document.body.setAttribute('data-scheme', 'dark');
  } else {
    document.body.setAttribute('data-scheme', 'light');
  }
}

// Function to update the heading with the user's name
function updateHeading() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userNameParam = urlParams.get('user_name');
  const storedName = localStorage.getItem('user_name');
  const userNameSpan = document.getElementById('user-name');

  if (userNameParam) {
    localStorage.setItem('user_name', userNameParam);
    userNameSpan.textContent = userNameParam;
  } else if (storedName) {
    userNameSpan.textContent = storedName;
  }
}

// Function to store the user's name in local storage
function storeName() {
  const nameInput = document.getElementById('name-input');
  const userName = nameInput.value.trim();
  if (userName) {
    localStorage.setItem('user_name', userName);
    updateHeading();
  }
}
// Call the updateHeading() function when the page loads
window.onload = function() {
  updateHeading();
};
