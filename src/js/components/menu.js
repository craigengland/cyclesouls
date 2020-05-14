const button = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');
const menuItems = document.querySelectorAll('.nav a');
var isMenuOpen = false;

function openMenu() {
  
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    
    menu.classList.add('show');
    document.body.style.overflow = 'hidden';
    setTimeout(animateItems, 1000);

  } else {
    animateItems(true)
    setTimeout(() => {
      menu.classList.remove('show');
      document.body.style.overflow = 'auto';
    }, 1000)
  }
  
}

function loopItems(items, reverse) {

  let interval = 200;

  if (reverse) {
    items.forEach((item, i) => {

      setTimeout(() => {
        item.classList.remove('show');
      }, interval * i);
  
    });
  } else {
    items.forEach((item, i) => {

      setTimeout(() => {
        item.classList.add('show');
      }, interval * i);
  
    });
  }
  
}

function animateItems(closingMenu) {

  if (closingMenu) {
    const navItems = Array.from(menuItems).reverse();
    loopItems(navItems, closingMenu);
  } else {
    loopItems(menuItems);
  }
  
}

button.addEventListener('click', openMenu);