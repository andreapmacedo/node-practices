// node io.js
// node io.js --myName André

const process = require('process');

console.log('digite seu texto:');

process.stdin.on('data', data => {
  process.stdout.write(`texto do usuário: ${data.toString()}`); 
  process.exit();
})

// console.log(process.argv);