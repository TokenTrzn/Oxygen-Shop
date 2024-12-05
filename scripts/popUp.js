document.addEventListener('DOMContentLoaded', () => {

const popUp = document.getElementById('popUp')
const closeBtn = document.getElementById('exitIcon')
const popUpSendBtn = document.getElementById('popUp-btn')
const emailInput = document.getElementById('email-input')
const overlay = document.getElementById('overlay')

let isPopUpActive = false
localStorage.removeItem('popUpClosed')

const showPopUp = () => {
    if (!isPopUpActive && !localStorage.getItem('popUpClosed')) {
        popUp.classList.add('show')
        overlay.classList.add('show')
        isPopUpActive = true
    }
}

const closePopUp = () => {
    popUp.classList.remove('show')
    overlay.classList.remove('show')
    localStorage.setItem('popUpClosed', 'true')
}

setTimeout(showPopUp, 5000)

const showPopUpOnScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const pageHeight = document.documentElement.scrollHeight

    if (scrollPosition >= pageHeight * 0.25) {
        showPopUp()
        window.removeEventListener('scroll', showPopUpOnScroll)
    }
}

window.addEventListener('scroll', showPopUpOnScroll)
closeBtn.addEventListener('click', closePopUp)

})