document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('exitIcon')
    const popUp = document.getElementById('popUp')
    const popUpSendBtn = document.getElementById('popUp-btn')
    const emailInput = document.getElementById('email-input')

    let isPopUpActive = false

    const showPopUp = () => {
        if (!isPopUpActive && !localStorage.getItem('popUpClosed')) {
            popUp.classList.add('show')
            isPopUpActive = true
        }
    }

    const closePopUp = () => {
        popUp.classList.remove('show')
        localStorage.setItem('popUpClosed', 'true')
    }

    setTimeout(showPopUp, 5000)

    const showPopUpOnScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight
        const pageHeight = document.documentElement.scrollHeight

        if (scrollPosition >= pageHeight * .25) {
            showPopUp()
            window.removeEventListener('scroll', showPopUpOnScroll)
        }
    }

    closeBtn.addEventListener('click', closePopUp)
    window.addEventListener('scroll', showPopUpOnScroll)

})