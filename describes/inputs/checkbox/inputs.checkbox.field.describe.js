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
  it("Verify that a checkbox can be checked", function () {
    checkboxPage.checkCheckbox(1);
    checkboxPage.verifyCheckboxChecked(1);
  });
  it("Verify that a checkbox can be unchecked", function () {
    checkboxPage.checkCheckbox(1);
    checkboxPage.uncheckCheckbox(1);
    checkboxPage.verifyCheckboxNotChecked(1);
  });
}