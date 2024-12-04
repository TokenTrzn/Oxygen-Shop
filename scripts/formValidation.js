const formButton = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nameInput = document.getElementById('name-input')
    const nameValue = nameInput.value.trim()

    const emailInput = document.getElementById('email-input')
    const emailValue = emailInput.value.trim() 
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const checkBox = document.getElementById('checkbox')

    let isValid = true

    if (nameValue.length < 2 || nameValue.length > 100) {
        isValid = false
        nameInput.classList.add('invalid')
    } else {
        nameInput.classList.remove('invalid')
    }

    if (!emailRegex.test(emailValue)) {
        isValid = false
        emailInput.classList.add('invalid')
    } else {
        emailInput.classList.remove('invalid')
    }

    if (!checkBox.checked) {
        isValid = false
        checkBox.classList.add('invalid')
    } else {
        checkBox.classList.remove('invalid')
    }

    if (isValid) {
        alert('Formulario Válido')
    }
})