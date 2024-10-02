function calculateSum(numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));

function findMaximum(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
const array = [1, 3, 7, 2, 5];
console.log(findMaximum(array));

function findMinimum(numbers) {
    if (numbers.length === 0) {
        throw new Error("The array is empty.");
    }

    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

const numbersArray = [3, 5, 7, 2, 8];
console.log(findMinimum(numbersArray));

function countEvenOdd(numbers) {

    let evenCount = 0;
    let oddCount = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return {
        even: evenCount,
        odd: oddCount
    };
}

const result = countEvenOdd([1, 2, 3, 4, 5, 6]);
console.log(result);

function calculateSum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    return calculateSum(numbers) / numbers.length;
}

function findMax(numbers) {
    if (numbers.length === 0) return -Infinity;
    return Math.max(...numbers);
}


function generateReport(numbers) {
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const max = findMax(numbers);

    return `
        Report:
        - Sum: ${sum}
        - Average: ${average.toFixed(2)}
        - Maximum: ${max} 
    ; `
}

constnumbers = [10, 20, 30, 40, 50];
console.log(generateReport(numbers));