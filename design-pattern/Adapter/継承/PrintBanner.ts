import Banner from "./Banner";
import Print from "./Print";

export default class PrintBanner extends Banner implements Print {
  constructor(string: string) {
    super(string);
  }

  printWeak() {
    this.showWithParan();
  }

  printStrong() {
    this.showWithAster();
  }
}
