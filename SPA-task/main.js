function loadContent(page) {
    const content = document.getElementById('content');
    
    switch(page) {
        case 'home':
            content.innerHTML = `
                <h1>Home</h1>
                <p>My first ever Single Page Application! This is the home page where you can find the latest updates, news and more.</p>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h1>About Us</h1>
                <p>I am Omar Khaled, a 17 years old and I am honored to be an intern student at lavaloon company in Cairo, Egypt.</p>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <h1>Contact Us</h1>
                <p>If you have any questions or need further information, feel free to reach out to us:</p>
                <ul>
                    <li>Email: omar.khaled.yusuf@gmail.com</li>
                    <li>Phone: +106 424 8972 </li>
                </ul>
            `;
            break;
        case 'giveaway':
            content.innerHTML = `
              <h3> Giveaway ends on Sunday, 10 November 2024 11:30am</h3>
                   <div class="container">
      <div class="counter-container">
        <span id="days" class="counter">0</span>
        <span>Days</span>
      </div>
      <div class="counter-container">
        <span id="hours" class="counter">0</span>
        <span>Hours</span>
      </div>
      <div class="counter-container">
        <span id="minutes" class="counter">0</span>
        <span>Mins</span>
      </div>
      <div class="counter-container">
        <span id="seconds" class="counter">0</span>
        <span>Secs</span>
      </div>
            `;
            break;
        default:
            content.innerHTML = `
                <h1>Home</h1>
                <p>My first ever Single Page Application! This is the home page where you can find the latest updates, news and more.</p>
            `;
    }
}

function Initialize() {
    // Load the default page
    loadContent('home');
    
    document.getElementById('home-link').addEventListener('click', (me) => {
        me.preventDefault();
        loadContent('home');
    });
    document.getElementById('about-link').addEventListener('click', (me) => {
        me.preventDefault();
        loadContent('about');
    });
    document.getElementById('contact-link').addEventListener('click', (me) => {
        me.preventDefault();
        loadContent('contact');
    });
    document.getElementById('giveaway-link').addEventListener('click', (me) => {
        me.preventDefault();
        loadContent('giveaway');
    });
}

// Initialize the SPA when the DOM content is loaded
document.addEventListener('DOMContentLoaded', Initialize);


const countDownDate = new Date("Nov 10, 2024 11:30:00").getTime();
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const counter = setInterval(() => {
  const now = new Date().getTime();
  const duration = countDownDate - now;
  
  if (duration < 0) {
    clearInterval(counter);
  }
  
  updateDuration(duration);
  }, 1000);

function updateDuration(duration)  {
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}