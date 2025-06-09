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
            updateText(`Suddenly, a yokai crashes through the trees, heading straight for the shrine!

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
            updateText(`With a serious tone, the kitsune requests your aid: a mystical crystal must be found, and only you can help her get it.`);
            break;
        case 5:
            updateText(`You tread carefully through the thick forest, following the kitsune's quiet footsteps.

The trees begin to thin, and ahead, nestled between jagged cliffs, you spot a dark, looming cave entrance.

The air grows colder. Strange symbols glow faintly on the stone around the mouth of the cave.

Kitsune: "This is the Trial Chamber. Beyond this entrance lie riddles meant to guard ancient power. Only those with sharp minds may proceed."

A gust of wind escapes the cave — not natural, but whispering… as if it remembers every answer and failure.

Kitsune: "If you are ready... step forward."`)
            break;
        case 6:
            options(`I slip through cracks without a sound,
No shape I keep, no edge or bound.
I carry scent, I lift the leaf,
I howl in joy, or whisper grief.
You feel me pass, but can’t hold tight 
and I am used to —
What am I?`, `气`, `火`)
            window.removeEventListener("keydown", handleSpacePress);

            break;
        case 7:

            if (textBox.textContent === `You speak your answer aloud.

The symbols on the cave walls flicker... then fade to black.

A deep rumble shakes the ground, and the path forward seals shut with a deafening thud.

Kitsune stares at you — quiet, pained.

Kitsune: "No... that was not the answer."

She looks away, the glow in her eyes dimming.

Kitsune: "I had hoped you were the one. But the path cannot open to those who are unworthy."

Without another word, she turns and walks into the misty forest.`) {
                window.removeEventListener("keydown", handleSpacePress);

                updateText(`You are alone now, the silence of the sealed cave pressing in.

The trial has ended — not with glory, but with doubt.

Press R to restart.`)

            } else {

                updateText(`You step into the chamber, your footsteps echoing softly across the stone floor.

The air shifts — cooler, older, alive with a quiet energy.

Bioluminescent moss clings to the walls, casting a gentle glow across ancient carvings and forgotten relics.

At the center of the room, atop a worn pedestal, rests a strange object pulsing with light… a crystal unlike anything you've seen.

The kitsune follows close behind, her expression unreadable.

Kitsune: "Few have made it this far. Fewer still with wisdom."

She gestures toward the pedestal.

Kitsune: "That is what you came for. But be warned… the cave tests more than knowledge. It reveals what lies beneath."

A faint hum vibrates in your chest. Something is awakening.`);

            }
            break;
        case 8:
            updateText(`Your eyes drift toward a forgotten altar to the left of the crystal.

There, resting beneath strands of ancient silk and dusted with time, lies a helmet — forged from silver and etched with shifting runes.

The kitsune notices your gaze.

Kitsune: "Ah… the Helm of Knowledge. It sees beyond sight, remembers what mortals forget, and shields those brave enough to bear its weight."

You lift the helmet carefully. The moment your fingers touch the metal, warmth spreads through your mind — not heat, but *clarity*.

Visions, fragments of truth, languages you never studied, symbols you now understand — all pour into your thoughts.

As you place it on your head, a soft shimmer encases your body. Protection. Insight. Legacy.

Kitsune: "You chose wisely… But wisdom comes with burden. Are you prepared?"`);
            break;
        case 9:


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




        if (opt1 === 'Mask') {
            updateText(`You raise the fearsome oni mask to your face.

A chill runs down your spine as ancient energy pulses through you.

The air crackles.

The yokai freezes, sensing something… darker, more powerful.

With a haunting roar, the mask emits a wave of illusion and fear.

The yokai stumbles back, screeching, before vanishing into the trees.

Kitsune: “Clever one… you wield more than just strength. You understand fear and have the knowledge to use that fear. I suppose that's useful”`);
        } else if (opt1 === '气') {
            updateText(`You speak your answer aloud.

The symbols on the cave walls flicker... then fade to black.

A deep rumble shakes the ground, and the path forward seals shut with a deafening thud.

Kitsune stares at you — quiet, pained.

Kitsune: "No... that was not the answer."

She looks away, the glow in her eyes dimming.

Kitsune: "I had hoped you were the one. But the path cannot open to those who are unworthy."

Without another word, she turns and walks into the misty forest.`);

        }




        // stage++;
        saveProgress();
        window.addEventListener("keydown", handleSpacePress);
        // setTimeout(() => Start(), 1000); // ✅ slight delay for effect
    });

    button2.addEventListener('click', () => {
        optionSubmit();
        if (opt2 === "Katana") {
            updateText(`You grip the katana tightly, its blade gleaming in the shrine’s light.

With a cry, you charge the yokai head-on.

Steel clashes against shadow, sparks flying in the air.

The yokai howls but you press on, delivering a final strike that banishes it in a burst of smoke.

Kitsune: “You’re strong… and fearless. Perhaps even strong enough for what lies ahead.”`);

        } else if (opt2 === "火") {
            updateText(`You speak your answer with steady confidence.

For a moment, silence.

Then — the markings on the cave walls glow with a warm, golden light. The stone trembles... and slowly, the entrance rumbles open.

Kitsune smiles softly, her tails flickering with energy.

Kitsune: "Yes. You see the truth hidden beneath the surface."

She steps beside you, her voice now solemn.

Kitsune: "This place was built to guard ancient knowledge — and only those with insight may pass."

Together, you walk into the glowing chamber, shadows dancing along the ancient walls as the cave reveals its secrets...

The journey continues.`);

        }
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