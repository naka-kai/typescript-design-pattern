import TextBuilder from './TextBuilder';
import Director from './Director';
import HTMLBuilder from './HTMLBuilder';
import fs from 'fs';

class Main {
  constructor(disp: string) {
    if (disp === 'plain') {
      const textBuilder: TextBuilder = new TextBuilder();
      const director: Director = new Director(textBuilder);
      director.construct();
      const result: string = textBuilder.getResult();
      console.log(result);
    } else if (disp === 'html') {
      const htmlBuilder: HTMLBuilder = new HTMLBuilder;
      const director: Director = new Director(htmlBuilder);
      director.construct();
      const filename = htmlBuilder.getResult();
      console.log(filename + 'が作成されました。');
      const fileContent = fs.readFileSync(filename, 'utf-8');
      console.log(fileContent);
    } else {
      console.log('引数を入れてください');
    }
  }
}

new Main('plain');
