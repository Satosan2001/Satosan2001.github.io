const themeToggleDiv = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

const updateTooltip = () => {
    const isLightMode = document.documentElement.classList.contains('light-mode');
    themeToggleDiv.title = isLightMode ? 'Enable Dark Mode' : 'Enable Light Mode';
};

if (currentTheme === 'light') {
    document.documentElement.classList.add('light-mode');
    themeToggleDiv.innerHTML = '<i class="fa-regular fa-moon"></i>';
} else {
    document.documentElement.classList.remove('light-mode');
    themeToggleDiv.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

updateTooltip();

themeToggleDiv.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    const isLightMode = document.documentElement.classList.contains('light-mode');
    themeToggleDiv.innerHTML = isLightMode ? '<i class="fa-regular fa-moon"></i>' : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    updateTooltip();
});


      // Clock functionality
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
 }
 
 setInterval(updateClock, 1000);
 updateClock();
 