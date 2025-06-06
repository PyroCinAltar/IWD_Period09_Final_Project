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


// let forestText = ["You awaken in an enchanted forest. Soft light and lavendar mist filters through the sakura blossoms.", 
//     "Before you stands a small pink kitsune, its eyes watching you carefully, studying your every move.", 
//     "Its face softens.", 
//     `"Welcome, traveler. You have crossed into another world."`, 
//     "Your gaze falls to the ground, where a gleaming katana lies. You grab it under the sense that you might need it.", ]

// let shrineText = ["You arrive at the shrine, and the kitsune offers you some tea.", 
//     `"Have a seat. I have much to discuss with you."`, 
//     `"My name is ______ and I am very pleased to meet you."`,

//     "Oh, you are in the island of T--", 
//     "Suddenly, a yokai appears, grabbing everything on sight.", 
//     "You run and hide behind a table. Out of the corner of your eye, you see an oni mask and grab it without any thought. You hear footsteps approach you.", ""]

// let entraceText = []

// let caveText = []

// let useMask = []
// let useKatana = []
// let leftDoor = []
// let rightDoor = []


let newText;

//Function for the start

let stage = 0

function Start() {
    //Starting items

    //adding div to the screen div

    //Starting message
    updateText(`You awaken in an enchanted forest. Soft light and lavendar mist filters through the sakura blossoms.

        Before you stands a small pink kitsune, its eyes watching you carefully, studying your every move.

        Kitsune: "Welcome, traveler. You have crossed into another world."

Your gaze falls to the ground, where a gleaming katana lies. You grab it under the sense that you might need it.`)
    addKatana()

    stage ++


    //Potentially add items that could be equipped in 
    //inventory. Could also add a function?
    
    if (stage === 1) {
       newText = `“Follow me. I must speak with you at the shrine.”
    
    (The kitsune gracefully leads you through the forest until you reach an ancient shrine bathed in soft light.)
    
    Kitsune:
    “This place holds many secrets. Tell me, what brings you here?”`
       changeText(newText)
    }
    changeText(newText)
    alert("klsadfjsa")
}
console.log(newText)

Start()

if(stage === 2) {
   newText = `Suddenly, a yokai crashes through the trees, heading straight for the shrine!

You glance around in panic your heart pounding.

Near the altar, you spot something...

A fearsome oni mask rests on a dusty pedestal, pulsing with strange energy.

You grab it and rush straight fohr the shrine with the kitsune trailing behind.
`
}

// if(stage == 0) {
 
// changeText( `You awaken in an enchanted forest. Soft light filters through the trees.

// Before you stands a small pink kitsune, its eyes watching you carefully.

// Kitsune: "Welcome, traveler. You have crossed into another world."

// Your gaze falls to the ground, where a gleaming katana lies waiting.`)
// }else











//function for changing the text
function changeText(newTexts) {
    window.addEventListener("keydown", (e) => {
        if (e.code === 'Space') {
            updateText(newTexts)
            console.log(stage)
            stage ++
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




