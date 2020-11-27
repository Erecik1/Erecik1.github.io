// wygaszanie startu wyłączone, bo psuło rozjaśnianie na hoverze

// pokazuje lub ukrywa menu po kliknięciu w przycisk start
function showMenu() {
  let menuVisible = document.getElementById("menu").style.visibility;
  if (menuVisible == "hidden" || menuVisible == "") {
    document.getElementById("menu").style.visibility = "visible";
    // document.getElementById("start").style.filter = "brightness(80%)"
  } else if (menuVisible == "visible") {
    document.getElementById("menu").style.visibility = "hidden";
    // document.getElementById("start").style.filter = "brightness(100%)"
  }
}

// nasłuchuje kliknięcia poza obszarem menu i przycisku start (ten jest już obsługiwany przez powyższą funkcję) w celu zamknięcia menu
window.addEventListener('click', function(e) {
  let menu = document.getElementById("menu");
  let start = document.getElementById("start");
  if (e.target != menu && e.target.parentNode != menu && e.target != start) {
    menu.style.visibility = "hidden";
    // document.getElementById("start").style.filter = "brightness(100%)"
  }
});

// funkcja tylko do testów
function test() {
  console.log('Klik w pomidora');
}