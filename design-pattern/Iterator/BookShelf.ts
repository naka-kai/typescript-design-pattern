import Book from './Book';
import IIterator from './Iterator';
import BookShelfIterator from './BookShelfIterator';

export default class BookShelf {
  private books: Book[];
  private last: number = 0;

  constructor() {
    this.books = new Array();
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }

  appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++
  }

  getLength(): number {
    return this.last;
  }

  iterator(): IIterator {
    return new BookShelfIterator(this);
  }
}
