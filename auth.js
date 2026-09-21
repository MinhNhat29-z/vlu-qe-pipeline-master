function login(username, password) {
    // Login authentication
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = { login };
