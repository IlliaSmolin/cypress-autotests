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
}
