import Product from "./Product";
import Factory from "./Factory";
import IDCard from "./IDCard";

export default class IDCardFactory extends Factory {
  private owners: Array<string> = new Array();

  protected createProduct(owner: string): Product {
    return new IDCard(owner);
  }

  protected registerProduct(product: Product): void {
    this.owners.push((<IDCard>product).getOwner());
  }

  getOwners(): Array<string> {
    return this.owners;
  }
}
