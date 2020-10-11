const keyPressesPage = require("../../../pages/web/keyPresses.web.page");

module.exports = function () {
  beforeEach(function () {
    keyPressesPage.openUrl();
  });
  it("Verify that a letter key can be pressed", function () {
    const key = "a";
    keyPressesPage.keyPressInput.type(key);
    keyPressesPage.verifyPressResult(key);
  });
  it("Verify that a F-type key can be pressed", function () {
    keyPressesPage.pressF10();
    keyPressesPage.verifyPressResult("F10");
  });
  it("Verify that a SHIFT key can be pressed", function () {
    const key = "{shift}";
    keyPressesPage.keyPressInput.type(key);
    keyPressesPage.verifyPressResult(key);
  });
}
