function unorderedSearch(item, itemlist) {
    for (let i = 0; i < itemlist.length; i++) {
        if (item === itemlist[i])
            return i;
    }
    return null;

}
var itemlist = [5, 7, 6, 2, 3, 4, 9, 1]
console.log(unorderedSearch(6, itemlist))
console.log(unorderedSearch(10, itemlist))