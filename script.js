const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');






if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://raw.githubusercontent.com/RadioRotation/WEBSITE/master/service-worker.js');
}

