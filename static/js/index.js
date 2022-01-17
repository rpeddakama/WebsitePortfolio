const loader = document.querySelector('.loader')
const container = document.querySelector('.container')

function init() {
    console.log("YO")
    setTimeout(() => {
        loader.style.opacity = 0
        loader.style.display = 'none'

        container.style.display = 'flex'
        setTimeout(() => container.style.opacity = 1, 50);
    }, 4000);
}

init()