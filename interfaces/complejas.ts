(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Sergio",
    age: 21,
    address: {
      id: 125,
      zip: "CUAPK",
      city: "Mustafar",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      city: "Roma",
      id: 220,
      zip: "K2S UA",
    },
  };
})();
