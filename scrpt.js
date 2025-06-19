let load = 0;
const loadingText = document.getElementById('loading-text');
const progressBar = document.getElementById('progress-bar');
const loadingScreen = document.getElementById('loading-screen');

// Optional: You can define dynamic loading messages
const loadingMessages = [
  "Brewing your coffee...",
  "Grinding the beans...",
  "Heating the milk...",
  "Pouring with love...",
  "Serving you soon..."
];

let msgIndex = 0;

// Change loading message every second
setInterval(() => {
  msgIndex = (msgIndex + 1) % loadingMessages.length;
  loadingText.textContent = loadingMessages[msgIndex];
}, 1000);

// Simulate loading progress
const interval = setInterval(() => {
  load++;
  progressBar.style.width = load + '%';

  if (load >= 100) {
    clearInterval(interval);
    loadingScreen.style.transition = 'opacity 1.3s ease';
    loadingScreen.style.opacity = 0;
    setTimeout(() => loadingScreen.style.display = 'none', 1200);
  }
}, 50); // 100 * 50ms = ~5s

