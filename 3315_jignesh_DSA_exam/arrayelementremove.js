const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let position = 2;
let value = 30;

if (position < 0 || position > array.length) {
    console.log("invalid number");
}
else {
    for (let i = position ; i < array.length ; i++) {
        array[i] = array[i + 1];
    }
}
array.length --;
console.log(`New Array: ${array}`);