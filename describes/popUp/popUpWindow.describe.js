const popUpPage = require("../../pages/web/popUp.web.page");

module.exports = function () {
  beforeEach(function () {
    popUpPage.openUrl();
  });
  it("Verify the pop-up window's presence", function () {
    popUpPage.verifyPopUpPresence();
  });
}
