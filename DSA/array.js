// two array merge 

let arr1 = [4, 2, 6];
let arr2 = [3, 9, 5, 10,7];
let marg = [];
let i, j;
for(i = 0; i < arr1.length; i++){
    marg[i] = arr1[i];
}
for(j = 0; j <arr2.length; j++){
  marg[j+i] = arr2[j]
  // marg[j+arr1.length] = arr2[j]
}

console.log(marg);

for (let k = 0; k < marg.length; k++) {
  // console.log(marg + " mina");
  for (let l = k + 1; l < marg.length; l++) {
    if (marg[k] > marg[l]) {
      let temp = marg[k];
      marg[k] = marg[l];
      marg[l] = temp;
    }
    //   console.log(marg);
  }
  // console.log(array);
}
console.log("Sorted array: ", marg);

// second method  two array merge 


// let arr1 = [4,2,6];
// let arr2 = [3,9,5,10,7];
// let result = [...arr1,...arr2];
// console.log(result);

// for (let k = 0; k < result.length; k++) {
//     console.log(result + " mina");
//     for (let l = k + 1; l < result.length; l++) {
//       if (result[k] > result[l]) {
//         let temp = result[k];
//         result[k] = result[l];
//         result[l] = temp;
//       }
//       console.log(result);
//     }
//     // console.log(array);
//   }
//   console.log("Sorted array: ", result);
