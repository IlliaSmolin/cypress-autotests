const Global = require("../global.page");

class PopUpWindowPage extends Global {
  constructor() {
    super();
    this.url = "/entry_ad";
  }
  openUrl() {
    cy.server();
    cy.route("POST", "/entry_ad").as("postRequest");
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
    this.closePopUpBtn.click();
    this.waitForPostResponse();
  }
  restartPopUp() {
    this.restartPopUpBtn.click();
    this.waitForPostResponse();
  }

  verifyPopUpPresence() {
    super.verifyDisplay(this.popUp);
  }

  verifyPopUpAbsence() {
    super.verifyAbsence(this.popUp);
  }

  waitForPostResponse() {
    cy.wait("@postRequest");
  }
}

module.exports = new PopUpWindowPage();
