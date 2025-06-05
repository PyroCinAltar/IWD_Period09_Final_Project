const textBox = document.querySelector('.text')
const screenBox = document.querySelector('.screen')
const inventory = document.querySelector('.inv')
const inventoryList = document.querySelector('.inv-list')
const Option1 = document.querySelector(".option1")
const Option2 = document.querySelector(".option2")





//  Inventory
const katana = document.getElementById('katana')
const mask = document.getElementById('mask')
const helmet = document.getElementById('helmet')
const crystal = document.getElementById('crystal')

function addKatana() {
    katana.style.display = 'flex'
}
function addMask() {
    mask.style.display = 'flex'
}
function addMelmet() {
    helmet.style.display = 'flex'
}
function addCrystal() {
    crystal.style.display = 'flex'
}




// Functions needed: Dialouge, Progression, Autosave, Inventory, Options, Riddle Text box and button, cutscenes(for the endings)

let forestText = []
let shrineText = []
let entraceText = []
let caveText = []
let newText;

//Function for the start

let stage

function Start() {
    //Starting items

    //adding div to the screen div

    //Starting message
    updateText(`You awaken in an enchanted forest. Soft light and lavendar mist filters through the sakura blossoms.

Before you stands a small pink kitsune, its eyes watching you carefully, studying your every move.

Kitsune: "Welcome, traveler. You have crossed into another world."

Your gaze falls to the ground, where a gleaming katana lies. You grab it under the sense that you might need it.`)
    addKatana()
    
    

    changeText()


    //Potentially add items that could be equipped in 
    //inventory. Could also add a function?
}
Start()


if (Start()) {
    const newText = `“Follow me. There's something important at the shrine.”

(The kitsune gracefully leads you through the forest until you reach an ancient shrine bathed in soft light.)

Kitsune:
“This place holds many secrets. Tell me, what brings you here?”`
    changeText(newText)
}
//








//function for changing the text
function changeText(newText) {
    window.addEventListener("keydown", (e) => {
        if (e.code === 'Space') {
            updateText(newText)
        }
    })
}


//TEXT 
function updateText(content) {
    textBox.innerHTML = `<p class="question">${content}</p>`;
}

function options(question, option1, option2) {
    let p = document.createElement('p')
    p.classList.add('question')
    p.textContent = question

    let button1 = document.createElement('button')
    button1.classList.add('option')
    button1.classList.add('option1')
    button1.classList.add(option1)
    button1.textContent = option1

    let button2 = document.createElement('button')
    button2.classList.add('option')
    button2.classList.add('option2')
    button2.classList.add(option2)
    button2.textContent = option2

    textBox.appendChild(p)
    textBox.appendChild(button1)
    textBox.appendChild(button2)

}

function optionSubmit() {
    textBox.innerHTML = ''
}

function addText(question) {
    textBox.innerHTML = `<p class="question">${question}</p>
                    <input type="text" class="input col-sm-3">
                    <button class="btn">Submit</button> `
}




