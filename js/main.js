const $ = document
const buttons = $.querySelectorAll('.button-color')


buttons.forEach(function(button){
    button.addEventListener('click' , changeTheme)
})

function changeTheme(event){
    let buttonColor = getComputedStyle(event.target)
    document.documentElement.style.setProperty('--brown' , buttonColor.backgroundColor)
    //console.log(buttonColor.backgroundColor)
}