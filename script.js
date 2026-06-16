const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const response = document.getElementById('response');
const heartsBg = document.querySelector('.hearts-bg');

// Hace que el botón "No" sea difícil de presionar
noBtn.addEventListener('mouseenter', () => {
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Cuando presiona "Yes"
yesBtn.addEventListener('click', () => {
  response.classList.remove('hidden');
  createHearts();
});

// Crea corazones animados
function createHearts() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    heart.style.fontSize = (15 + Math.random() * 30) + 'px';
    heartsBg.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
