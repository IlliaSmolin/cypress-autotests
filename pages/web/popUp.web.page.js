const Global = require("../global.page");

class PopUpWindowPage extends Global {
  constructor() {
    super();
    this.url = "/entry_ad";
  }
  openUrl() {
    cy.server();
    super.openUrl();
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
    cy.route("POST", "/entry_ad").as("postRequest");
    this.closePopUpBtn.click();
    cy.wait("@postRequest");
  }
  restartPopUp() {
    cy.route("POST", "/entry_ad").as("postRequest");
    this.restartPopUpBtn.click();
    cy.wait("@postRequest");
  }

  verifyPopUpPresence() {
    super.verifyDisplay(this.popUp);
  }

  verifyPopUpAbsence() {
    super.verifyAbsence(this.popUp);
  }
}

module.exports = new PopUpWindowPage();
