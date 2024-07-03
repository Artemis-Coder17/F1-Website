// Code to show amount of Time remainig for next race
// Set the date and time of the next race
const raceDate = new Date('November 19, 2023 06:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = raceDate - now;

    // Calculating days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Displaying the countdown
    document.getElementById('countdown').innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;

    // Onnce race over the user sees this
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Race has started!';
    }
}, 1000);


// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}

// Show/hide the scroll to top button based on the scroll position
window.onscroll = function() {
    var btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Using Dark and Light Mode
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleButton = document.getElementById('mode-toggle'); // Add an id to a button for toggling mode (see step 3)

    // Check the user's preference for dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial mode based on user preference
    if (prefersDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    // Toggle mode when the button is clicked
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');
        });
    }
});
