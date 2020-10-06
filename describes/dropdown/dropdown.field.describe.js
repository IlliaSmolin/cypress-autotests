const dropdownPage = require("../../pages/web/dropdown.web.page");

module.exports = function () {
  beforeEach(function () {
    dropdownPage.openUrl();
  });
  it("Verify that the first option is chosen by default", function () {
    dropdownPage.verifySelectedOption(1);
  });
  it("Verify that the default option is disabled", function () {
    dropdownPage.verifyOptionDisabled(1);
  });
  it("Verify that an option can be chosen", function () {
    dropdownPage.selectDropdownOption(1);
    dropdownPage.verifySelectedOption(2);
  });
};
