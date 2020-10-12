const Global = require("../global.page");

class HoversPageWeb extends Global {
  constructor() {
    super();
    this.url = "/hovers";
  }
  get avatar() {
    return cy.get(".figure");
  }
  get caption() {
    return cy.get(".figcaption");
  }

  getAvatar(index) {
    return this.avatar.eq(index - 1);
  }
  getCaption(index) {
    return this.caption.eq(index - 1);
  }
  verifyCaptionAbsence(index) {
    super.verifyAbsence(this.getCaption(index));
  }
  verifyCaptionPresence(index) {
    super.verifyDisplay(this.getCaption(index));
  }
}

module.exports = new HoversPageWeb();
