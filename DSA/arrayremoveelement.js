// console.log("jign");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let position = 0;
let value = 30;

if (position < 0 || position > array.length) {
    console.log("invalid number");
}
else {
    // console.log('valid');
    for (let i = position - 1; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
}
array.length --;
// array.push(value);
console.log(`New Array: ${array}`);