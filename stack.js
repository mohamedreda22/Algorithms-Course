var stack = []
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack)

while (stack.length > 0) {

    var item = stack.pop();

    console.log(stack)
    console.log(item)
}