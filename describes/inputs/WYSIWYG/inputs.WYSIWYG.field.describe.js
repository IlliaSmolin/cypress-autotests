const WYSIWYGpage = require("../../../pages/web/WYSIWYG.web.page");

module.exports = function () {
  beforeEach(function () {
    WYSIWYGpage.openUrl();
  });
  it("Verify the initial input's value", function () {
    WYSIWYGpage.verifyEditorText("Your content goes here.");
  });
  it("Verify that the text editor can be cleared", function () {
    WYSIWYGpage.clearEditorText();
    WYSIWYGpage.verifyEditorText("");
  });
  it("Verify that a text can be typed into the text editor", function () {
    const text = "some text!%!^1";
    WYSIWYGpage.fillTextEditor(text);
    WYSIWYGpage.verifyEditorText(text);
  });
}
