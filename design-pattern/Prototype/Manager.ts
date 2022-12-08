import Product from './Product';

export default class Manager {
  showcase: { [key: string]: Product } = {};

  register(name: string, proto: Product): void {
    this.showcase[name] = proto;
  }

  create(protoname: string): Product {
    const p: Product = <Product>this.showcase[protoname];
    return p.createClone();
  }
}
