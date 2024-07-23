(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers = {
    nick: "Samuel L. JacksoN",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500.12345,
  };

  //   const { poder, vision } = avengers;
  //   console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ activo, ironman, ...resto }: Avengers) => {
    console.log(activo, ironman, resto.nick);
  };

  // printAvenger(avengers);

  const avengersArr: [string, boolean, number] = ["Superman", true, 150.15];

  // const ironman = avengersArr[1];
  // console.log({ ironman });

  const [, ironman, spiderman] = avengersArr;
  console.log(ironman, spiderman);
})();
