document.addEventListener('mousemove', (e) => {
  const body = document.body;
  // Creates a dynamic radial gradient anchored at the user's cursor coordinates
  body.style.background = `radial-gradient(300px circle at ${e.pageX}px ${e.pageY}px, rgba(255,0,127,0.12), #FAF8F5 100%)`;
});

document.addEventListener('mousemove', (e) => {
  // Only spawn a sparkle roughly every 4 cursor pixels moved so it isn't too cluttered
  if (Math.random() > 0.15) return; 

  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle-particle';
  
  // Set position directly center of cursor
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  
  // Give it a slightly random size for organic texture
  const size = Math.random() * 12 + 6;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  document.body.appendChild(sparkle);

  // Auto-clean the DOM after animation completes
  setTimeout(() => sparkle.remove(), 800);
});
