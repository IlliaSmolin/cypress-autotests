class CookiesHelper {
  preserveCookies() {
    Cypress.Cookies.defaults({
      preserve: (cookie) => {
        return true;
      },
    });
  }
}

module.exports = new CookiesHelper();
