const canvas = document.querySelector('.canvas');
const image = document.querySelector('.canvas-image');
const input = document.querySelector('.inputForm');
const ctx = canvas.getContext('2d');
// console.log(input);

onload = () => {
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.drawImage(image, 0, 0);
  ctx.font = '52px BTBrikRegular';
  ctx.textAlign = 'start';
  ctx.fillStyle = '#FFFFFF';
  // Draw cached Text
  ctx.shadowColor = '#000000';
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 4;
  // Text starts centered at 1190
  ctx.fillText(input.value.toUpperCase().trim(), 50, 50);
};

input.addEventListener('keyup', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = '#000';
  ctx.drawImage(image, 0, 0);
  ctx.shadowColor = '#000000';
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 4;
  // Text starts centered at 1190
  ctx.fillText(e.target.value.toUpperCase().trim(), 50, 50);
});
