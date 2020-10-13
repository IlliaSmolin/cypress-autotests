const Global = require("../global.page");

class PopUpWindowPage extends Global {
  constructor() {
    super();
    this.url = "/entry_ad";
    this.timeout = 3000;
  }
  openUrl() {
    super.openUrl();
    cy.wait(this.timeout);
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
    cy.wait(this.timeout);
  }
  restartPopUp() {
    this.restartPopUpBtn.click();
    cy.wait(this.timeout);
  }

  verifyPopUpPresence() {
    super.verifyDisplay(this.popUp);
  }

  verifyPopUpAbsence() {
    super.verifyAbsence(this.popUp);
  }
}

module.exports = new PopUpWindowPage();
