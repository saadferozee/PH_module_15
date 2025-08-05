/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

function ersaMultiplicationTable (numbers) {
    let count = 1;
    while (count <= 10) {
        let table = numbers * count;
        console.log(numbers, "*", count, "=", table);
        count++;
    }
}
ersaMultiplicationTable(8);


/*programming hero*/