const inputsPage = require("../../pages/web/inputs.web.page");

module.exports = function () {
  beforeEach(function () {
    inputsPage.openUrl();
  });
  it("Verify that input is empty by default", function () {
    inputsPage.verifyInputValue("");
  });
}
