import Banner from "./Banner";
import Print from "./Print";

export default class PrintBanner extends Print {
  private banner: Banner;

  constructor(string: string) {
    super();
    this.banner = new Banner(string);
  }

  printWeak() {
    this.banner.showWithParan();
  }

  printStrong() {
    this.banner.showWithAster();
  }
}
