const popUpPage = require("../../pages/web/popUp.web.page");

module.exports = function () {
  beforeEach(function () {
    popUpPage.openUrl();
  });
  it("Verify the pop-up window's presence by default", function () {
    popUpPage.verifyPopUpPresence();
  });
  it("Verify that pop-up can be closed", function () {
    popUpPage.closePopUp();
    popUpPage.verifyPopUpAbsence();
  });
}
