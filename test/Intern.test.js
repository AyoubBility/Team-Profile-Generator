const Intern = require("../libs/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const s = new Intern("Foo", 1, "test@test.com", testValue);
  expect(s.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const s = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(s.getRole()).toBe(testValue);
});