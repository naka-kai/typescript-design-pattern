import Product from "./Product";
import clone from 'clone';

export default class MessageBox implements Product {
  private decochar: string;

  constructor(decochar: string) {
    this.decochar = decochar;
  }

  use(s: string): void {
    const length: number = encodeURI(s).replace(/%../g, "x").length;

    for (let i = 0; i < length + 4; i++) {
      process.stdout.write(this.decochar);
    }
    console.log('');

    console.log(this.decochar + ' ' + s + ' ' + this.decochar);

    for (let i: number = 0; i < length + 4; i++) {
      process.stdout.write(this.decochar);
    }
    console.log('');
  }

  createClone(): Product {
    return clone<Product>(this);
  }
}
