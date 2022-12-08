import Product from "./Product";
import Factory from "./Factory";
import IDCardFactory from "./IDCardFactory";


class Main {
  constructor() {
    const factory: Factory = new IDCardFactory();
    const card1: Product = factory.create('Aさん');
    const card2: Product = factory.create('Bさん');
    const card3: Product = factory.create('Cさん');
    card1.use();
    card2.use();
    card3.use();
  }
}

new Main();
