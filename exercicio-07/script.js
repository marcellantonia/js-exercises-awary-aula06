

const input = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31');
const values = input.split(',');
console.log('Idades', values);

let total = 0;
for(let i=0; i<values.length; i++) {
    total += parseInt(values[i]);
}

const media = total / values.length;
console.log('Média', media);
