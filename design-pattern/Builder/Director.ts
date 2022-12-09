import Builder from './Builder';

export default class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  construct(): void {
    this.builder.makeTitle('Greeting');
    this.builder.makeString('朝から夜にかけて');
    this.builder.makeItems(new Array(
      'おはようございます。',
      'こんにちは。'
    ));
    this.builder.makeString('夜に');
    this.builder.makeItems(new Array(
      'こんばんは。',
      'おやすみなさい。',
      'さようなら。'
    ));
    this.builder.close();
  }
}
