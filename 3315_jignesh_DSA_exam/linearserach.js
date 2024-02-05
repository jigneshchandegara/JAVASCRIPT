let array = [4, 6, 9, 7, 3, 5, 11];
let chek = 55;
function findElement(arr, num) {
    for (let i=0;i<arr.length;i++) {
        if (arr[i] == num){
            return true;
        } 
    }
    return false;
}
let result = findElement(array, chek)  
if(result == false){
    console.log(`The number ${chek} is not in the array`);
} else{
    console.log(`The number ${chek} is in the array `);
}


