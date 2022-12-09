import Builder from './Builder';
import fs from 'fs';

export default class HTMLBuilder extends Builder {
  private filename: string = '';

  makeTitle(title: string): void {
    this.filename = title + '.html';
    const text = '<html>\n<head>\n<title>' + title + '</title>\n</head>\n<body>\n';
    fs.writeFileSync(this.filename, text);
    fs.appendFileSync(this.filename, '<h1>' + title + '</h1>\n');
  }

  makeString(str: string): void {
    fs.appendFileSync(this.filename, '<p>' + str + '</p>\n');
  }

  makeItems(items: string[]): void {
    fs.appendFileSync(this.filename, '<ul>\n');
    for (let i = 0; i < items.length; i++) {
      fs.appendFileSync(this.filename, '<li>' + items[i] + '</li>\n');
    }
    fs.appendFileSync(this.filename, '</ul>\n');
  }

  close(): void {
    fs.appendFileSync(this.filename, '</body>\n</html>');
  }

  getResult(): string {
    return this.filename;
  }
}
