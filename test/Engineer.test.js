const Engineer = require("../libs/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const g = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(g.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const g = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(g.getRole()).toBe(testValue);
});