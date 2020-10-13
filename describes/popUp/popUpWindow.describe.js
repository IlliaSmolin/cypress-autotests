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
  it("Verify that pop-up doesn't appear after it was closed", function () {
    popUpPage.closePopUp();
    popUpPage.openUrl();
    popUpPage.verifyPopUpAbsence();
  });
  it("Verify that pop-up appears after it was restarted", function () {
    popUpPage.closePopUp();
    popUpPage.restartPopUp();
    popUpPage.openUrl();
    popUpPage.verifyPopUpPresence();
  });
};
