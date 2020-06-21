const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');


buttonInstall.addEventListener('click', (e) => {
  // Hide the app provided install promotion
  hideMyInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  });
});



if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://raw.githubusercontent.com/RadioRotation/WEBSITE/master/service-worker.js');
}

