
// console.log(Array.from({ length: 4 }, (_, i) => i + 1))

const matrix = Array.from({length: 3}, () => Array.from({length: 5}, (_, i) => i+1))

// console.log(matrix);

// console.log(Math.floor(10 / 5));
// console.log(14/5);

console.log(Array.from({length: 14/5}).map((_, groupIndex) => groupIndex));