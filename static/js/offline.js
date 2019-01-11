//PWAs can detect network status!!
function updateOnlineStatus(event) {
  let profileImg = document.getElementById('profileImg');
  let src = profileImg.src;

  profileImg.src = navigator.onLine ? src.replace('_offline', '') : src.replace('.jpg', '_offline.jpg');
}
updateOnlineStatus();

// This doesn't work on Mobile Safari?? :-(
window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
