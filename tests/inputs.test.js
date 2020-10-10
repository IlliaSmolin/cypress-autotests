const numberElements = require("../describes/inputs/number/inputs.number.uiElements.describe");
const numberField = require("../describes/inputs/number/inputs.number.field.describe");
const dropdownField = require("../describes/inputs/dropdown/inputs.dropdown.field.describe");

describe("Inputs", function () {
  describe("'Inputs' page (number type input)", function () {
    describe("Elements' presence", numberElements);
    describe("'Numbers' input", numberField);
  });
  describe("'Dropdown' page", function () {
    describe("Dropdown field", dropdownField);
  });
});
