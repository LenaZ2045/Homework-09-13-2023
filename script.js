alert('This Homework is Due 09-13-2023')
const array = [2, 4, -5, 13, 24, -15, 27, 39, 44]

let a = 0
let b = 0

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (array[index] % 2 === 0) {
        a =(a + array[index]);
    } if (array[index] % 2 !== 0) {
        b = (b + array[index]);
    }
}

console.log('Sum of elements in array = ' + (a + b));
console.log(`Sum of even nubers = ${a}`);
console.log(`Sum of odd numbers = ${b}`);

for (let index = 0; index < array.length; index++) {
    if (a > b) {
        console.log(`Difference if a > b = ${(a - b)}`);        
    } else {
        console.log(`Difference if b > a = ${(b - a)}`);
    }   
}