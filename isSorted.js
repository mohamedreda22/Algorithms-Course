function isSorted(itemList) {
    for (let i = 0; i <= itemList.length - 1; i++) {
        if (itemList[i] >= itemList[i + 1]) {
            return false
        }
    }

    return true
}
let item1 = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]
let item2 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
console.log(isSorted(item1))
console.log(isSorted(item2))