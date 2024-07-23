"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. JacksoN",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.12345,
    };
    const printAvenger = (_a) => {
        var { activo, ironman } = _a, resto = __rest(_a, ["activo", "ironman"]);
        console.log(activo, ironman, resto.nick);
    };
    const avengersArr = ["Superman", true, 150.15];
    const [, ironman, spiderman] = avengersArr;
    console.log(ironman, spiderman);
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armor suit",
    };
    const captainAmerica = {
        name: "Capitán América",
        weapon: "Escudo",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const nombre = "Sergio";
    const getName = () => {
        console.log("viejo getName");
    };
})();
//# sourceMappingURL=main.js.map