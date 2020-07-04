module.exports = app => {
    const comments = require("../controllers/notification.controller.js")

    app.post("/notifications/", comments.send)
}