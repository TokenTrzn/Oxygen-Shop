document.addEventListener('DOMContentLoaded', () => {

    const popUp = document.getElementById('popUp')
    const closeBtn = document.getElementById('exitIcon')
    const popUpSendBtn = document.getElementById('popUp-btn')
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const error = document.getElementById('popUp-error')
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

    popUpSendBtn.addEventListener('click', () => {
        const emailInput = document.getElementById('popUp-email-input')
        const emailValue = emailInput.value.trim()
        if (!emailRegex.test(emailValue)) {
            emailInput.classList.add('invalid')
            error.classList.add('show')
        } else {
            emailInput.classList.remove('invalid')
            error.classList.remove('show')
            alert('Thanks to subscribe!')
            closePopUp()

            const formData = { email: emailValue }
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            }).then(response => {
                return response.json()
            }).then(json => {
                console.log(json)
            }).catch((error) => {
                console.log(error)
            })
        }

    })

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