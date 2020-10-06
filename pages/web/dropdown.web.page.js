const Global = require("../global.page");

class DropdownPage extends Global {
  constructor() {
    super();
    this.url = "/dropdown";
  }

  get dropdown() {
    return cy.get("#dropdown");
  }
}

module.exports = new DropdownPage();
