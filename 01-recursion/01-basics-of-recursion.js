//recursion is an alternative to loops (while, for)

//iterative version
console.log('------------iterative---------------')
for (let x = 0; x < 10; x++) {
    console.log(x)
}

//recursion version
console.log('------------recursive---------------')
function printX(x, limit) {
    //base case (when base case reach, recursion should stop)
    if (x == limit) {
        return; //stop function if x is 10
    }
    //each step in the process
    console.log(x)
    //recursive call and the problem is shrunk each time (towards the base case). calling the function within a function. creating a new stack frame
    printX(x + 1, limit)
}
printX(0, 5)

console.log('--------------summation hands on--------------')
function summation(x) {
    //define the base case
    if (x==1){
        return 1;
    }
    return x + summation(x-1);
}
console.log (summation(5));

//1. define the base case
//2. what is the recursive step?
//3. shrinking the problem size for the next recursive call

console.log('------------------second summation hands on-----------------')
//find the sum of an array given an array of numbers
//base case : reach the last number in the array, if the array is empty

function sumOfArray(arr, currentIndex){
    //check if we exceeded the array
    if (currentIndex == arr.length){
        return 0;
    } else {
        return arr[currentIndex] + sumOfArray(arr, currentIndex+1)
    }
}
const arr = [4,6,8,10]
console.log (sumOfArray(arr, 0))

function sumOfArray2(arr){
    if (arr.length == 0){
        return 0;
    } else {
        return arr[0] + sumOfArray2(arr.slice(1))
    }
}
console.log(sumOfArray2(arr))