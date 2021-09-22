function myFunction(propName) {
    // Only change code below this line

    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    };
    console.log(lion);

    delete lion[propName];
    return lion;
    // Only change code above this line
}
console.log(myFunction("roar"));
module.exports = myFunction;