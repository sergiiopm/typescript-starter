(() => {
  interface addTwoNumbers {
    (a: number, b: number): number; // esto es una funcion
  }

  let addNumbersFunction: addTwoNumbers;

  addNumbersFunction = (a: number, b: number) => {
    return 10;
  };
})();
