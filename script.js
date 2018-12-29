async function time () {

  let promise = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('Done !'), 1000)
  })
  let result = await promise;

  alert()
}

time()
// const $btn = document.getElementById('btn')
const $container = document.getElementById('container')
const $alert = document.getElementById('alert')
const $text = document.getElementById('text').innerHTML = "That's Done man !"
const $btnAlert = document.getElementById('btn-alert')
// $btn.addEventListener('click', alert)

function alert(){
  $alert.classList.toggle('active')
  $container.classList.toggle('dark')
}
$btnAlert.addEventListener('click', alert)
