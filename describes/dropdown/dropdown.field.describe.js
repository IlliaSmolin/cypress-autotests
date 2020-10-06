const dropdownPage = require("../../pages/web/dropdown.web.page");

module.exports = function () {
  beforeEach(function () {
    dropdownPage.openUrl();
  });
  it("Verify that an option can be chosen", function () {
    dropdownPage.selectDropdownOption(1);
  });
}