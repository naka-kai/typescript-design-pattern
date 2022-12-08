import AbstractDisplay from './AbstractDisplay';

export default class  StringDisplay extends AbstractDisplay {
  private str: string;
  private width: number;

  constructor(str: string) {
    super();
    this.str = str;
    this.width = encodeURI(str).replace(/%../g, "x").length;
  }

  open(): void {
    this.printLine();
  }

  print(): void {
    console.log('|' + this.str + '|');
  }

  close(): void {
    this.printLine();
  }

  printLine(): void {
    process.stdout.write('*');
    for (let i = 0; i < this.width; i++) {
      process.stdout.write('-');
    }
    console.log('*');
  }
}
