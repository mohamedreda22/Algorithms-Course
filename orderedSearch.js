function binarySearch(item, itemList) {
    let listSize = itemList.length - 1
    let lowerIdx = 0
    let upperIdx = listSize
    while (lowerIdx <= upperIdx) {
        let midPt = Math.floor((lowerIdx + upperIdx) / 2)
        if (itemList[midPt] == item) {
            return midPt
        }
        if (item > itemList[midPt]) {
            lowerIdx = midPt + 1
        } else {
            upperIdx = midPt - 1
        }
    }
    if (lowerIdx > upperIdx)
        return null
}
items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]
console.log(binarySearch(23, items))
console.log(binarySearch(100, items))