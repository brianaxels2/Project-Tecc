//slider-show-comentários
let totalSlides2 = document.querySelectorAll('.slider-item2').length
let currentSlider2 = 0

document.querySelector('.slider-width2').style.width = `calc(100vw * ${totalSlides2})`
document.querySelector('.slider-controls2').style.height = `${document.querySelector('#slider-show2').clientHeight}px`

function goPrev2(){
    currentSlider2--;
    if (currentSlider2 < 0){
        currentSlider2 = totalSlides2 - 1;
    }
    updateMargin2()
}
function goNext2(){
    currentSlider2++;
    if (currentSlider2 > (totalSlides2 -1)){
        currentSlider2 = 0;
    }
    updateMargin2()
}
function updateMargin2(){
    let sliderItemWidth2 = document.querySelector('.slider-item2').clientWidth
    let newMargin2 = (currentSlider2 * sliderItemWidth2)

    document.querySelector('.slider-width2').style.marginLeft = `-${newMargin2}px`
}
setInterval(goNext2, 5000)

// scroll suave
const menuItens = document.querySelectorAll('.menu a, .menu-mobile a')

menuItens.forEach(item => {
    item.addEventListener('click', scrollClickSection)
})

function scrollClickSection(event){
    event.preventDefault()
    let element = event.target
    let id = element.getAttribute('href')
    let to = document.querySelector(id).offsetTop

    window.scroll({
        top: to,
        behavior: 'smooth',
    })
}

// Abrir-menu
const menu = document.querySelector('.menuMobile')

function openMenu(){
    const ul = document.querySelector('.ul')
    ul.classList.toggle('active')
}

menu.addEventListener('click', openMenu)