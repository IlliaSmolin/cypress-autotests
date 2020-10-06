const inputsPage = require("../../pages/web/inputs.web.page");

module.exports = function () {
  before(function () {
    inputsPage.openUrl();
  });
  it("Verify header's text", function () {
    const expectedHeader = "Inputs";
    inputsPage.verifyHeaderText(expectedHeader);
  });
  it("Verify input's presence", function () {
    inputsPage.verifyInputDisplay();
  });
}
