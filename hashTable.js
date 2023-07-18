var item2 = {}
item2["key1"] = 1;
item2["key2"] = 2;
item2["key3"] = 3;
item2["key4"] = 4;
console.log(item2)


//Create an object
var item1 = {

    "key1": "one ",
    "key2": "two",
    "key3": "three",
    "key4": "four"
}

console.log(item1)
console.log(item1["key4"])

//Replace an item
item2["key2"] = "twice"
console.log(item2)

//Delete an item
delete item2["key2"]
console.log(item2)

//Iterate over an object
for (const [key, value] of Object.entries(item1)) {
    console.log("key:", key, "value:", value);

}