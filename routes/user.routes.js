module.exports = app => {
    const users = require("../controllers/user.controller.js");

    app.post("/login", users.login)

    app.post("/create", users.create)

    // app.get("/users/:id", users.findUser)

};