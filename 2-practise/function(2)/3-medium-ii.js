// Higher Order Function
 
// greet() is a Higher Order Function
// sayHello is passed as a Callback Function

function greet(callbacks) {
    callbacks();
}

function sayHello() {
    console.log("Hello");
}

greet(sayHello);  




// scope - theory done 

// function as object method

const person = {
    name: "Rejo",

    greet: function () {
        console.log("Hello");
    }
};

person.greet();

//========================================
// modern syntax
const persons = {
    name: "Rejo",

    greet() {
        console.log("HI");
    }
};

persons.greet();
//========================================