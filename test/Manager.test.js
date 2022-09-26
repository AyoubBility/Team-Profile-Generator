const Manager = require("../libs/Manager");
const Employee = require("../libs/Employee");

test('getRole() should return "Manager"', () => {
  const title = "Manager";
  const newManager = new Manager("Foo", 1, "test@test.com", 100);
  expect(newManager.getRole()).toBe(title);
});

test("Can set office number via constructor argument", () => {
    const amount = 100;
    const newManager = new Manager("Foo", 1, "test@test.com", amount);
    expect(newManager.officeNumber).toBe(amount);
  });