

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let numOdd = 81;
let sumOdd = null;
while (numOdd <= 131) {
    if (numOdd % 2 !== 0) {
        sumOdd = sumOdd + numOdd;
    }
    numOdd++;
}
console.log(sumOdd);


/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let numEven = 206;
let sumEven = null;
while (numEven <= 311) {
    numEven % 2 !== 0 ? null : sumEven = numEven + sumEven ;
    numEven++;
}
console.log(sumEven)


/*programming hero*/