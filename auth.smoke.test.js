const { login } = require("./auth");

test("Smoke Test - Login đúng tài khoản admin", () => {
    expect(login("admin", "123")).toBe(true);
});
