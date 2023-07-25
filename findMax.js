function findMax(items) {
    if (items.length == 1)
        return items[0]


    var op1 = items[0]
    var op2 = findMax(items.slice(1))

    if (op1 > op2) {
        console.log(op1)

        return op1
    } else {
        console.log(op2)
        return op2
    }
}
var items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
console.log(findMax(items))