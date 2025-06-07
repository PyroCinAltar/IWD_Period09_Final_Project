// ----------- Inventory Elements -----------

const textBox = document.querySelector('.text');
const screenBox = document.querySelector('.screen');
const inventory = document.querySelector('.inv');
const inventoryList = document.querySelector('.inv-list');

const katana = document.getElementById('katana');
const mask = document.getElementById('mask');
const helmet = document.getElementById('helmet');
const crystal = document.getElementById('crystal');

function addKatana() {
    katana.style.display = 'flex';
}
function addMask() {
    mask.style.display = 'flex';
}
function addHelmet() {
    helmet.style.display = 'flex';
}
function addCrystal() {
    crystal.style.display = 'flex';
}

// ----------- Stage Tracking -----------

let stage = 0;

// ----------- Local Storage -----------

function saveProgress() {
    localStorage.setItem('stage', stage);
    localStorage.setItem('inventory', JSON.stringify({
        katana: katana.style.display === 'flex',
        mask: mask.style.display === 'flex',
        helmet: helmet.style.display === 'flex',
        crystal: crystal.style.display === 'flex'
    }));
}

function loadProgress() {
    const savedStage = localStorage.getItem('stage');
    const savedInventory = JSON.parse(localStorage.getItem('inventory'));

    if (savedStage !== null) {
        stage = parseInt(savedStage);
    }

    if (savedInventory) {
        if (savedInventory.katana) addKatana();
        if (savedInventory.mask) addMask();
        if (savedInventory.helmet) addHelmet();
        if (savedInventory.crystal) addCrystal();
    }
}

// ----------- Spacebar Handler -----------

function handleSpacePress(e) {
    if (e.code === 'Space') {
        stage++;
        Start();
        saveProgress();
    }
}
window.addEventListener("keydown", handleSpacePress);

// ----------- Text Box Handling -----------

function optionSubmit() {
    textBox.innerHTML = "";
}

function updateText(content) {
    textBox.innerHTML = `<p class="question">${content}</p>`;
}

// ----------- Story Flow Control -----------

function Start() {
    switch (stage) {
        case 0:
            addKatana();
            updateText(`You awaken in an enchanted forest. Soft light filters through the trees.
                
                Before you stands a small pink kitsune, its eyes watching you carefully.
                
                Kitsune: "Welcome, traveler. You have crossed into another world."
                
                Your gaze falls to the ground, where a gleaming katana lies waiting. You grab it`);
            break;
        case 1:
            updateText(`“Follow me. I must speak with you at the shrine.”

(The kitsune gracefully leads you through the forest until you reach an ancient shrine bathed in soft light.)

Kitsune: “This place holds many secrets. Tell me, what brings you here?”`);
            break;
        case 2:
            addMask();
            updateText(`(Suddenly, a yokai crashes through the trees, heading straight for the shrine!

You glance around in panic, your heart pounding.

Near the altar, you spot something...

A fearsome oni mask rests on a dusty pedestal, pulsing with strange energy.

You grab it and rush straight for the shrine with the kitsune trailing behind.`);
            break;
        case 3:
            options("How do you confront the yokai?", "Mask", "Katana");
            window.removeEventListener("keydown", handleSpacePress);
            break;
        case 4:
            updateText(`"With a serious tone, the kitsune requests your aid: a mystical crystal must be found, and only you can help her get it."`);
            break;
        case 5:
            updateText(`"After countless steps and trials, you finally reach the heart of the hidden glade. There, nestled in stone and light, rests the mystical crystal. The search is over —--------- you’ve found it."
 THE END`);
            break;
    }
    console.log(stage)
}

// ----------- Option Handler -----------

function options(question, opt1, opt2) {
    const p = document.createElement('p');
    p.classList.add('question');
    p.textContent = question;

    const button1 = document.createElement('button');
    button1.classList.add('option', 'option1', opt1);
    button1.textContent = opt1;

    const button2 = document.createElement('button');
    button2.classList.add('option', 'option2', opt2);
    button2.textContent = opt2;

    textBox.innerHTML = '';
    textBox.appendChild(p);
    textBox.appendChild(button1);
    textBox.appendChild(button2);

  button1.addEventListener('click', () => {
    optionSubmit();
    updateText(`You raise the fearsome oni mask to your face.

A chill runs down your spine as ancient energy pulses through you.

The air crackles.

The yokai freezes, sensing something… darker, more powerful.

With a haunting roar, the mask emits a wave of illusion and fear.

The yokai stumbles back, screeching, before vanishing into the trees.

Kitsune: “Clever one… you wield more than just strength. You understand fear and have the knowledge to use that fear. I suppose that's useful”`);
    // stage++;
    saveProgress();
    window.addEventListener("keydown", handleSpacePress);
    // setTimeout(() => Start(), 1000); // ✅ slight delay for effect
});

button2.addEventListener('click', () => {
    optionSubmit();
    updateText(`You grip the katana tightly, its blade gleaming in the shrine’s light.

With a cry, you charge the yokai head-on.

Steel clashes against shadow, sparks flying in the air.

The yokai howls but you press on, delivering a final strike that banishes it in a burst of smoke.

Kitsune: “You’re strong… and fearless. Perhaps even strong enough for what lies ahead.”`);
    // stage++; 
    saveProgress();
    window.addEventListener("keydown", handleSpacePress);
    // setTimeout(() => Start(), 1000); // ✅ slight delay for effect
});


    console.log(stage);
}

// ----------- Page Load Event -----------

window.addEventListener("load", () => {
    loadProgress();

    if (stage < 6) {
        Start();
    } else {
        updateText(`You've completed the story. Press R to restart.`);
    }
});

// ----------- Restart (R key) -----------

function handleRestart(e) {
    if (e.code === 'KeyR') {
        localStorage.clear();
        location.reload();
    }
}
window.addEventListener("keydown", handleRestart);


// `I slip through cracks without a sound,
// No shape I keep, no edge or bound.
// I carry scent, I lift the leaf,
// I howl in joy, or whisper grief.
// You feel me pass, but can’t hold tight —
// What am I?`

// `气`

// `火`