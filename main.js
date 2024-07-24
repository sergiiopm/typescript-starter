"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super fuerza"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: "Sergio",
        age: 21,
        address: {
            id: 125,
            zip: "CUAPK",
            city: "Mustafar",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: "Melissa",
        age: 30,
        address: {
            city: "Roma",
            id: 220,
            zip: "K2S UA",
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map