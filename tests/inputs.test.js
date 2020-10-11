const numberElements = require("../describes/inputs/number/inputs.number.uiElements.describe");
const numberField = require("../describes/inputs/number/inputs.number.field.describe");
const dropdownField = require("../describes/inputs/dropdown/inputs.dropdown.field.describe");
const checkboxField = require("../describes/inputs/checkbox/inputs.checkbox.field.describe");
const WYSIWYGField = require("../describes/inputs/WYSIWYG/inputs.WYSIWYG.field.describe");
const keyPressInput = require("../describes/inputs/keysPresses/inputs.keyPress.field.describe");

describe("Inputs", function () {
  describe("'Inputs' page (number type input)", function () {
    describe("Elements' presence", numberElements);
    describe("'Numbers' input", numberField);
  });
  describe("'Dropdown' page", function () {
    describe("Dropdown field", dropdownField);
  });
  describe("'Checkboxes' page", function () {
    describe("Checkboxes field", checkboxField);
  });
  describe("'WYSIWYG' page", function () {
    describe("'WYSIWYG' editor", WYSIWYGField);
  });
  describe("Key presses", function () {
    describe("Key detection input", keyPressInput);
  });
});
