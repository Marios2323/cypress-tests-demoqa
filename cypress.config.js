const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '75xzh5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
