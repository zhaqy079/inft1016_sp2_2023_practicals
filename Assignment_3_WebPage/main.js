// Toggle for switch light and dark mode
// Get the HTML element to display the switch toggle
const themeToggleBtn = document.querySelector('.theme-toggle');
const body = document.body;

// Store data locally in the user's browser and retrieve it late
const theme = localStorage.getItem('theme');
// Specified theme class to be applied to the entire document body when loads page
const dataScheme = theme === 'dark-mode' ? 'dark' : 'light';

// Set the initial mode on page load
body.setAttribute('data-scheme', dataScheme);

// When the button is clicked, it toggles elements store positon change
function handleThemeToggle() {
                    body.classList.toggle('dark-mode');
                    if (body.classList.contains('dark-mode')) {
                      localStorage.setItem('theme', 'dark-mode');
                      body.setAttribute('data-scheme', 'dark');
                    } else {
                      localStorage.removeItem('theme');
                      body.setAttribute('data-scheme', 'light');
                    }
                  }
                  


// Adds an event listener to the themeToggleBtn element
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