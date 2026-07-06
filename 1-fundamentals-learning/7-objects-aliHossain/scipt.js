// objects

const newSymb = Symbol("key1"); //symbols

const mobileModel = {
    // key: value
    
    brand: 'Xiaomi',
    model: 'redmi note 11s',
    processor: 'helio g96',
    camera: 108,
    hasFingerSensor: true,
    'selfie camera MP': 16,

    [newSymb]: "MyKey1",

}
console.log(mobileModel);
console.log(mobileModel.brand);
console.log(mobileModel['brand']);
console.log(mobileModel['selfie camera MP']);

// symbols
console.log(mobileModel[newSymb]);

// update a key value
mobileModel.camera = 200;
console.log(mobileModel);

// freeze an object
Object.freeze(mobileModel);
// check if the object is frozen
mobileModel.camera = 300; 
console.log(mobileModel); // camera value will not change because the object is frozen