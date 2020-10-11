const Global = require("../global.page");

class WYSIWYGPage extends Global {
  constructor() {
    super();
    this.url = "/tinymce";
  }

  get iframe() {
    return cy.get("iframe");
  }
  get textEditor() {
    return this.iframe.then($element => {
      const $body = $element.contents().find('body');
      return cy.wrap($body);
    });
  }

  verifyEditorText(text) {
    super.verifyText(this.textEditor, text);
  }
  
  clearEditorText() {
    this.textEditor.clear();
  }

  fillTextEditor(text) {
    this.clearEditorText();
    this.textEditor.type(text);
  }
}

module.exports = new WYSIWYGPage();
