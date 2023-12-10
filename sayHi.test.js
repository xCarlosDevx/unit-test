const hi = require("./sayHi");
test("Wait for Hi message", () => {
  expect(hi()).toBe("Hi");
});
