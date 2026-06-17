console.log("name is", name);
var name;
name = 'tom';
console.log("name is", name);
// creation phase
// name will be created in memory
// name will be undefined
// ----------------------------

// execution phase
// message = name is undefined
// name = tom
// message = name is tom
//------------------------------------


console.log(num);
var num = 44;


chase();

function chase() {
    console.log("Tom chases Jerry");
}


//
test();  // test is not a function , its a variable
var test = function() {
    console.log("I am being tested");
}



// example of execution context

chase();

function chase() {
    console.log("tom chase jerry");
    caught();
}

function caught() {
    console.log("tom caught jerry :(");
}

/*
phase one: GEC
creation phase:
1.function chase()
2.function caught()

Execution phase: 
1. chase() execute  .. stack chase
2. console.log = tom chase jerry   
2. caught() execute  .. stack caught
4. console.log = tom caught jerry :(  .. caugh() pop
then chase() pop



*/

