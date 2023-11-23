// Metronome

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscillator = audioContext.createOscillator();
oscillator.type = 'sine'; // You can change the wave type here (sine, square, sawtooth, triangle)
oscillator.frequency.setValueAtTime(1000, audioContext.currentTime); // Initial frequency
oscillator.start();

// Get elements
const bpmInput = document.querySelector('.bpm-input');
const increaseBpm = document.querySelector('.increase-bpm');
const decreaseBpm = document.querySelector('.decrease-bpm');
const startButton = document.getElementById('metronome-button');

let isPlaying = false;
let intervalId;

// Increase BPM when the up arrow is clicked
increaseBpm.addEventListener('click', () => {
    bpmInput.value = parseInt(bpmInput.value, 10) + 1;
});

// Decrease BPM when the down arrow is clicked
decreaseBpm.addEventListener('click', () => {
    if (parseInt(bpmInput.value, 10) > 1) {
        bpmInput.value = parseInt(bpmInput.value, 10) - 1;
    }
});

function startMetronome(bpm) {
  if (isPlaying) return;

  const interval = 60000 / bpm; // Calculate interval based on BPM
  intervalId = setInterval(() => {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    oscillator.connect(audioContext.destination);
    setTimeout(() => {
      oscillator.disconnect(audioContext.destination);
    }, 100); // Duration of the tick sound
  }, interval);

  isPlaying = true;
}

// Stop metronome when button clicked
function stopMetronome() {
  clearInterval(intervalId);
  isPlaying = false;
}

// Start the metronome when button clicked
startButton.addEventListener('click', function() {
    if (isPlaying) {
        stopMetronome();
        startButton.textContent = "Start";
    } else {
        startMetronome(parseInt(bpmInput.value, 10));
        startButton.textContent = "Stop";
    }
});

// // Stop the metronome after 10 seconds
// setTimeout(() => {
//   stopMetronome();
// }, 10000);