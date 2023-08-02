// two algorithms O(n)
function segregateNumbers(numbers) {
    let positiveNumbers = [];
    let negativeNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        } else {
            negativeNumbers.push(numbers[i]);
        }
    }

    return {
        positive: positiveNumbers,
        negative: negativeNumbers
    };
}

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

const numbers = [9, -3, 5, -2, -8, -6, 1, 3];
const segregatedResult = segregateNumbers(numbers);
const finalResult = mergeArrays(segregatedResult.negative, segregatedResult.positive);

console.log("Final Result: " + JSON.stringify(finalResult));

//one algorithm O(n)

/*function segregation_the_numbers(numbers) {
    let positiveNumbers = [];
    let negativeNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        } else {
            negativeNumbers.push(numbers[i]);
        }
    }

    return {
        positive: positiveNumbers,
        negative: negativeNumbers,
        //to merge the arrat negative first and positive second
        final: negativeNumbers.concat(positiveNumbers)

    };
}

const numbers = [9, -3, 5, -2, -8, -6, 1, 3];
const result = segregation_the_numbers(numbers);
console.log(" Final Result: " + JSON.stringify(result.final));*/