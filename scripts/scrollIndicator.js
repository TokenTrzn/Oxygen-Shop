const percentageScroller = document.getElementById('scrollBar')

const scrollState = () => {
    const scrollHeight = document.body.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const userHeight = window.innerHeight
    const scrollPercentage = (scrollTop / (scrollHeight - userHeight) * 100)
    percentageScroller.style.width = `${scrollPercentage}%`
}

window.addEventListener('scroll', () => {
    scrollState();
})