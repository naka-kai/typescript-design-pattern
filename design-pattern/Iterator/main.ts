import BookShelf from "./BookShelf";
import Book from "./Book";
import IIterator from './Iterator';

function main() {
	const bookShelf: BookShelf = new BookShelf();
	bookShelf.appendBook(new Book('追加の本1'))
	bookShelf.appendBook(new Book('追加の本2'))
	bookShelf.appendBook(new Book('追加の本3'))
	bookShelf.appendBook(new Book('追加の本4'))
	bookShelf.appendBook(new Book('追加の本5'))
	const it: IIterator = bookShelf.iterator();

	while (it.hasNext()) {
		const book: Book = <Book>it.next();
		console.log(book.getName());
	}
}

main();
