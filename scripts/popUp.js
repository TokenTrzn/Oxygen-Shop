document.addEventListener('DOMContentLoaded', () => {

const popUp = document.getElementById('popUp')
const closeBtn = document.getElementById('exitIcon')
const popUpSendBtn = document.getElementById('popUp-btn')
const emailInput = document.getElementById('email-input')
const overlay = document.getElementById('overlay')

let isPopUpActive = false


const showPopUp = () => {
    if (!isPopUpActive && !localStorage.getItem('popUpClosed')) {
        popUp.classList.add('show')
        overlay.classList.add('show')
        isPopUpActive = true
    }
}

const showPopUpOnScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const pageHeight = document.documentElement.scrollHeight

    if (scrollPosition >= pageHeight * 0.25) {
        showPopUp()
        window.removeEventListener('scroll', showPopUpOnScroll)
    }
}

const closePopUp = () => {
    popUp.classList.remove('show')
    overlay.classList.remove('show')
    localStorage.removeItem('popUpClosed')
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isPopUpActive) {
        closePopUp()
    }
})

overlay.addEventListener('click', () => {
    if (isPopUpActive) {
        closePopUp()
    }
})


setTimeout(showPopUp, 5000)
window.addEventListener('scroll', showPopUpOnScroll)
closeBtn.addEventListener('click', closePopUp)

})