const colors = [
    ['#ff9a9e', '#fad0c4'],
    ['#a18cd1', '#fbc2eb'],
    ['#f6d365', '#fda085'],
    ['#84fab0', '#8fd3f4'],
    ['#cfd9df', '#e2ebf0']
  ];

  function createBall() {
  const ball = document.createElement("div");
  ball.className = "ball";

  const size = Math.floor(Math.random() * 150) + 25;
  ball.style.width = `${size}px`;
  ball.style.height = `${size}px`;
  ball.style.top = '-200px';

  // Use full window width
  const screenWidth = window.innerWidth;
  const randomX = Math.random() * (screenWidth - size);
  ball.style.left = `${randomX}px`;

  // Random color gradient
  const colorSet = colors[Math.floor(Math.random() * colors.length)];
  ball.style.background = `radial-gradient(circle at center, ${colorSet[0]}, ${colorSet[1]})`;

  // Animation delay
  ball.style.animationDelay = `${Math.random() * 2}s`;

  // Append to body
  document.body.appendChild(ball);

  // Remove after falling
  setTimeout(() => {
    ball.remove();
  }, 5000);
}


  // Create new ball every 800ms forever
  setInterval(createBall, 800);

  const toggleBtn = document.querySelector('.small-header button');
  const menuItems = document.querySelector('.menu-items');

  let isMouseInside = false;
  let hideTimer;

  // Show menu when button is clicked
  toggleBtn.addEventListener('click', () => {
    menuItems.style.display = 'block';
  });

  // Cancel hide when mouse enters menu or button
  menuItems.addEventListener('mouseover', () => {
    isMouseInside = true;
    clearTimeout(hideTimer);
  });

  toggleBtn.addEventListener('mouseover', () => {
    isMouseInside = true;
    clearTimeout(hideTimer);
  });

  // Set flag false when mouse leaves
  menuItems.addEventListener('mouseout', () => {
    isMouseInside = false;
    hideWithDelay();
  });

  toggleBtn.addEventListener('mouseout', () => {
    isMouseInside = false;
    hideWithDelay();
  });

  function hideWithDelay() {
    hideTimer = setTimeout(() => {
      if (!isMouseInside) {
        menuItems.style.display = 'none';
      }
    }, 300); // Wait 300ms before hiding
  }

function showPage(id) {
  const arr = document.querySelectorAll('section article');

  for (let a of arr) {
    a.style.display = 'none'; // hide all
  }

  const target = document.getElementById(id); // get element by id
  if (target) {
    if(target.getAttribute('id')==='home')
    {
      target.style.display='flex';
    }
    else{
    target.style.display = 'block';} // show the target section
  }
}
document.querySelector('.small-header button').addEventListener('click', () => {
  const menu = document.querySelector('.menu-items');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
