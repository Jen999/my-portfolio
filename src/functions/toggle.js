export default function toggle(i){
    const toggled = document.querySelector(i);
    toggled.classList.toggle('active');
    if (i === '.togglebox') {
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('active');
    }
  }