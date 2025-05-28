// LOADING SCREEN
const barEl = document.querySelector(".front")
const backEl = document.querySelector('.back')
const loadingContainer = document.querySelector('.loading-container')
const loading = document.querySelector('.Loading')

// Start Screen Variables
const title = document.querySelector('.title-screen')
const startBtn = document.querySelector('.start')
const startScreen = document.querySelector(".start-screen")

// Save File Variables
const backBtn =  document.querySelector('.back-to-startBtn')
const files = document.querySelector('.file-container')


let idx = 0;

updateNum()
function updateNum() {
    barEl.style.width = idx + "%";
    idx++;
    if (idx <= 100) {
        setTimeout(updateNum, 20)
        startScreen.style.display = "none"
        title.style.display = "none"
        startBtn.style.display = "none"
    } else {
        loadingContainer.style.display = 'none'
        startScreen.style.display = "block"
        title.style.display = "block"
        title.style.color = "white"
        startBtn.style.display = "block"
    }

    // if(idx > 100){
    //     startScreen.style.display = "block"
    // }
    // return
}
//------------ LOADING SCREEN END -------------------

// Start Screen

startBtn.addEventListener("click", ()=> {
         startScreen.style.display = "none"
        title.style.display = "none"
        startBtn.style.display = "none"
        files.style.display = "block"
})


// Save File Screen 