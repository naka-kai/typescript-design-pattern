
import IIterator from './Iterator';

export default interface Aggregate {
  iterator(): IIterator;
}
