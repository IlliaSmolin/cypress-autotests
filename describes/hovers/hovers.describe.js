const hoversPage = require("../../pages/web/hovers.web.page");

module.exports = function () {
  beforeEach(function () {
    hoversPage.openUrl();
  });
  it("Verify that caption text is absent by default", function () {
    hoversPage.verifyCaptionAbsence(1);
  });
  it("Verify that caption text is present after avatar is focused", function () {
    hoversPage.focusAvatar(1);
    hoversPage.verifyCaptionPresence(1);
  });
}
