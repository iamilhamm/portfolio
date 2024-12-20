document.addEventListener('DOMContentLoaded', () => {
    const flowerCount = 50; // Adjust this number for more or fewer flowers
    const body = document.body;
  
    for (let i = 0; i < flowerCount; i++) {
      const flower = document.createElement('div');
      flower.classList.add('flower');
  
      // Randomize position
      const randomX = Math.random() * 100; // Percentage for horizontal position
      const randomY = Math.random() * 100; // Percentage for vertical position
      flower.style.top = `${randomY}%`;
      flower.style.left = `${randomX}%`;
  
      // Randomize rotation
      const randomRotation = Math.random() * 360;
      flower.style.transform = `rotate(${randomRotation}deg)`;
  
      body.appendChild(flower);
    }
  });