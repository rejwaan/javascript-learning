// arrow function

const add = (a, b) => {
    return a+b;
};
console.log(add(2, 4));

//=============================================
// syntax --------------------------
const functionName = (parameters) =>  {
    // code
    return something;
};

//==============================================

// one parameters without bracket

const multiple = num => {
    return num * 2;
}
console.log(multiple(3)); // 6

// more shortcut with one parameter

const divided = num => num / 2;

console.log(divided(6)); // 3

// 2 or more parameters shortcut

const added = (a, b) => a + b;

console.log(added(5, 6));  // 11



//===============================================

// object return **

const User = () => ({
    name: "reze"
});

console.log(User());



// array return **

const Numbers = () => [1, 3, 5, 7];

console.log(Numbers());



