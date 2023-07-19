function power(num, pwr) {
    if (pwr == 0)
        return 1
    else
        return num * power(num, pwr - 1)
}


function factorial(num) {
    if (num == 0)
        return 1
    else
        return num * factorial(num - 1)
}
console.log(power(2, 3))
console.log(factorial(4))