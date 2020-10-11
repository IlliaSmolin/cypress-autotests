const Global = require("../global.page");

class PopUpWindowPage extends Global {
  constructor() {
    super();
    this.url = "/entry_ad";
  }

  get popUp() {
    return cy.get(".modal");
  }
  get popUpFooter() {
    return this.popUp.get(".modal-footer");
  }
  get closePopUpBtn() {
    return this.popUpFooter.get("p");
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
}

module.exports = new PopUpWindowPage();
