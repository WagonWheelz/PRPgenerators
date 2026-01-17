const canvas = document.querySelector('.canvas');
const image = document.querySelector('.canvas-image');
const ctx = canvas.getContext('2d');
const inputs = document.querySelector('.inputs');

// --- EVENT LISTENERS ---
// We listen to the entire form for any 'keyup' event to trigger a redraw
inputs.addEventListener('keyup', render);

// --- RENDER FUNCTION ---
function render() {
  // Safety check
  if (canvas.width === 0 || canvas.height === 0) return;

  // 1. Clear Canvas & Draw Background
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);

  // 2. Text Settings
  ctx.shadowOffsetY = 0; 
  ctx.shadowBlur = 0;
  ctx.textAlign = 'left'; 
  ctx.fillStyle = '#000080'; // Dark Blue Ink

  // --- MAPPING FIELDS ---
  // Note: Adjust the X (horizontal) and Y (vertical) numbers to match your image lines.

  // 1. Medical Officer Name (Top Left?)
  ctx.font = 'bold 30px Carlito, sans-serif'; 
  ctx.fillText(inputs.doctorName.value.trim(), 185, 115);

  // 2. Patient Name
  ctx.font = '12px Papernotes, sans-serif'; 
  ctx.fillText(inputs.patientName.value.trim(), 130, 220);

  // 3. Age (Small width)
  ctx.font = '12px Papernotes, sans-serif'; 
  ctx.fillText(inputs.age.value.trim(), 73, 275);

  // 4. Sex (Small width)
  ctx.font = '12px Papernotes, sans-serif'; 
  ctx.fillText(inputs.sex.value.trim(), 283, 275);

  // 5. Address (Full width line)
  ctx.font = '12px Papernotes, sans-serif'; 
  ctx.fillText(inputs.address.value.trim(), 92, 247);

  // 6. Diagnosis (Full width line)
  ctx.font = '12px Papernotes, sans-serif'; 
  ctx.fillText(inputs.diagnosis.value.trim(), 102, 302);

  // 7. Prescription 1
  ctx.font = '32px Papernotes, sans-serif'; 
  ctx.fillText(inputs.rx1.value.trim(), 140, 380);

  // 8. Prescription 2
  ctx.font = '32px Papernotes, sans-serif'; 
  ctx.fillText(inputs.rx2.value.trim(), 140, 410);

  // 9. Prescription 3
  ctx.font = '32px Papernotes, sans-serif'; 
  ctx.fillText(inputs.rx3.value.trim(), 140, 440);

  // 10. Signature (Cursive, Bottom Right)
  ctx.font = '60px "Great Vibes", cursive'; 
  ctx.textAlign = 'left'; 
  ctx.fillText(inputs.signature.value.trim(), 30, 750);
}


// --- INITIALIZATION ---
onload = () => {
    inputs.reset();

    const initializeCanvas = () => {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        render();
    };

    if (image.complete && image.naturalWidth > 0) {
        initializeCanvas();
    } else {
        image.onload = initializeCanvas;
    }

    document.fonts.ready.then(() => {
        render();
    });
};