function gcd(a, b) {
    while (b != 0) {
        t = a; //t=8
        a = b; //a=4
        b = t % b; //b=0

    }

    return a;
}

console.log(gcd(8, 4));