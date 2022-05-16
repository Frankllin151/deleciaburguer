// Function to return they same
const get = el => document.querySelector(el)
const getAll = el => document.querySelectorAll(el)

let menu = window.cardapios
//variable environment
//pizza
let pizzaaopen = menu[0].pizza
// CachorroQuente
let CachorroQ = menu[4].cachorroQuente
// sanduiches
let sanduiches2 = menu[1].Sanduiches
// pateis
let pateis = menu[2].pateis
// bebidas
let bebidas = menu[5].bebidas
// acai and creme
let acaiecreme = menu[3].acaiecremes

// functions
function pizzaopen() {
  let flexopen = (get('.cardapio-pizza').style.display = 'flex')
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-açaiecreme').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
}
function cachoQuente() {
  get('.cardapio-Quente').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-açaiecreme').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
}
function sanduiches() {
  get('.cardapio-sanduíches').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-açaiecreme').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
}
function pasteis() {
  get('.cardapio-pateis').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-açaiecreme').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
}
function bebida() {
  get('.cardapio-drink').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-açaiecreme').style.display = 'none'

  get('.cardapio-pateis').style.display = 'none'
}
function cremeacai() {
  get('.cardapio-açaiecreme').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
}

// pizza enviroment
let names = pizzaaopen.map(e => e.name)
let description = pizzaaopen.map(e => e.description)
let getname = names
let txt = ''
let texto = ''
for (let index = 0; index < description.length; ++index) {
  var element = description[index]
  console.log(element)
  texto = element
}
getname.forEach(namegt) /
  /**description.forEach(desc)
function desc(item) {
  texto += ' ' + `<div class="pizza-desc">${item}</div>`
}*/ console.log(texto)
function namegt(item) {
  txt +=
    ' ' +
    `<div class="pizza-name">${item} <p id="pdescription">${element}</p></div>`
}
/*
const a = ["a", "b", "c"];
for (let index = 0; index < a.length; ++index) {
    const element = a[index];
    console.log(element);
}
*/
get('.pizza-item').innerHTML = txt

//************
// Cachorro Quente enviroment
let namesQ = CachorroQ.map(e => e.name)
let txtQuente = ''
namesQ.forEach(checknamesQ)

function checknamesQ(item) {
  txtQuente += ' ' + `<div class="quente-name">${item}</div>` + '<br>'
}
get('.quente-item').innerHTML = txtQuente
/************* */
// sanduiches
let sanduicheN = sanduiches2.map(e => e.name)
let txtsaduinches = ''
sanduicheN.forEach(item => {
  txtsaduinches += ' ' + `<div class="sanduíches-name">${item}</div>` + '<br>'
})
get('.sanduíches-item').innerHTML = txtsaduinches
/**************** */
//´pATEIS
let pateisN = pateis.map(e => e.name)
let txtpateis = ''
pateisN.forEach(item => {
  txtpateis += ' ' + `<div class="pateis-name">${item}</div>`
})

get('.pasteis-item').innerHTML = txtpateis
/*bebidas*/
let bebidaN = bebidas.map(e => e.name)
let txtbebida = ''
bebidaN.forEach(item => {
  txtbebida += ' ' + `<div class="bebida-name">${item}</div>`
})
get('.bebida-item').innerHTML = txtbebida
/**acaiecremes */
let acaiemN = acaiecreme.map(e => e.name)
let txtacaicreme = ''
acaiemN.forEach(item => {
  txtacaicreme += ' ' + `<div class="creme-name">${item}</div>`
})
get('.creme-item').innerHTML = txtacaicreme
