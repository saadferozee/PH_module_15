/***

Implement a countdown timer that counts down from 81 to 65.

 */

for (let timer = 85; timer >= 65; timer--) {
    setTimeout(() => {
        console.log(timer);
    }, (85 - timer) * 1000);
}
//Explanation came from ChatGPT
/*programming hero*/