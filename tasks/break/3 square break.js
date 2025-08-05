/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let num = 2; num <= 100; num ++) {
    console.log(num)    
    if ( Math.sqrt(num) % 1 === 0) {
        break
    }
}