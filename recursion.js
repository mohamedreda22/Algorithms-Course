function recursion(x) {
    if (x == 0) {
        console.log("done!")
        return
    } else {
        console.log(x, )
        recursion(x - 1)
    }
}
recursion(4)