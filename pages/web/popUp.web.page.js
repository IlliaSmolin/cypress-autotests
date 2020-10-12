const Global = require("../global.page");

class PopUpWindowPage extends Global {
  constructor() {
    super();
    this.url = "/entry_ad";
  }
  openUrl() {
    cy.visit(this.url);
    cy.wait(4000);
  }

  get popUp() {
    return cy.get(".modal");
  }
  get popUpFooter() {
    return this.popUp.get(".modal-footer");
  }
  get closePopUpBtn() {
    return this.popUpFooter.find("p");
  }
  get restartPopUpBtn() {
    return cy.get("#restart-ad");
  }

  closePopUp() {
    this.closePopUpBtn.click();
  }
  restartPopUp() {
    this.restartPopUpBtn.click();
  }

  verifyPopUpPresence() {
    super.verifyDisplay(this.popUp);
  }

  verifyPopUpAbsence() {
    super.verifyAbsence(this.popUp);
  }
}

module.exports = new PopUpWindowPage();
