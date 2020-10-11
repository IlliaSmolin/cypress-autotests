const WYSIWYGpage = require("../../../pages/web/WYSIWYG.web.page");

module.exports = function () {
  beforeEach(function () {
    WYSIWYGpage.openUrl();
  });
  it("Verify the initial input's value", function () {
    WYSIWYGpage.verifyEditorText("Your content goes here.");
  });
}
