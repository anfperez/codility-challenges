//Lesson 2

//cyclic rotation

let arr1 = [1, 2, 3, 4];

let arr2 = [0, 0, 1];

let arr3 = [8, 9, 10, 11, 12];

let arrayShift = (array, numRotation) => {
    let numToShift = numRotation * 2;
    for (let i = numRotation; i < numToShift; i ++) {
    let firstNum = array.slice(-1).shift();
    array.unshift(firstNum);
    array.pop();
    }
    console.log(array);
}

arrayShift(arr1, 2);
arrayShift(arr2, 1);
arrayShift(arr3, 3);

//Odd Occurences in Array

let arr4 = [1, 2, 1, 2, 3];
let arr5 = [ 4, 5, 6, 4, 5, 4, 5];
let arr6 = [7, 8, 7, 7, 7];

let matchFind = (array) => {
    let lastNumArray = [];
    for (let i = 0; i < array.length; i++) {
    if(array.lastIndexOf(array[i]) == array.indexOf(array[i])) {
        lastNumArray.push(array[i]);
        }
    }
    console.log(lastNumArray.toString());
};

matchFind(arr4);
matchFind(arr5);
matchFind(arr6);