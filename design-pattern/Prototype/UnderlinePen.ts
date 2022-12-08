import Product from "./Product";
import clone from 'clone';

export default class UnderlinePen implements Product {
  private ulchar: string;

  constructor(ulchar: string) {
    this.ulchar = ulchar;
  }

  use(s: string): void {
    const length: number = encodeURI(s).replace(/%../g, "x").length;
    console.log('"' + s + '"');
    process.stdout.write(' ');

    for (let i: number = 0; i < length; i++) {
      process.stdout.write(this.ulchar);
    }
    console.log('');
  }

  createClone(): Product {
    return clone<Product>(this);
  }
}
