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
  get('.cardapio-pizza').style.display = 'flex'
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
let photo = pizzaaopen.map(e => e.src)
// for loop of names, description and photo
for (let index = 0; index < description.length; ++index) {
  let element = description[index]
  let nameT = ''
  let areapictures = ''
  for (let index = 0; index < names.length; ++index) {}
  nameT = names[index]
  for (let index = 0; index < photo.length; ++index) {}
  areapictures = photo[index]

  get('.pizza-item').innerHTML += `<div class="pizza-area">
  <img class="photo" src="${areapictures}" alt="">
  <div class="namep">${nameT}</div>
  <p class="description"> ${element}</p>
  </div>`
}

//************
// Cachorro Quente enviroment
let imgphoto = CachorroQ.map(e => e.img)
let namesQ = CachorroQ.map(e => e.name)
let descriptionQ = CachorroQ.map(e => e.description)
let txtQuente = ''
let quendesc = ''
let photoQ = ''
// for loop of names, description and photo
for (let index = 0; index < namesQ.length; ++index) {
  txtQuente = namesQ[index]

  for (let index = 0; index < descriptionQ.length; ++index) {}
  quendesc = descriptionQ[index]
  for (let index = 0; index < imgphoto.length; ++index) {}
  photoQ = imgphoto[index]
  get('.quente-item').innerHTML += `<div class="quente-area">
  <img class="photo" src="${photoQ}" alt="">
  <div class="tituloQ">${txtQuente}</div>
  <div class="descCQ">${quendesc}</div> 
  </div>`
}

/************* */
// sanduiches
let photoSand = sanduiches2.map(e => e.img)
let sanduicheN = sanduiches2.map(e => e.name)
let sandDesc = sanduiches2.map(e => e.description)
let SanduiNM = ''
let Sandesc = ''
let photoS = ''
// for loop of names, description and photo
for (let index = 0; index < sanduicheN.length; index++) {
  SanduiNM = sanduicheN[index]
  for (let index = 0; index < sandDesc.length; index++) {}
  Sandesc = sandDesc[index]
  for (let index = 0; index < photoSand.length; index++) {}
  photoS = photoSand[index]

  get('.sanduíches-item').innerHTML += ` <div class="area-Sand">
  <img class="photo" src="${photoS}" alt="">
  <div class="tituloSand">
  ${SanduiNM}</div>
  <div class=""descriptionS>${Sandesc}</div>
  </div>`
}

/**************** */
//´pATEIS
let pateisimg = pateis.map(e => e.img)
let pateisN = pateis.map(e => e.name)
let imgP = ''
let namepasteis = ''
for (let index = 0; index < pateisN.length; index++) {
  namepasteis = pateisN[index]
  for (let index = 0; index < pateisimg.length; index++) {}
  imgP = pateisimg[index]
  get('.pasteis-item').innerHTML += `<div class="pateis-area">
  <img class="photo" src="${imgP}" alt="">
  <div class="titulo-pateis">${namepasteis}</div>
  </div>`
}

/*bebidas*/
let bebidaN = bebidas.map(e => e.name)
let pricedrink = bebidas.map(e => e.price)
let picturesB = bebidas.map(e => e.img)
let imgB = ''
let priceB = ''
let txtbebida = ''
for (let index = 0; index < bebidaN.length; index++) {
  txtbebida = bebidaN[index]
  for (let index = 0; index < pricedrink.length; index++) {}

  priceB = pricedrink[index]
  let BpriceF = priceB.toFixed(2)
  for (let index = 0; index < picturesB.length; index++) {}
  imgB = picturesB[index]
  get('.bebida-item').innerHTML += `<div class="area-drink">
  <img class="photo" src="${imgB}" alt="">
    <div class="drink-name">
         ${txtbebida}
    </div>
    <div class="drink-price">
    R$ ${BpriceF}
    </div
  `
}

/**acaiecremes */
let acaiemT = acaiecreme.map(e => e.monteacai)
let descriptioncreme = acaiecreme.map(e => e.description)
let MTcaicreme = ''
let descAcai = ''
get('.creme-item').innerHTML = `<div class="acai-area">
<div class="monteacai">${acaiemT}</div>
<div class="desc-acai">${descriptioncreme}</div>
</div> `
