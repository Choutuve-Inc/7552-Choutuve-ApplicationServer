module.exports = app => {
    const users = require("../controllers/user.controller.js");

    app.post("/login", users.login)

    app.post("/logout", users.logout)

    app.post("/create", users.create)

    app.post("/token", users.token)

    app.get("/users", users.getUsers)

    app.get("/users/:id", users.getUser)

    app.patch("/users/:id", users.updateUser)

    app.delete("/users/:id", users.deleteUser)

    app.post("/reset", users.reset)

    app.post("/key", users.key)

};