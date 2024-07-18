"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    //   let myFunction: Function;
    let myFunction;
    //! myFunction = 10;
    //! console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    //   myFunction = greet;
    //   console.log(myFunction("Sergio"));
    //   myFunction = saveTheWorld;
    //   console.log(myFunction());
})();
