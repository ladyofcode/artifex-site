import fs from 'fs';

const files = fs.readdirSync("./static/game-jam/images/2024/gallery");
console.log(files.filter(f=>f.endsWith(".jpg")).reduce((s, v)=>s + "- " + v + "\n", ''));