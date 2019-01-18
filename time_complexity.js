//Frog Jump

let FrogJump = (x, y, d) => {

    let travel = y - x;
    let jumps = 0;

    let i = 0;
    while ( i <= travel ) {
        jumps = jumps + 1;
        i += d;
    }
    console.log(jumps);
}

FrogJump(10, 85, 30);

FrogJump(8, 90, 15);

FrogJump(1, 11, 1);

// Permutation Missing Element

let PermMissingElem = (array) => {

    let beginning = array[0];
    let end = array.slice(-1)[0];

    let completeArray = [];
    for (let j = beginning; j < end + 1; j++){
        completeArray.push(j);
    }

    let missing = [];

    for (let k = array[0]; k <= end; k++) {
        if(array.indexOf(k) == -1 ) {
            missing.push(k);
        }
    }
    console.log(missing);

}

let array1 = [1, 2, 3, 5];

let array2 = [ 6, 7, 9, 10, 11];

let array3 = [18, 19, 20, 22, 23];

PermMissingElem(array1);
PermMissingElem(array2);
PermMissingElem(array3);

// Tape Equilibrium

//number of integers in 
let array4 = [3, 1, 2, 4, 3];

// console.log(array4.reduce((a, b) => a + b, -1))

let TapeEquilibrium = (array) => {
    //split into parts
    let leftSum = 0;
    let rightSum = 0;
    let tape_distance = array.reduce((a, b) => a + b);
    let num_loops = array.length;
    console.log("num loops" + num_loops)
    //for (let i = 0; i < array.length; i++){
       // tape_distance = array.reduce((a, b) => a + b);
    //}
    console.log(tape_distance);
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


