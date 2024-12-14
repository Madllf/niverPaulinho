
const enterButton = document.getElementById('enterButton');
const overlay = document.querySelector('.overlay');
const backgroundMusic = document.getElementById('backgroundMusic');


function fadeInAudio(audio, duration) {
  let volume = 0;
  audio.volume = volume; 
  const step = 0.05; 
  const intervalTime = (duration / (1 / step)); 


  const fadeInterval = setInterval(() => {
    if (volume < 1) {
      volume = Math.min(volume + step, 1); 
      audio.volume = volume;
    } else {
      clearInterval(fadeInterval); 
    }
  }, intervalTime);
}

enterButton.addEventListener('click', () => {
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
  backgroundMusic.play();
  fadeInAudio(backgroundMusic, 3000); 
  const img = document.getElementById('imageFade');
  img.classList.add('visible');
});

document.body.style.overflow = 'hidden';
