   // Notification functionality
function showNotification() {
   const notification = document.getElementById('notification');
   notification.classList.remove('hidden');
   notification.style.display = 'block'; // Ensure it is visible

   document.getElementById('yesBtn').addEventListener('click', () => {
       document.documentElement.classList.remove('light-mode');
       document.documentElement.classList.add('dark-mode');
       localStorage.setItem('theme', 'dark');
       notification.classList.add('hidden');
       notification.style.display = 'none'; // Hide the notification
   });

   document.getElementById('noBtn').addEventListener('click', () => {
       localStorage.setItem('notificationDismissed', new Date().toISOString());
       notification.classList.add('hidden');
       notification.style.display = 'none'; // Hide the notification
   });
}

function hideNotification() {
   const notification = document.getElementById('notification');
   notification.classList.add('hidden');
   notification.style.display = 'none'; // Ensure it is hidden
}

function scheduleNotification() {
   const now = new Date();
   const hours = now.getHours();
   const minutes = now.getMinutes();
   const seconds = now.getSeconds();
   const notificationDismissed = new Date(localStorage.getItem('notificationDismissed'));

   // Check if the current time is 8 PM, 9 PM, or 10 PM
   if ((hours === 20 || hours === 21 || hours === 18) && (minutes === 0 || minutes === 35) && seconds === 59) {
       if (document.documentElement.classList.contains('light-mode')) {
           showNotification();
       }
   }
}

window.addEventListener('DOMContentLoaded', () => {
   // Check the time every second
   setInterval(scheduleNotification, 1000);
});
