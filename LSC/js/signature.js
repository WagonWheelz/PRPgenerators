const canvas = document.querySelector('.canvas');
const image = document.querySelector('.canvas-image');
const ctx = canvas.getContext('2d');
const inputs = document.querySelector('.inputs');
const ranks = document.querySelector('.ranks');

//images preloaded
let images = {};
let rank = null;

// Rank Button Logic (Kept safe in case you add buttons back later)
if (ranks) {
    ranks.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT') {
            // Setting class, image
            Array.from(ranks.children).forEach((each) =>
                each.classList.remove('btn-active')
            );
            e.target.classList.add('btn-active');
            rank = e.target;
            render();
        }
    });
}

const render = () => {
    // Reset
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.shadowOffsetY = 0;
    // Draw Image
    ctx.drawImage(image, 0, 0);
    
    // Draw Rank Logo (If selected via buttons)
    if (rank !== null) {
        let logo = new Image();
        logo.src = images[rank.name].src;
        ctx.drawImage(logo, 465, 105);
    }

    // Set text properties
    ctx.shadowOffsetY = 5;
    ctx.shadowOffsetx = 4;
    ctx.shadowColor = 'rgb(0,0,0)';
    ctx.shadowBlur = 4;

    // --- NAME ---
    ctx.font = '46px Source Sans Pro';
    ctx.textAlign = 'left';
    // X=330, Y=153 (Preserved)
    ctx.fillText(inputs.fullname.value.toUpperCase().trim(), 330, 153);

    ctx.shadowOffsetY = 3;
    ctx.shadowOffsetx = 3;
    ctx.shadowBlur = 1;

    // --- RANK (Text Input) ---
    ctx.font = '40px Source Sans Pro';
    ctx.textAlign = 'left';
    // X=330, Y=195 (Preserved)
    ctx.fillText(inputs.rank.value.toUpperCase().trim(), 330, 195);

    // --- DIVISIONS ---
    ctx.font = '30px Source Sans Pro';
    ctx.textAlign = 'left';
    // X=330, Y=233 (Preserved)
    ctx.fillText(inputs.line1.value.toUpperCase().trim(), 330, 233);

    ctx.font = '30px Source Sans Pro';
    ctx.textAlign = 'left';
    // X=330, Y=263 (Preserved)
    ctx.fillText(inputs.line2.value.toUpperCase().trim(), 330, 263);
};

// --- Event Listeners ---
inputs.fullname.addEventListener('keyup', () => {
    render();
});

// Added Rank Listener (Required for text input)
inputs.rank.addEventListener('keyup', () => {
    render();
});

inputs.line1.addEventListener('keyup', () => {
    render();
});
inputs.line2.addEventListener('keyup', () => {
    render();
});

onload = () => {
    inputs.reset();
    loadImages(sources);

    // Set canvas properties
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0);
    ctx.textAlign = 'left';
    ctx.fillStyle = 'white';
};

const loadImages = (sources) => {
    for (var img in sources) {
        images[img] = new Image();
        images[img].src = sources[img];
    }
};

const sources = {
    chief: './images/chief.png',
    assistantChief: './images/assistant-chief.png',
    deputyChief: './images/deputy-chief.png',
    captain: './images/captain.png',
    lieutenant: './images/lieutenant.png',
    leadParamedic: './images/lead-paramedic.png',
    paramedic: './images/paramedic.png',
    masterEmt: './images/master-emt.png',
    seniorEmt: './images/senior-emt.png',
    advancedEmt: './images/advanced-emt.png',
    emt: './images/emt.png',
    trainee: './images/trainee.png',
};