// day 08 - js execution context visually

var name = "Tom";

function sayName() {
    console.log(this.name);
}
sayName();