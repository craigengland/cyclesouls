const button = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');
const menuItems = document.querySelectorAll('.nav a');
var isMenuOpen = false;

function openMenu() {
  
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) { 
    
    menu.classList.add('show');
      
    setTimeout(animateItems, 1000);

  } else {
    animateItems(true)
    setTimeout(() => {
      menu.classList.remove('show');
      
    }, 1000)
    button.textContent = 'Menu';
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
    button.textContent = 'Menu';
  } else {  
    button.textContent = 'Close Menu';
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