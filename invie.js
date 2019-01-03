let $burgerButton = document.getElementById('burger-button')
let $menu = document.getElementById('menu')
function toggleMenu (){
  $menu.classList.toggle('active')
  $burgerButton.classList.toggle('icon-close')
}
let consulta = window.matchMedia('(max-width: 500px)')
consulta.addListener(mediaQuery)

function mediaQuery(){
  if (consulta.matches) {
    $burgerButton.addEventListener('touchstart',toggleMenu)

  }else{
    $burgerButton.removeEventListener('touchstart',toggleMenu)

    console.log('No se cumplio la condicion')
  }
}
 mediaQuery()
// Gestos
// Hammer.js
let $body = document.body
let gestos = new Hammer($body)
gestos.on('swipeoleft',(ev)=> console.log(ev))
gestos.on('swipeoright',(ev)=> console.log(ev))
