const checkboxPage = require("../../../pages/web/checkbox.web.page");

module.exports = function () {
  beforeEach(function () {
    checkboxPage.openUrl();
  });
  it("Verify that first checkbox is unchecked by default", function () {
    checkboxPage.verifyCheckboxNotChecked(1);
  });
}