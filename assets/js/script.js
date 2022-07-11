// Function to return they same
const get = el => document.querySelector(el)
const getAll = el => document.querySelectorAll(el)

// functions environment

function pizzaopen() {
  get('.cardapio-pizza').style.display = 'flex'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
  get('.pricepizza').style.display = 'flex'
  get('.priceAll').style.display = 'none'
}

function cachoQuente() {
  get('.cardapio-Quente').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
  get('.pricepizza').style.display = 'none'
}

function sanduiches() {
  get('.cardapio-sanduíches').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
  get('.pricepizza').style.display = 'none'
}

function ptmain() {
  get('.cardapio-pateis').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-drink').style.display = 'none'
  get('.pricepizza').style.display = 'none'
}

function drink() {
  get('.cardapio-drink').style.display = 'flex'
  get('.cardapio-pizza').style.display = 'none'
  get('.cardapio-Quente').style.display = 'none'
  get('.cardapio-sanduíches').style.display = 'none'
  get('.cardapio-pateis').style.display = 'none'
  get('.pricepizza').style.display = 'none'
}
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
