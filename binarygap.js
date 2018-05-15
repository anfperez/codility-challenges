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

getBinaryGap(16);
getBinaryGap(1);
getBinaryGap(1000);
