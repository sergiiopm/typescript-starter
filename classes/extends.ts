(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger llamado!");
    }

    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      public name: string,
      public realName: string,
      public isMutant: boolean
    ) {
      super(name, realName);
      console.log("Constructor Xmen llamado");
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe ser mayor a 3 caracteres");
      }

      this.name = name;
    }

    getFullnameDesdeXmen() {
      console.log(super.getFullname());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);
  // wolverine.getFullnameDesdeXmen();
  // console.log(wolverine.fullName);
  // wolverine.fullName = "Sergio";
  // console.log(wolverine.fullName);
  // const nuevoAvenger = new Avenger("Hola", "Mundo");
})();
