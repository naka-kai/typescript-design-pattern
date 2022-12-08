
export default class Singleton {
  private static singleton: Singleton = new Singleton();

  private constructor() {
    console.log('インスタンスを生成しました。');
  }

  static getInstance(): Singleton {
    return this.singleton;
  }
}
