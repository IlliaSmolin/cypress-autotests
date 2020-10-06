const uiElements = require("../describes/inputs/inputs.uiElements.describe");
const numbersInput = require("../describes/inputs/inputs.numbersInput.describe");

describe("'Inputs' page", function () {
  describe("Elements' presence", uiElements);
  describe("'Numbers' input", numbersInput);
});
