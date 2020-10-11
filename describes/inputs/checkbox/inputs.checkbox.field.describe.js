const checkboxPage = require("../../../pages/web/checkbox.web.page");

module.exports = function () {
  beforeEach(function () {
    checkboxPage.openUrl();
  });
  it("Verify that first checkbox is unchecked by default", function () {
    checkboxPage.verifyCheckboxNotChecked(1);
  });
  it("Verify that second checkbox is checked by default", function () {
    checkboxPage.verifyCheckboxChecked(2);
  });
}