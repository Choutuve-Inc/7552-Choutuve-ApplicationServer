module.exports = app => {
    const users = require("../controllers/user.controller.js");

    app.post("/login", users.login)

    app.post("/logout", users.logout)

    app.post("/create", users.create)

    app.post("/token", users.token)

    app.get("/users", users.getUsers)

    app.get("/users/:userId", users.getUser)

    app.get("/users/list/:userIds", users.getUserList)

    app.patch("/users/:userId", users.updateUser)

    app.delete("/users/:userId", users.deleteUser)

    app.post("/reset", users.reset)

    app.post("/key", users.key)

};