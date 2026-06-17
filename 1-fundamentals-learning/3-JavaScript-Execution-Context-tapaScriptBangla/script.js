// function sayName() {
//     var name = "someName";
//     console.log("The name is, ", name);
// }
// name = "rejo";
// sayName();

// explaining execution context and call stack with examplep:

const message = "I can do it";
function sum(a, b) {
    const result = a + b;
    return result;
}
function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return sum(a, b) + mul(a, b);
}
function getResult(a, b) {
    return calc(a, b);
}
getResult(5, 7);


// whats going here:
/* 
Global Execution Context (GEC)
- message: not initialized (const hoisted - TDZ)
- sum() function hoisting
- mul() function hoisting
- calc() function hoisting
- getResult() function hoisting
- this
- window

Execution Phase (Global):
- message = "I can do it"
- getResult(5, 7) function call- new context


call stack:
┌─────────────────┐
│    GEC (Global) │  ← সবার নিচে (সবসময় থাকে)
└─────────────────┘


getResult() Function Execution Context
Creation Phase (getResult):
Execution Phase (getResult):


┌─────────────────┐
│  getResult(5,7) │  ← সবার উপরে (বর্তমানে চলছে)
├─────────────────┤
│    GEC (Global) │
└─────────────────┘


calc() Function Execution Context:
Creation Phase (calc):
Execution Phase (calc):


┌─────────────────┐
│   calc(5,7)     │  ← সবার উপরে
├─────────────────┤
│  getResult(5,7) │
├─────────────────┤
│    GEC (Global) │
└─────────────────┘


sum() Function Execution Context:
Creation Phase (sum):
Execution Phase (sum):


┌─────────────────┐
│    sum(5,7)     │  ← সবার উপরে (বর্তমানে চলছে)
├─────────────────┤
│   calc(5,7)     │
├─────────────────┤
│  getResult(5,7) │
├─────────────────┤
│    GEC (Global) │
└─────────────────┘


sum() শেষ হলে:


┌─────────────────┐
│   calc(5,7)     │  ← এখন এটা চলবে (mul(5,7) কল করবে)
├─────────────────┤
│  getResult(5,7) │
├─────────────────┤
│    GEC (Global) │
└─────────────────┘


mul() Function Execution Context:
Creation Phase (mul):
Execution Phase (mul):



┌─────────────────┐
│    mul(5,7)     │  ← সবার উপরে (বর্তমানে চলছে)
├─────────────────┤
│   calc(5,7)     │
├─────────────────┤
│  getResult(5,7) │
├─────────────────┤
│    GEC (Global) │
└─────────────────┘


mul() শেষ হলে:


Call Stack এখন:
┌─────────────────┐
│   calc(5,7)     │  ← এখন এটা চলবে (return করবে)
├─────────────────┤
│  getResult(5,7) │
├─────────────────┤
│    GEC (Global) │
└─────────────────┘


Execution Phase (calc)

calc() শেষ হলে:



Call Stack এখন:
┌─────────────────┐
│  getResult(5,7) │  ← এখন এটা চলবে (return করবে)
├─────────────────┤
│    GEC (Global) │
└─────────────────┘

Execution Phase (getResult) 
getResult() শেষ হলে:


Call Stack এখন:
┌─────────────────┐
│    GEC (Global) │  ← শুধু Global বাকি
└─────────────────┘
*/