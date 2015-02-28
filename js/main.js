var pagetop, menu, yPos;
function yScroll(){
  pagetop = document.getElementById('pageTop');
  menu = document.getElementById('menu');
  yPos = window.pageYOffset;

  if (yPos > 180) {
    pagetop.style.height = "2.5rem";
    menu.style.height = "4rem";
    menu.style.marginTop = "4rem";
  } else{
    pagetop.style.height = "8rem";
    pagetop.style.color = "white";
    menu.style.height = "4rem";
    menu.style.opacity = "1";
    menu.style.color = "black";
  }
}
window.addEventListener('scroll', yScroll);
