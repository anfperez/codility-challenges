//Lesson 1 - Iterations

//find a given number in binary. Then find the number's binary gap, which means the greatest amount of "0" in a sequence

let getBinaryGap = (num) => {
    let binaryNum = (num >>> 0).toString(2);
    let sequence = 0;
    let highestSequence = 0;
    for (let i = 0; i < binaryNum.length; i++) {
        if (binaryNum[i] == "0") {
            sequence++;
        }
        else {
            sequence = 0;
        }
        if (sequence > highestSequence) {
            highestSequence = sequence ;
            //sequence = sequence;
        }
    }

    console.log(num + " in binary is " + binaryNum + " and has a binary gap of " + highestSequence);
}

getBinaryGap(16); // output: 16 in binary is 10000 and has a binary gap of 4
getBinaryGap(1); // output: 1 in binary is 1 and has a binary gap of 0
getBinaryGap(1000); //output: 1000 in binary is 1111101000 and has a binary gap of 3
