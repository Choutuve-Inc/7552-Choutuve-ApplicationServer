module.exports = app => {
    const users = require("../controllers/user.controller.js");

    // Create a new User
    app.post("/users", users.create)

    // Get all Users
    app.get("/users", users.findAll)

    // Get a specific user
    app.get("/users/:id", users.findOne)
};