import IIterator from "./Iterator";
import BookShelf from "./BookShelf";
import Book from "./Book";

export default class BookShelfIterator implements IIterator {
  private bookShelf: BookShelf;
  private index: number;

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  hasNext(): boolean {
    if (this.index < this.bookShelf.getLength()) {
      return true;
    } else {
      return false;
    }
  }

  next(): Object {
    const book: Book = this.bookShelf.getBookAt(this.index);
    this.index++
    return book;
  }
}
