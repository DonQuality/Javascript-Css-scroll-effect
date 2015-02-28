var pagetop, menu, yPos, user;

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
alert('Welcome to this Javascript and CSS test\nhope you like it, \n\nQuality Webz 2015');
alert('Scroll Up and Down and watch the header and \nsub header do their thing');
window.addEventListener('scroll', yScroll);
