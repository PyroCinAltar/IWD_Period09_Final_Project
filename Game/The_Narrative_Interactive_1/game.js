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
                
                Your gaze falls to the ground, where a gleaming katana lies waiting. You grab it.`);
            break;
        case 1:
            updateText(`“Follow me. I must speak with you at the shrine.”

(The kitsune gracefully leads you through the forest until you reach an ancient shrine bathed in soft light.)

Kitsune: “This place holds many secrets. Tell me, what brings you here?”`);
// updateImage('/Game/Test_Image/Screenshot 2024-08-29 at 4.45.49 PM.png')
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

            } else if (textBox.textContent === `You speak your answer with steady confidence.

For a moment, silence.

Then — the markings on the cave walls glow with a warm, golden light. The stone trembles... and slowly, the entrance rumbles open.

Kitsune smiles softly, her tails flickering with energy.

Kitsune: "Yes. You see the truth hidden beneath the surface."

She steps beside you, her voice now solemn.

Kitsune: "This place was built to guard ancient knowledge — and only those with insight may pass."

Together, you walk into the glowing chamber, shadows dancing along the ancient walls as the cave reveals its secrets...`) {

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

Kitsune: "Ah… the Helmet of Knowledge. It sees beyond sight, remembers what mortals forget, and shields those brave enough to bear its weight."

You lift the helmet carefully. The moment your fingers touch the metal, warmth spreads through your mind — not heat, but *clarity*.

Visions, fragments of truth, languages you never studied, symbols you now understand — all pour into your thoughts.

As you place it on your head, a soft shimmer encases your body. Protection. Insight. Legacy.

Kitsune: "You chose wisely… But wisdom comes with burden. Are you prepared?"`);
            break;
        case 9:
            options(`Do you take the helmet?`, "Yes", "No")
            window.removeEventListener("keydown", handleSpacePress);


            break;
        case 10:
            updateText(`You step into the chamber. The air is unnaturally still — thick with silence, as if the cave itself is holding its breath.

Before you, resting atop a jagged pedestal of stone and bone, is the crystal. It pulses faintly, casting shifting lights across the walls in hues of violet and deep blue.

Kitsune: *"That is it… The Heart of the Hollow. It has waited for you."*

You approach slowly, each footstep echoing louder than the last. As your hand reaches out, the crystal seems to respond — glowing brighter with each inch.

Fingers close around its surface — it's warm, humming with a rhythm like a heartbeat.

Suddenly, the chamber trembles faintly. A surge of energy courses through your body. Visions flash: forests blooming, stars falling, the world bending.

The kitsune’s eyes widen, both in awe and fear.

Kitsune: *"It has chosen you. The crystal accepts your touch… but now the world will watch what you do with its gift."*`);
            addCrystal()
            break;
        case 11:
            if (getComputedStyle(helmet).display === 'flex') {
                updateText(`You stand at the crossroads, the wind brushing against your face like a whisper from the unknown. The path home calls with memories of warmth and simplicity… but your feet refuse to move.

You turn to Kitsune, her gaze waiting—uncertain, yet hopeful.

*“No,”* you say, voice steady. *“There’s more for me here. I need to see this through.”*

Kitsune’s eyes glimmer with approval, the faintest smile touching her lips.

Kitsune: *"Then the spirit within you has awakened. Few choose the unknown willingly. Fewer still are meant to walk it."*

The mist parts before you as if the forest itself senses your resolve. The trees lean in. The chamber ahead hums with ancient energy.

You are no longer a visitor here.

**You’ve chosen the path of purpose. You stay. And the real journey begins.**`);

            } else {
                options("What do you do with your newfound power?", "Return-Home", "Stay-Here")
                window.removeEventListener("keydown", handleSpacePress);

            }
            break;
        case 12:
            if (textBox.textContent === `You stand at the crossroads, the wind brushing against your face like a whisper from the unknown. The path home calls with memories of warmth and simplicity… but your feet refuse to move.

You turn to Kitsune, her gaze waiting—uncertain, yet hopeful.

*“No,”* you say, voice steady. *“There’s more for me here. I need to see this through.”*

Kitsune’s eyes glimmer with approval, the faintest smile touching her lips.

Kitsune: *"Then the spirit within you has awakened. Few choose the unknown willingly. Fewer still are meant to walk it."*

The mist parts before you as if the forest itself senses your resolve. The trees lean in. The chamber ahead hums with ancient energy.

You are no longer a visitor here.

**You’ve chosen the path of purpose. You stay. And the real journey begins.**`) {
                updateText(`Unknowingly, above you, a figure in black watches over you, katana gripped in one hand, pieces of paper on the other. He watches you intently, with wonder.
                    The End.......                       Press R to restart.
                    `)
            } else {
                updateText(`The End.......                       Press R to restart.`)
            }
    }
    console.log(stage)
}


//IMAGE FUNCTION

function updateImage(image){
    screenBox.style.background = `url("${image}")`
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

        } else if (opt1 === 'Yes') {
            updateText(`Your gaze lingers on the strange object resting upon the stone altar — a helmet, ancient yet gleaming with an ethereal glow. Symbols flicker across its surface like whispers of a forgotten language.

Kitsune: *"That is no ordinary helm... It was crafted by spirits who see beyond time. Few have dared to wear it. Fewer still have understood it."*

You reach forward, drawn by something deeper than curiosity — something calling to your mind.

As your fingers wrap around the edges and you lift it, a whisper floods your thoughts — **not in words, but in understanding**. The helmet is warm, pulsing like it remembers every answer ever spoken.

You place it on your head.

For a moment, the world stands still.

Your thoughts sharpen. Echoes of truths you’ve never known come rushing in. Ancient riddles unravel. Hidden dangers make sense. And with it all... a calm, like unseen armor settling over your shoulders.

Kitsune: *"The Helmet of Knowledge has accepted you. Use its gift wisely — for insight is power, but it is also burden."*`)
            addHelmet()
        } else if (opt1 === 'Return-Home') {


            updateText(`You pause at the crossroads, eyes lingering on the winding path that disappears into mist and mystery. Behind you, the trail home is quiet, familiar... safe.

Kitsune watches you in silence, her nine tails curling like question marks in the air.

Kitsune: *"So... you would turn back now?"*

You nod slowly.

*“I’ve seen enough. Whatever lies ahead—it’s not my path.”*

Kitsune: *"Few admit their limits. Fewer still choose peace over glory. Perhaps there's wisdom in your decision..."*

As you step away from the unknown and toward the life you once knew, a breeze carries the fading scent of blossoms and burnt incense — the last trace of the sacred.

*Maybe you’ll never know what waited beyond the veil... but some journeys must wait for another time.*

And so, with a heart half heavy and half relieved,  
**you go home.**`);

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

Together, you walk into the glowing chamber, shadows dancing along the ancient walls as the cave reveals its secrets...`);

        } else if (opt2 === 'No') {
            updateText(`Your eyes scan the room, stopping on the ancient helmet resting upon the altar — a relic humming faintly with forgotten wisdom. Its surface is etched with symbols that seem to shimmer as if alive.

Kitsune: *"The Helmet of Knowledge... it grants clarity, protection — even glimpses of what lies ahead. Many would take it without hesitation."*

You take a breath, feeling its pull... but you resist.

*You turn away.*

Kitsune blinks, surprised, but not disapproving.

Kitsune: *"You choose to walk forward with your own mind, unclouded by the burdens of forgotten minds. Courage, or folly? Time will decide."*

As you step past the altar, the helmet dims — almost as if it respects your choice. The air grows colder, the path more uncertain, but your resolve burns brighter.

You will face what comes with nothing but your own strength... and your will.`)
        } else if (opt2 === 'Stay-Here') {

            updateText(`You stand at the crossroads, the wind brushing against your face like a whisper from the unknown. The path home calls with memories of warmth and simplicity… but your feet refuse to move.

You turn to Kitsune, her gaze waiting—uncertain, yet hopeful.

*“No,”* you say, voice steady. *“There’s more for me here. I need to see this through.”*

Kitsune’s eyes glimmer with approval, the faintest smile touching her lips.

Kitsune: *"Then the spirit within you has awakened. Few choose the unknown willingly. Fewer still are meant to walk it."*

The mist parts before you as if the forest itself senses your resolve. The trees lean in. The chamber ahead hums with ancient energy.

You are no longer a visitor here.

**You’ve chosen the path of purpose. You stay. And the real journey begins.**`);


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

    if (stage < 11) {
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