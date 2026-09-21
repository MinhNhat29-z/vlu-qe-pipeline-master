const { login } = require("./auth");

test("Regression - Sai mật khẩu", () => {
    expect(login("admin", "9999")).toBe(false);
});

test("Regression - Username rỗng", () => {
    expect(login("", "123")).toBe(false);
});

test("Regression - Mật khẩu chứa ký tự đặc biệt", () => {
    expect(login("admin", "@@@")).toBe(false);
});

test("Regression - Tài khoản không tồn tại", () => {
    expect(login("user", "123")).toBe(false);
});

test("Regression - Tài khoản bị khóa", () => {
    expect(login("locked", "123")).toBe(false);
});

test("Regression - Đăng nhập đúng", () => {
    expect(login("admin", "123")).toBe(true);
});
