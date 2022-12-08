import AbstractDisplay from './AbstractDisplay';

export default class CharDisplay extends AbstractDisplay {
  private chr: string;

  constructor(chr: string) {
    super();
    this.chr = chr;
  }

  open(): void {
    process.stdout.write('<<');
  }

  print(): void {
    process.stdout.write(this.chr);
  }

  close(): void {
    process.stdout.write('>>');
  }
}
