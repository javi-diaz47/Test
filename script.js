const cal = () => Math.round(Math.random()* (10-1)+1)
let randomNum;


async function time () {
  // let promise = new Promise((resolve, reject) => {
  //   setTimeout(()=> resolve('Done !'), 1000)
  // })
  // let result = await promise;
  randomNum = cal()

  await req()
  alert()
}


// const $btn = document.getElementById('btn')
const $container = document.getElementById('container')
const $alert = document.getElementById('alert')
const $text = document.getElementById('text')
const $btnAlert = document.getElementById('btn-alert')

const $btn = document.getElementById('btn')
if($alert.classList.contains('active')){
  $btn.removeEventListener('click', time)
}else {
  $btn.addEventListener('click', time)
}
// $btn.addEventListener('click', alert)

function alert(){
  $alert.classList.add('active')
  $container.classList.add('dark')
}

$btnAlert.addEventListener('click', alertDown)

function alertDown(){
  $alert.classList.remove('active')
  $container.classList.remove('dark')
}

// const request = async () => {
//     const response = await fetch('https://swapi.co/api/people/1');
//     const json = await response.json();
//     console.log(json);
// }
//
// request();


// const req = async () => {
//   const response = await fetch('https://swapi.co/api/people/1')
//   const character = await response.json()
//   const responseHome = await fetch('https://swapi.co/api/planets/1/')
//   const homeworld = await responseHome.json()
//   console.log(`${character.name} nacío en ${homeworld.name}`);
// }
// req()


async function req () {

  const response = await fetch(`https://swapi.co/api/people/${randomNum}`)
  const character = await response.json()
  const responseHome = await fetch(`https://swapi.co/api/planets/${randomNum}/`)
  const homeworld = await responseHome.json()
    if (character.birth_year == 'unknown') {
      $text.innerHTML = `${character.name} nacío en ${homeworld.name} `
      console.log(`${character.name} nacío en ${homeworld.name}  `)
    } else {
      $text.innerHTML = `${character.name} nacío en ${homeworld.name} en el año ${character.birth_year}`
      console.log(`${character.name} nacío en ${homeworld.name} en el año ${character.birth_year} `)
    }

}
