// module

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export const name = "reze";

// ================================
// different way

const x = 45;
const y = 32;

export {x, y};


// =================================
// default export 

// export default function greet() {
//     console.log("Hello");
// }

// changing name
export default function say() {
    console.log("Hi");
}