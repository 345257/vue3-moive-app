const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8081", 
    viewportWidth: 1400, 
    viewportHeight: 800
  },
  video: true
});
