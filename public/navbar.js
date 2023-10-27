import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti'

function confetti() {
  document.getElementById('#submit', canvasConfetti()).onclick
}

function navbar() {
  document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('menu-content')
    let i
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}
