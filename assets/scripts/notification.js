// Notification functionality
function showNotification() {
   const notification = document.getElementById('notification');
   notification.classList.remove('hidden');
   notification.style.display = 'block';

   document.getElementById('yesBtn').addEventListener('click', () => {
       document.documentElement.classList.remove('light-mode');
       document.documentElement.classList.add('dark-mode');
       localStorage.setItem('theme', 'dark');
       notification.classList.add('hidden');
       notification.style.display = 'none'; 
   });

   document.getElementById('noBtn').addEventListener('click', () => {
       localStorage.setItem('notificationDismissed', new Date().toISOString());
       notification.classList.add('hidden');
       notification.style.display = 'none'; 
   });
}

function hideNotification() {
   const notification = document.getElementById('notification');
   notification.classList.add('hidden');
   notification.style.display = 'none';
}

function scheduleNotification() {
   const now = new Date();
   const hours = now.getHours();
   const minutes = now.getMinutes();
   const seconds = now.getSeconds();

   // Check if the current time is 8, 9, 10, 11, 12PM
   if ((hours === 20 || hours === 21 || hours === 22 || hours === 23 || hours === 0) && (minutes === 0 || minutes === 30) && seconds === 0) {
       if (document.documentElement.classList.contains('light-mode')) {
           showNotification();
       }
   }
}

window.addEventListener('DOMContentLoaded', () => {
   // Check the time every second
   setInterval(scheduleNotification, 1000);
});
