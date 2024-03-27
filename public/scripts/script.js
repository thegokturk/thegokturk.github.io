const hamburger = document.querySelector('.formobile');
const navLink = document.querySelector('.navhrefs');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('close');
});