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
let priceP = pizzaaopen.map(e => e.price)
// for loop of names, description and photo
for (let index = 0; index < description.length; ++index) {
  let element = description[index]
  let nameT = ''
  let areapictures = ''
  let pricePZ = ''
  for (let index = 0; index < names.length; ++index) {}
  nameT = names[index]
  for (let index = 0; index < photo.length; ++index) {}
  areapictures = photo[index]
  for (let index = 0; index < priceP.length; index++) {}
  pricePZ = priceP[index]
  let PzA = pricePZ[0].toFixed(2)
  get('.pizza-item').innerHTML += `<div onclick="Screen()" class="pizza-area">
  <img class="photo" src="${areapictures}" alt="">
  <div class="namep">${nameT}</div>
  <p class="description"> ${element}</p>
  <div class="price-pizza">
        R$ ${PzA}
  </div>
  </div>`
}

//************
// Cachorro Quente enviroment
let imgphoto = CachorroQ.map(e => e.img)
let namesQ = CachorroQ.map(e => e.name)
let descriptionQ = CachorroQ.map(e => e.description)
let priceHG = CachorroQ.map(e => e.price)

let priceQ = ''
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
  for (let index = 0; index < priceHG.length; index++) {}
  priceQ = priceHG[index].toFixed(2)
  get(
    '.quente-item'
  ).innerHTML += `<div onclick="screenQ()" class="quente-area">
  <img class="photo" src="${photoQ}" alt="">
  <div class="tituloQ">${txtQuente}</div>
  <div class="descCQ">${quendesc}</div> 
  <div class="priceQ">
     R$ ${priceQ}
  </div>
  </div>`
}

/************* */
// sanduiches
let photoSand = sanduiches2.map(e => e.img)
let sanduicheN = sanduiches2.map(e => e.name)
let sandDesc = sanduiches2.map(e => e.description)
let sandprice = sanduiches2.map(e => e.price)
let priceS = ''
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
  for (let index = 0; index < sandprice.length; index++) {}
  priceS = sandprice[index].toFixed(2)

  get(
    '.sanduíches-item'
  ).innerHTML += ` <div class="area-Sand"  onclick="sandScreen()">
  <img class="photo" src="${photoS}" alt="">
  <div class="tituloSand">
  ${SanduiNM}</div>
  <div class="descriptionS">${Sandesc}</div>
  <div class="pricesand">
   R$ ${priceS}
  </div>
  </div>`
}

/**************** */
//´pATEIS
let pateisimg = pateis.map(e => e.img)
let pateisN = pateis.map(e => e.name)
let pateisprice = pateis.map(e => e.price)
let pateidescription = pateis.map(e => e.description)
let pateisDEsc = ''
let pricePTS = ''
let imgP = ''
let namepasteis = ''
for (let index = 0; index < pateisN.length; index++) {
  namepasteis = pateisN[index]
  for (let index = 0; index < pateisimg.length; index++) {}
  imgP = pateisimg[index]
  for (let index = 0; index < pateidescription.length; index++) {}
  pateisDEsc = pateidescription[index]
  for (let index = 0; index < pateisprice.length; index++) {}
  pricePTS = pateisprice[index].toFixed(2)
  get(
    '.pasteis-item'
  ).innerHTML += `<div class="pateis-area" onclick="ScreenPT()">
  <img class="photo" src="${imgP}" alt="">
  <div class="titulo-pateis">${namepasteis}</div>
  <div class="pateisDesc">${pateisDEsc}</div>
   <div class="price-pateis">
R$ ${pricePTS}
   </div>
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
  get(
    '.bebida-item'
  ).innerHTML += `<div class="area-drink" onclick="Screendrink()">
  <img class="photo" src="${imgB}" alt="">
    <div class="drink-name">
         ${txtbebida}
    </div>
    <div class="drink-price">
    R$ ${BpriceF}</div>
    </div>
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
/******************************section add menu*********************** */
/*const pizzabutton = document.querySelectorAll('.pizza-area')
console.log(pizzabutton)
pizzabutton.addEventListener('click', item => {
  item.get('.sectionwindow').style.display = 'flex'
})*/
function Screen() {
  get('.sectionwindow').style.display = 'flex'
  let main = window.scrollTo(0, 500)
  if (main > 0) {
    window.scrollTo(0, 0)
  } else {
    window.scrollTo(0, 0.2)
  }
}
// function hot dog
function screenQ() {
  get('.sectionwindow').style.display = 'flex'
  let main = window.scrollTo(0, 500)
  if (main > 0) {
    window.scrollTo(0, 0)
  } else {
    window.scrollTo(0, 0.2)
  }
}
// function sanduiches
function sandScreen() {
  get('.sectionwindow').style.display = 'flex'
  let main = window.scrollTo(0, 500)
  if (main > 0) {
    window.scrollTo(0, 0)
  } else {
    window.scrollTo(0, 0.2)
  }
}
function ScreenPT() {
  get('.sectionwindow').style.display = 'flex'
  let main = window.scrollTo(0, 500)
  if (main > 0) {
    window.scrollTo(0, 0)
  } else {
    window.scrollTo(0, 0.2)
  }
}
function Screendrink() {
  get('.sectionwindow').style.display = 'flex'
  let main = window.scrollTo(0, 500)
  if (main > 0) {
    window.scrollTo(0, 0)
  } else {
    window.scrollTo(0, 0.2)
  }
}
// cancel function
const cancelbully = get('.cancel')
cancelbully.addEventListener('click', item => {
  get('.sectionwindow').style.display = 'none'
})
//adicionar function
const adicionar = get('.add')
adicionar.addEventListener('click', item => {
  get('.add-screen-pix').style.display = 'flex'
  get('.sectionwindow').style.display = 'none'
})
// function button fechar=closed
const fechar = get('#fechar')
fechar.addEventListener('click', item => {
  get('.add-screen-pix').style.display = 'none'
})
