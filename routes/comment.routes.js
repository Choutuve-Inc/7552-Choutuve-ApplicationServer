module.exports = app => {
    const comments = require("../controllers/comment.controller.js")

    app.post("/comments/", comments.create)

    app.get("/comments/:videoId", comments.getAllByVideoId)

    app.delete("/comments/:commentId", comments.delete)

}