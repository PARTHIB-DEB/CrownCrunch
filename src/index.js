let elem = document.getElementById('ham')
let b = document.getElementById('opham')
let c = document.getElementById('main')


export const hamrotate = () =>{
    if (elem.onclick){
        if (elem.style.transform === 'rotate(0deg)') {
            elem.style.transform = 'rotate(90deg)'
            main.style.transitionDuration = '0.5s'
            main.style.transitionTimingFunction = 'ease-in'
            main.style.transform = 'translateY(0px)'
        } else {
            elem.style.transform = 'rotate(0deg)'
            main.style.transitionDuration = '0.5s'
            main.style.transitionTimingFunction = 'ease-out'
            main.style.transform = 'translateY(-10rem)'
        }
    }
}