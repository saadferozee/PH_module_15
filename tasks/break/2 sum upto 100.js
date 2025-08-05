/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


let num = 1
let sum = null;
while (num <= 1000) {
    // console.log(num);
    sum = sum + num;
    console.log(sum);
    if (sum >= 100) {
        break;
    }
    num++;
}