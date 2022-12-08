export default class Banner {
  private string: string;

  constructor(string: string) {
    this.string = string;
  }

  showWithParan() {
    console.log('(' + this.string + ')');
  }

  showWithAster() {
    console.log('*' + this.string + '*');
  }
}
