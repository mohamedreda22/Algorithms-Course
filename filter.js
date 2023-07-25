let items = ["apple", "pear", "orange", "banana", "apple",
    "orange", "apple", "pear", "kiwi"
];

function filter() {

    let filter = {}
    for (let key of items) {
        filter[key] = 0;
    }
    return filter;
}

let result = Object.keys(filter());
console.log(result);