const canvas = document.querySelector('.canvas');
const image = document.querySelector('.canvas-image');
const input1 = document.querySelector('.inputForm1');
const input2 = document.querySelector('.inputForm2');
const ctx = canvas.getContext('2d');
// console.log(input);

onload = () => {
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.drawImage(image, 0, 0);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#FFFFFF';
  // a3a3a3
  // Draw cached Text
  ctx.shadowOffsetY = 5;
  ctx.shadowColor = '#000000';
  ctx.shadowBlur = 5;
  // Text starts centered at 1190
  ctx.font = '72px BTBrikRegular';
  ctx.fillText(input1.value.toUpperCase().trim(), 1200, 160);
  ctx.font = '52px BTBrikRegular';
  ctx.fillText(input2.value.toUpperCase().trim(), 1200, 220);
};

input1.addEventListener('keyup', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.drawImage(image, 0, 0);
  ctx.shadowOffsetY = 5;
  ctx.shadowColor = '#000000';
  ctx.shadowBlur = 5;
  ctx.font = '72px BTBrikRegular';
  ctx.fillText(input1.value.toUpperCase().trim(), 1200, 160);
  ctx.font = '52px BTBrikRegular';
  ctx.fillText(input2.value.toUpperCase().trim(), 1200, 220);
});
input2.addEventListener('keyup', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 5;
  ctx.drawImage(image, 0, 0);
  ctx.shadowOffsetY = 5;
  ctx.shadowColor = '#000000';
  ctx.shadowBlur = 5;
  ctx.font = '72px BTBrikRegular';
  ctx.fillText(input1.value.toUpperCase().trim(), 1200, 160);
  ctx.font = '52px BTBrikRegular';
  ctx.fillText(input2.value.toUpperCase().trim(), 1200, 220);
});
