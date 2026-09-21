function login(username, password) {
    // Login authentication
    if (username === "admin" && password === "9999") {
        return true;
    }

    return false;
}

module.exports = { login };
