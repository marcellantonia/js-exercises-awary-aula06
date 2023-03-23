

const input = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31,50,13,2,80,42');
const values = input.split(',');
console.log('Idades', values);

let counter = 0;
for(let i=0; i<values.length; i++) {
    const age = parseInt(values[i]);
    if (age >= 18) {
        counter ++;
    }
}

console.log('Maiores de idade', counter);
