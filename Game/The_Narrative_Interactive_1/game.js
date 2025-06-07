const textBox = document.querySelector('.text');
const screenBox = document.querySelector('.screen');
const inventory = document.querySelector('.inv');
const inventoryList = document.querySelector('.inv-list');

// Inventory Items
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

// Stage control
let stage = 0;

// Spacebar handler (global)
function handleSpacePress(e) {
    if (e.code === 'Space') {
        Start();
    }
}

// Add listener initially
window.addEventListener("keydown", handleSpacePress);

// Submit
function optionSubmit() {
    textBox.innerHTML = "";
}

// Text update helper
function updateText(content) {
    textBox.innerHTML = `<p class="question">${content}</p>`;
}

// Main flow
function Start() {
    switch (stage) {
        case 0:
            addKatana();
            updateText(`You awaken in an enchanted forest. Soft light filters through the trees.

Before you stands a small pink kitsune, its eyes watching you carefully.

Kitsune: "Welcome, traveler. You have crossed into another world."

Your gaze falls to the ground, where a gleaming katana lies waiting. You grab it.`);
            break;
        case 1:
            updateText(`“Follow me. I must speak with you at the shrine.”

(The kitsune gracefully leads you through the forest until you reach an ancient shrine bathed in soft light.)

Kitsune: “This place holds many secrets. Tell me, what brings you here?”`);
            break;
        case 2:
            updateText(`Suddenly, a yokai crashes through the trees, heading straight for the shrine!

You glance around in panic, your heart pounding.

Near the altar, you spot something...

A fearsome oni mask rests on a dusty pedestal, pulsing with strange energy.

You grab it and rush straight for the shrine with the kitsune trailing behind.`);
            break;
        case 3:
            options("How do you confront the yokai?", "Mask", "Katana");
            window.removeEventListener("keydown", handleSpacePress); // Disable spacebar
            break;
        case 4:
            // addCrystal();
            updateText(`"With a serious tone, the kitsune requests your aid: a mystical crystal must be found, and only you can help her get it."`);
            break;
        default:
            updateText(`"After countless steps and trials, you finally reach the heart of the hidden glade. There, nestled in stone and light, rests the mystical crystal. The search is over —--------- you’ve found it."
 THE END
`);
            break;
    }

    stage++;
}

// Options display + listeners
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

Kitsune: “Clever one… you wield more than just strength. You understand fear.”`);

        window.addEventListener("keydown", handleSpacePress); // Re-enable spacebar
    });

    button2.addEventListener('click', () => {
        optionSubmit();
        updateText(`You grip the katana tightly, its blade gleaming in the shrine’s light.

With a cry, you charge the yokai head-on.

Steel clashes against shadow, sparks flying in the air.

The yokai howls but you press on, delivering a final strike that banishes it in a burst of smoke.

Kitsune: “You’re strong… and fearless. Perhaps even strong enough for what lies ahead.”`);

        window.addEventListener("keydown", handleSpacePress); // Re-enable spacebar
    });
}

