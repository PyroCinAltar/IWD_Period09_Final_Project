// LOADING SCREEN
const barEl = document.querySelector(".front")
const backEl = document.querySelector('.back')
const loadingContainer = document.querySelector('.loading-container')
const loading = document.querySelector('.Loading')

// Start Screen Variables
const title = document.querySelector('.title-screen')
const startBtn = document.querySelector('.start')

    // Save File Variables

const files = document.querySelector('.file-container')


let idx = 0;

updateNum()
function updateNum() {
    barEl.style.width = idx + "%";
    idx++;
    if (idx < 101) {
        setTimeout(updateNum, 20)
    } else {
        loadingContainer.style.display = 'none'
    }
    return
}
//------------ LOADING SCREEN END -------------------

