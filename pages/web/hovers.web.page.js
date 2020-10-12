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
  focusAvatar(index) {
    /*the following code:

    this.getAvatar(index).trigger('mouseover');
    
    doesn't work to trigger the hover text (issue link):
    https://github.com/cypress-io/cypress/issues/2922

    so the workaround is used instead*/
    
    this.showCaption(index);
  }
  showCaption(index) {
    this.getCaption(index).invoke("show");
  }
}

module.exports = new HoversPageWeb();
