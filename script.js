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

// functions environment
function pizzaopen() {
  get('.cardapio-pizza').style.display = 'flex'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-açaiecreme').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
  get('.pricepizza').style.display = 'flex'
}
function cachoQuente() {
  get('.cardapio-Quente').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-açaiecreme').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
  get('.pricepizza').style.display = 'none'
}
function sanduiches() {
  get('.cardapio-sanduíches').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-açaiecreme').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
  get('.pricepizza').style.display = 'none'
}
function pasteis() {
  get('.cardapio-pateis').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-açaiecreme').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.pricepizza').style.display = 'none'
}
function bebida() {
  get('.cardapio-drink').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-açaiecreme').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
  get('.pricepizza').style.display = 'none'
}
function cremeacai() {
  get('.cardapio-açaiecreme').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
  get('.pricepizza').style.display = 'none'
}

// pizza enviroment
let names = pizzaaopen.map(e => e.name)
let identifier = pizzaaopen.map(dev => dev.id)
let description = pizzaaopen.map(e => e.description)
let photo = pizzaaopen.map(e => e.src)
let priceP = pizzaaopen.map(e => e.price)
// for loop of names, description and photo
for (let index = 0; index < description.length; ++index) {
  let element = description[index]
  let nameT = ''
  let areapictures = ''
  let pricePZ = ''
  let classidentifier = ''
  for (let index = 0; index < names.length; ++index) {}
  nameT = names[index]
  for (let index = 0; index < photo.length; ++index) {}
  areapictures = photo[index]
  for (let index = 0; index < priceP.length; index++) {}
  pricePZ = priceP[index]
  let PzA = pricePZ[0].toFixed(2)
  let pzB = pricePZ[1]
  let pzC = pricePZ[2]
  var spanmain = '5555'
  for (let index = 0; index < identifier.length; index++) {}
  classidentifier = identifier[index]
  get(
    '.pizza-item'
  ).innerHTML += `<div id="${classidentifier}"  onclick="Screen()"class="pizza-area">
  <img class="photo" src="${areapictures}" alt="">
  <div class="namep">${nameT}</div>
  <p class="description"> ${element}</p>
  <div class="price-pizza">
       
        <span> R$ ${PzA}
        <p  class="main">${pzB}, ${pzC}</p>
        </span>
       
       
         
  </div>
  </div>`
}
//************
// Cachorro Quente enviroment
let imgphoto = CachorroQ.map(e => e.img)
let namesQ = CachorroQ.map(e => e.name)
let descriptionQ = CachorroQ.map(e => e.description)
let priceHG = CachorroQ.map(e => e.price)
let idCq = CachorroQ.map(e => e.id)

let priceQ = ''
let txtQuente = ''
let quendesc = ''
let photoQ = ''
let idCachorroQ = ''
// for loop of names, description and photo
for (let index = 0; index < namesQ.length; ++index) {
  txtQuente = namesQ[index]

  for (let index = 0; index < descriptionQ.length; ++index) {}
  quendesc = descriptionQ[index]
  for (let index = 0; index < imgphoto.length; ++index) {}
  photoQ = imgphoto[index]
  for (let index = 0; index < priceHG.length; index++) {}
  priceQ = priceHG[index].toFixed(2)
  for (let index = 0; index < idCq.length; index++) {}
  idCachorroQ = idCq[index]
  console.log(idCachorroQ)
  get(
    '.quente-item'
  ).innerHTML += `<div id="${idCachorroQ}" onclick="screenQ()" class="quente-area">
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
let idSand = sanduiches2.map(e => e.id)
let idsnd = ''
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
  for (let index = 0; index < idSand.length; index++) {}
  idsnd = idSand[index]
  get(
    '.sanduíches-item'
  ).innerHTML += ` <div id="${idsnd}" class="area-Sand"  onclick="sandScreen()">
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
  ).innerHTML += `<div  class="pateis-area" onclick="ScreenPT()">
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

// pizza function
function Screen() {
  get('.sectionwindow').style.display = 'flex'
  let main = window.scrollTo(0, 500)
  if (main > 0) {
    window.scrollTo(0, 0)
  } else {
    window.scrollTo(0, 0.2)
  }
}
var div0 = get('#musarela')
div0.addEventListener('click', e => {
  if (div0 == get('#musarela')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'musarela')
    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div1 = get('#mista')
div1.addEventListener('click', e => {
  if (div1 == get('#mista')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'mista')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div2 = get('#frango')
div2.addEventListener('click', e => {
  if (div2 == get('#frango')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'frango')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})

var div3 = get('#diplomata')
div3.addEventListener('click', e => {
  if (div3 == get('#diplomata')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'diplomata')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div4 = get('#calabresa')
div4.addEventListener('click', e => {
  if (div4 == get('#calabresa')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'calabresa')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div5 = get('#cheddar')
div5.addEventListener('click', e => {
  if (div5 == get('#cheddar')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'cheddar')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div6 = get('#bacon')
div6.addEventListener('click', e => {
  if (div6 == get('#bacon')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'bacon')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})

var div7 = get('#portuguesa')
div7.addEventListener('click', e => {
  if (div7 == get('#portuguesa')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'portuguesa')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div8 = get('#queijo')
div8.addEventListener('click', e => {
  if (div8 == get('#queijo')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'queijo')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div9 = get('#sertaneja')
div9.addEventListener('click', e => {
  if (div9 == get('#sertaneja')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'sertaneja')
    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div10 = get('#toscana')
div10.addEventListener('click', e => {
  if (div10 == get('#toscana')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'toscana')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div11 = get('#modacasa')
div11.addEventListener('click', e => {
  if (div11 == get('#modacasa')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'modacasa')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div12 = get('#espanhola')
div12.addEventListener('click', e => {
  if (div12 == get('#espanhola')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'espanhola')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div13 = get('#brigadeiro')
div13.addEventListener('click', e => {
  if (div13 == get('#brigadeiro')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'brigadeiro')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div14 = get('#chocolate')
div14.addEventListener('click', e => {
  if (div14 == get('#chocolate')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'chocolate')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div15 = get('#cartola')
div15.addEventListener('click', e => {
  if (div15 == get('#cartola')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'cartola')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})
var div16 = get('#serenata')
div16.addEventListener('click', e => {
  if (div16 == get('#serenata')) {
    let pizzaID = pizzaaopen.filter(dev => dev.id == 'serenata')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.src
      mappingdiv.querySelector('#price1').innerHTML = item.price[0].toFixed(2)
      mappingdiv.querySelector('#price2').innerHTML = item.price[1].toFixed(2)
      mappingdiv.querySelector('#price3').innerHTML = item.price[2].toFixed(2)
    })
  }
})

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
var frangoQ = get('#FrangoQ')
frangoQ.addEventListener('click', e => {
  if (frangoQ == get('#FrangoQ')) {
    let pizzaID = CachorroQ.filter(dev => dev.id == 'FrangoQ')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.img
      mappingdiv.querySelector('.priceAll').innerHTML = item.price.toFixed(2)
    })
  }
})
var carneQ = get('#carneQ')
carneQ.addEventListener('click', e => {
  if (carneQ == get('#carneQ')) {
    let pizzaID = CachorroQ.filter(dev => dev.id == 'carneQ')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.img
      mappingdiv.querySelector('.priceAll').innerHTML = item.price.toFixed(2)
    })
  }
})
var mistoQ = get('#mistoQ')
mistoQ.addEventListener('click', e => {
  if (mistoQ == get('#mistoQ')) {
    let pizzaID = CachorroQ.filter(dev => dev.id == 'mistoQ')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.img
      mappingdiv.querySelector('.priceAll').innerHTML = item.price.toFixed(2)
    })
  }
})

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
var bauruEsP = get('#bauruEsP')
bauruEsP.addEventListener('click', e => {
  if (bauruEsP == get('#bauruEsP')) {
    let pizzaID = sanduiches2.filter(dev => dev.id == 'bauruEsP')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.img
      mappingdiv.querySelector('.priceAll').innerHTML = item.price.toFixed(2)
    })
  }
})
var Xburguer = get('#Xburguer')
Xburguer.addEventListener('click', e => {
  if (Xburguer == get('#Xburguer')) {
    let pizzaID = sanduiches2.filter(dev => dev.id == 'Xburguer')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.img
      mappingdiv.querySelector('.priceAll').innerHTML = item.price.toFixed(2)
    })
  }
})
var xDog = get('#xDog')
xDog.addEventListener('click', e => {
  if (xDog == get('#xDog')) {
    let pizzaID = sanduiches2.filter(dev => dev.id == 'Xburguer')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.img
      mappingdiv.querySelector('.priceAll').innerHTML = item.price.toFixed(2)
    })
  }
})
var Xfrango = get('#Xfrango')
Xfrango.addEventListener('click', e => {
  if (Xfrango == get('#Xfrango')) {
    let pizzaID = sanduiches2.filter(dev => dev.id == 'Xfrango')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.img
      mappingdiv.querySelector('.priceAll').innerHTML = item.price.toFixed(2)
    })
  }
})
var Xcarn = get('#Xcarn')
Xcarn.addEventListener('click', e => {
  if (Xcarn == get('#Xcarn')) {
    let pizzaID = sanduiches2.filter(dev => dev.id == 'Xfrango')

    pizzaID.map((item, index) => {
      let mappingdiv = get('.sectionwindow .add-display')
      mappingdiv.querySelector('.name-add').innerHTML = item.name
      mappingdiv.querySelector('.description-add').innerHTML = item.description
      mappingdiv.querySelector('.Photograph img').src = item.img
      mappingdiv.querySelector('.priceAll').innerHTML = item.price.toFixed(2)
    })
  }
})

/** pateis**/
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
