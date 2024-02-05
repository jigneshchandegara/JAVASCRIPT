const array = [4, 9, 6, 7, 3, 2, 1];
let position = 3;
let value = 60;

for (let i = array.length; i >= position; i--) {
  array[i] = array[i - 1];
}
array[position - 1] = value;
console.log(array);


