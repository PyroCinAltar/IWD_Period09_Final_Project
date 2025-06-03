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

// Start file buttons
const linkBtn1 = document.querySelector(".linkBtn1")
const linkBtn2 = document.querySelector(".linkBtn2")
const linkBtn3 = document.querySelector(".linkBtn3")


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
        backBtn.style.display = "none"
        files.style.display = "none"
    } else {
        loadingContainer.style.display = 'none'
        startScreen.style.display = "block"
        title.style.display = "block"
        title.style.color = "white"
        startBtn.style.display = "block"
        // Hides the back button
        backBtn.style.display = "none"
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
        //back button display
        backBtn.style.display = "block"
})

//BACK BUTTON DISPLAY START
backBtn.addEventListener("click", () => {
    startScreen.style.display = "block"
    title.style.display = "block"
    startBtn.style.display = "block"
    backBtn.style.display = "none"
    files.style.display = "none"
})

//File start 
linkBtn1.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "The_Narrative_Interactive_1/index.html"
})
linkBtn2.addEventListener("click", (e) => {
    e.preventDefault()
})

linkBtn3.addEventListener("click", (e) => {
    e.preventDefault()
})





//Storage //







//BACK BUTTON DISPLAY END


// Save File Screen 