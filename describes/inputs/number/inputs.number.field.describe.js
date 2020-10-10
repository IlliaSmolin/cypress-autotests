const inputsPage = require("../../../pages/web/inputs.web.page");

module.exports = function () {
  beforeEach(function () {
    inputsPage.openUrl();
  });
  it("Verify that input is empty by default", function () {
    inputsPage.verifyInputValue("");
  });
  it("Verify that numbers can be typed into the field", function () {
    const digits = "127";
    inputsPage.fillInput(digits);
    inputsPage.verifyInputValue(digits);
  });
  it("Verify that symbols cannot be typed into the field", function () {
    const symbols =
      "qQwWeErRtTyYuUiIoOpPaAsSdDfFgGhHjJkKlLzZxXcCvVbBnNmM,<.>/?[{]}\\|;:'\"`~!@#$%^&*()-_=+";
    inputsPage.fillInput(symbols);
    inputsPage.verifyInputValue("");
  });
};
