const canvas = document.querySelector('.canvas');
const image = document.querySelector('.canvas-image');
const ctx = canvas.getContext('2d');
const inputs = document.querySelector('.inputs');

// Button Selectors
const btn1 = document.getElementById('btn-bg-1');
const btn2 = document.getElementById('btn-bg-2');

// --- EVENT LISTENERS ---
inputs.fullname.addEventListener('keyup', render);
inputs.course.addEventListener('keyup', render);
inputs.date.addEventListener('keyup', render);
inputs.signature.addEventListener('keyup', render);

// Button Listeners
btn1.addEventListener('click', (e) => {
    e.preventDefault(); // Stop page scrolling/refreshing
    changeBackground('./images/certificate.png');
});

btn2.addEventListener('click', (e) => {
    e.preventDefault(); 
    changeBackground('./images/certificate-alt.png');
});

// --- CORE FUNCTIONS ---

function changeBackground(newSrc) {
    // 1. Assign the new source
    image.src = newSrc;

    // 2. Wait for it to load before drawing
    image.onload = () => {
        // Update canvas size to match the new image
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        // Redraw everything
        render();
    };
    
    // 3. Handle errors (e.g., file not found)
    image.onerror = () => {
        console.error("Could not load image:", newSrc);
    };
}

function render() {
  // Safety check to ensure we don't draw on a 0x0 canvas
  if (canvas.width === 0 || canvas.height === 0) return;

  // Clear and Draw Background
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);

  // Text Settings
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 4;
  ctx.textAlign = 'center'; 
  ctx.fillStyle = '#000000'; 

  // --- RECIPIENT NAME ---
  ctx.font = 'bold 75px Carlito'; 
  ctx.fillText(inputs.fullname.value.trim(), 620, 850);

  // --- COURSE TITLE ---
  ctx.font = '60px Carlito';
  ctx.fillText(inputs.course.value.toUpperCase().trim(), 620, 1080);

  // --- DATE ---
  ctx.font = '40px Carlito';
  ctx.fillText(inputs.date.value.toUpperCase().trim(), 900, 1500);

  // --- SIGNATURE ---
  ctx.font = '60px "Great Vibes", cursive'; 
  ctx.fillText(inputs.signature.value.trim(), 300, 1500);
}

// --- INITIALIZATION ---
onload = () => {
    inputs.reset();

    // Handle initial image load
    if (image.complete && image.naturalWidth > 0) {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        render();
    } else {
        image.onload = () => {
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            render();
        };
    }

    // Wait for fonts to be ready then re-render to ensure correct font usage
    document.fonts.ready.then(() => {
        render();
    });
};