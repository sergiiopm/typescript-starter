"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let Strength;
    (function (Strength) {
        Strength[Strength["acuaman"] = 0] = "acuaman";
        Strength[Strength["batman"] = 1] = "batman";
        Strength[Strength["flash"] = 5] = "flash";
        Strength[Strength["superman"] = 100] = "superman";
    })(Strength || (Strength = {}));
    const fuerzaFlash = Strength.flash;
    const fuerzaSuperman = Strength.superman;
    const fuerzaBatman = Strength.batman;
    const fuerzaAcuaman = Strength.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    // const largoDelPoder: number = (poder as string).length;
    console.log(largoDelPoder);
})();
