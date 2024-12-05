document.addEventListener('DOMContentLoaded', () => {

    const image = document.getElementById('slider-img')
    const backImg = document.getElementById('slider-back')
    const nextImg = document.getElementById('slider-next')

    const images = [
        "./resources/sliderImg0.jpg",
        "./resources/sliderImg1.jpg",
        "./resources/sliderImg2.jpg",
        "./resources/sliderImg3.jpg",
        "./resources/sliderImg4.jpg"
    ]

    let itemIndex = 0
    const items = [
        document.getElementById('item0'),
        document.getElementById('item1'),
        document.getElementById('item2'),
        document.getElementById('item3'),
        document.getElementById('item4')
    ]

    const selectItem = (index) => {
        items[index].classList.add('item-selected')
    }

    const unSelectItem = (index) => {
        items[index].classList.remove('item-selected')
    }

    const toNextImg = () => {
        unSelectItem(itemIndex)
        itemIndex++
        if (itemIndex === items.length) {
            itemIndex = 0
        }
        selectItem(itemIndex)
        image.src = images[itemIndex]
        resetAutomaticInterval()
    }

    const toBackImg = () => {
        unSelectItem(itemIndex)
        itemIndex--
        if (itemIndex < 0) {
            itemIndex = 4
        }
        selectItem(itemIndex)
        image.src = images[itemIndex]
        resetAutomaticInterval()
    }

    const toImg = (index) => {
        unSelectItem(itemIndex)
        itemIndex = index
        image.src = images[itemIndex]
        selectItem(index)
        resetAutomaticInterval()
    }

    let automaticInterval
    const automaticItem = () => {
        automaticInterval = setInterval(() => {
            console.log(items.length)
            console.log(itemIndex)
            toNextImg()
        }, 5000)
    }

    const resetAutomaticInterval = () => {
        clearInterval(automaticInterval)
        automaticItem()
    }
    selectItem(itemIndex);
    image.src = images[itemIndex];
    automaticItem();

    nextImg.addEventListener('click', toNextImg);
    backImg.addEventListener('click', toBackImg);

    items.forEach((item, index) => {
        item.addEventListener('click', () => toImg(index));
    });

})