import Builder from './Builder';

export default class TextBuilder extends Builder {
  private buffer: string[] = [];

  makeTitle(title: string) {
    this.buffer.push('==========================\n');
    this.buffer.push('「' + title + '」\n');
    this.buffer.push('\n');
  }

  makeString(str: string): void {
    this.buffer.push('■ ' + str + '\n');
    this.buffer.push('\n');
  }

  makeItems(items: string[]): void {
    for (let i = 0; i < items.length; i++) {
      this.buffer.push(' ・' + items[i] + '\n');
    }
    this.buffer.push('\n');
  }

  close(): void {
    this.buffer.push('==========================\n');
  }

  getResult(): string {
    return this.buffer.join('');
  }
}
