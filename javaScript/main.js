'use strict'

let tabcontent = document.querySelectorAll('.tabcontent')
let tabheader__item = document.querySelectorAll('.tabheader__item')
let offer__slide = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let current = document.querySelector('#current')
let modal = document.querySelector('.modal')
let txt_us = document.querySelector('.btn_white')
let txt_us1 = document.querySelector('.btn_dark')
let xxx = document.querySelector('.modal__close')

let i = 0;
let x = 1


for(let i = 0 ; i < tabcontent.length; i++){
    tabcontent[i].style.display = 'none'
    }

tabcontent[0].style.display = 'block'

for(let i = 0; i < tabheader__item.length ; i++) {
    tabheader__item[i].addEventListener('click', () => {
        for(let x = 0; x < tabcontent.length; x++){
            tabcontent[x].style.display = 'none'
            tabheader__item[x].classList.remove('tabheader__item_active')
        }
        tabcontent[i].style.display = 'block'
        tabheader__item[i].classList.add('tabheader__item_active')
    })
}

for ( let i = 0; i< offer__slide.length; i++){
    offer__slide[i].style.display = 'none'
}

offer__slide[0].style.display = 'block'


next.addEventListener('click' , () => {
    if ( i < 3){
        offer__slide[i].style.display = 'none'
        i++ ; x++
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`
    }else{
        offer__slide[i].style.display = 'none'
        i = 0 ; x = 1
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`
    }
})

prev.addEventListener('click' , () => {
    if (i > 0){
        offer__slide[i].style.display = 'none'
        i--; x--
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`
    }else{
        offer__slide[i].style.display = 'none'
        i = 3; x = 4
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`
    }
})

modal.style.display = 'none'

txt_us.addEventListener('click' , () => {
    modal.style.display = 'block'
})

txt_us1.addEventListener('click' , () => {
    modal.style.display = 'block'
})

xxx.addEventListener('click' , () => {
    modal.style.display = 'none'
})