import Clonable from './Clonable';

interface Product extends Clonable {
  use(s: string): void;
  createClone():Product;
}
