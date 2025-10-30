const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// genera tutte le combinazioni (come prima)
function casePermutations(input) {
  const indices = [];
  for (let i = 0; i < input.length; i++) {
    if (/[a-zA-Z]/.test(input[i])) indices.push(i);
  }
  const k = indices.length;
  const total = 1 << k;
  const out = new Array(total);
  const baseArr = input.split('');

  for (let mask = 0; mask < total; mask++) {
    const arr = baseArr.slice();
    for (let j = 0; j < k; j++) {
      const idx = indices[j];
      const ch = baseArr[idx];
      arr[idx] = ((mask >> j) & 1) ? ch.toUpperCase() : ch.toLowerCase();
    }
    out[mask] = arr.join('');
  }
  return out;
}

function getArrayFromId() {
    let arr = [];
    
    for(let i=0; i <= 256; i++) {
        arr.push(i);
    }
    
    return arr;
}


// crea una cartella "output"
const outDir = path.join(__dirname, 'output');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// genera immagini per ogni combinazione
const words = casePermutations('Gino Gino');
const ids = getArrayFromId();
const size = 512;

words.forEach((word, i) => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // sfondo rosso
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, size, size);

  // testo
  ctx.font = 'bold 72px Sans';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(word, size / 2, size / 2);

  const id = canvas.getContext('2d');
  ctx.font = 'bold 72px Sans';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'right';
  ctx.fillText(ids[i], size, size - 25);

  // salva PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outDir, `gino_${i + 1}.png`), buffer);
});





console.log(`✅ Creati ${words.length} NFT in ./output`);
