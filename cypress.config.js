const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nteyad',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
