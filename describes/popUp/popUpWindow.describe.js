const popUpPage = require("../../pages/web/popUp.web.page");

module.exports = function () {
  beforeEach(function () {
    // Preserve cookie in every test
    Cypress.Cookies.defaults({
      preserve: (cookie) => {
        return true;
      },
    });
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
    popUpPage.verifyPopUpAbsence();
  });
  it("Verify that pop-up appears after it was restarted [before refresh]", function () {
    popUpPage.restartPopUp();
    popUpPage.verifyPopUpPresence();
  });
  it("Verify that pop-up appears after it was restarted [after refresh]", function () {
    popUpPage.verifyPopUpPresence();
  });
};
