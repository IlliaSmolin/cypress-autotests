const hoversPage = require("../../pages/web/hovers.web.page");

module.exports = function () {
  beforeEach(function () {
    hoversPage.openUrl();
  });
  it("Verify that caption text is absent by default", function () {
    hoversPage.verifyAbsence(hoversPage.getCaption(1));
  });
}
