//Frog Jump

//a frog starts at a certain point called x. It must get to a destination called y. If it is able to jump d paces per jump, how many times does it have to jump to get to y?

let FrogJump = (x, y, d) => {

    let travel = y - x;
    let jumps = 0;

    let i = 0;
    while ( i <= travel ) {
        jumps = jumps + 1;
        i += d;
    }
    console.log("To get from " + x + " to " + y + " with " + d + " paces per jump, the frog must jump "+ jumps + " times");
}

FrogJump(10, 85, 30);

FrogJump(8, 90, 15);

FrogJump(1, 11, 1);

// Permutation Missing Element

//given an array of consecutive integers, one integer will be missing from the order. Find the integer and return it.

let PermMissingElem = (array) => {

    let beginning = array[0];
    let end = array.slice(-1)[0];
    let missing = [];

    for (let k = array[0]; k <= end; k++) {
        if(array.indexOf(k) == -1 ) {
            missing.push(k);
        }
    }
    console.log(missing.toString() + " is missing from the array") ;

}

let array1 = [1, 2, 3, 5]; 

let array2 = [ 6, 7, 9, 10, 11]; 

let array3 = [18, 19, 20, 22, 23]; 

PermMissingElem(array1); //output: 4 is missing from the array 
PermMissingElem(array2); //output: 8 is missing from the array
PermMissingElem(array3); //output: 21 is missing from the array

// Tape Equilibrium

//number of integers in 
let array4 = [3, 1, 2, 4, 3];

// console.log(array4.reduce((a, b) => a + b, -1))

let TapeEquilibrium = (array) => {

    let sum = 0;
    let counting = 0;
    let max = 1000;
    let differenceArray = new Array();
    let finalDiffs;

    for (let i =0; i < array.length; i++) {
        sum += array[i];

    }

    for (let j =0; j < array.length - 1; j++) {
        counting += array[j];
        let leftSum = counting;
        let rightSum = sum - leftSum;
        let difference = Math.abs(leftSum - rightSum);
       // console.log("difference is " + typeof(difference))
        differenceArray.push(difference);
       // console.log("difference array is " + typeof(differenceArray));
        if (difference < max) {
            max = difference;
        }
        
        finalDiffs = Object.values(differenceArray);
       // console.log(typeof(finalDiffs));
       // console.log(finalDiffs);
       // console.log("num is" + Math.min(...finalDiffs));
    }
    console.log(Math.min(...finalDiffs));
   // console.log("num is" + Math.min(...finalDiffs));
}
    /*
    //split into parts
    let leftSum = 0;
    let rightSum = 0;
    let sum;
    let tape_distance = array.reduce((a, b) => a + b);
    let num_loops = array.length - 1;
    console.log("the array can be divided into " + num_loops + " parts")
    for (let i = 1; i < array.length; i++){
        // add the first two together
        rightSum += array[i]
        leftSum = array[0]

        sum = Math.abs(leftSum - rightSum);

        for (let j = 1; j < array.length; j++) {
            if (Math.abs(leftSum) - Math.abs(rightSum) < sum) {
            sum = Math.abs(leftSum) - Math.abs(rightSum);
            leftSum += array[j];
            rightSum -= array[j]

            console.log(sum);
        }
        // console.log(array[i] + array[i + 1])
       // tape_distance = array.reduce((a, b) => a + b);
    }
   // console.log(sum);
    }
    console.log(sum);
}
/*
    let i = 0;
    let count = 0; 

    while (count < array.length) {
        console.log(array[i] + array[i + 1]);
        count++;
    }

    // 3 - 10 
    // 4 - 9 
}
*/
TapeEquilibrium(array4);