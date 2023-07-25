let items = ["apple", "pear", "orange", "banana", "apple",
    "orange", "apple", "pear", "kiwi"

];

function valueCounter() {
    let counter = {}
    for (let i = 0; i < items.length; i++) {
        let item = items[i]

        if (item in counter)
            counter[item] += 1
        else
            counter[item] = 1
    }
    console.log(counter)
}
valueCounter()