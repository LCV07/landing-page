const menuToggle = document.querySelector('.menu-toggle');
const navPanel = document.querySelector('.nav-panel');

if (menuToggle && navPanel) {
  menuToggle.addEventListener('click', () => {
    navPanel.classList.toggle('show');
    menuToggle.classList.toggle('open');
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    navPanel.classList.remove('show');
  }
});
