(() => {
  class Avenger {
    // private name: string;
    // public team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    // constructor(name: string, team: string, realName?: string) {
    //     this.name = name;
    //     this.team = team;
    //     this.realName = realName;
    // }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio(): string {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  console.log(antman);
  //   console.log(Avenger.avgAge);
  console.log(Avenger.getAvgAge());
})();
