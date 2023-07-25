function bubbleSort(dataSet) {
    for (let i = 0; i < dataSet.length - 1; i++) {
        for (let j = 0; j < dataSet.length - 1 - i; j++) {
            if (dataSet[j] > dataSet[j + 1]) {
                // Swap the elements
                let temp = dataSet[j];
                dataSet[j] = dataSet[j + 1];
                dataSet[j + 1] = temp;
            }
            console.log("Current state: ", dataSet);
        }
    }
}

const list1 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];
bubbleSort(list1);
console.log("Sorted list: ", list1);