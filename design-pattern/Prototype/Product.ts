import Clonable from './Clonable';

export default interface Product extends Clonable {
  use(s: string): void;
  createClone(): Product;
}
