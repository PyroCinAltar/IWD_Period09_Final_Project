const textBox = document.querySelector('.text')
const screenBox = document.querySelector('.screen')
const inventory = document.querySelector('.inv')
const inventoryList = document.querySelector('.inv-list')
const Option1 = document.querySelector("#Option1")
const Option2 = document.querySelector("#Option2")

// Functions needed: Dialouge, Progression, Autosave, Inventory, Options, Riddle Text box and button, cutscenes(for the endings)


//Function for the start
function Start() {
    //Starting items
    addKatana()
    //adding div to the screen div
    
    //changing text content of the text div
    
    
    //Potentially add items that could be equipped in 
    //inventory. Could also add a function?
} 
Start()

//TEXT 
function updateText(content){ 
    textBox.innerHTML = `<p>${content}</p>`;
}




//  Inventory
const katana = document.getElementById('katana')
const mask = document.getElementById('mask')
const helmet = document.getElementById('helmet')
const crystal = document.getElementById('crystal')

function addKatana() {
    katana.style.display='flex'
}
function addMask() {
    mask.style.display='flex'
}
function addMelmet() {
    helmet.style.display='flex'
}
function addCrystal() {
    crystal.style.display='flex'
}

