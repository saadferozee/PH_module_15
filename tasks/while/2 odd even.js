/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let num = 61;
while (num <= 100) {
    num % 2 !== 0 ? console.log(num) : null;
    num ++;
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let numEven = 78;
while (numEven <= 98) {
    if (numEven % 2 === 0) {
        console.log(numEven);
    }
    numEven ++;
}

/*programming hero*/