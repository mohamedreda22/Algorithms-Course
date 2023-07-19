function recursion(x) {
    if (x == 0) {
        console.log("done!") //#2
        return
    } else {
        console.log(x, )
        recursion(x - 1) //the recursion being recall this untill finesh //#1

        console.log("foo") //#3
    }
}
recursion(4)