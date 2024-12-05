const returnToTop = document.getElementById('returnToTop')

const handleScroll = () => {
    if (window.scrollY > 500) { 
        returnToTop.classList.add('show');
    } else {
        returnToTop.classList.remove('show'); 
    }
}

const returnTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, 200)
}

returnToTop.addEventListener('click', returnTop)
window.addEventListener('scroll', handleScroll)