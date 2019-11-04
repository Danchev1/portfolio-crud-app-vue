module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  coverageReporters: ["text", "html"],
  coverageDirectory: "coverage/",
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!src/router/index.js",
    "!**/node_modules/**"
  ]
};
