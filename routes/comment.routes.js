module.exports = app => {
    const comments = require("../controllers/comment.controller.js")

    app.post("/videos/:vidID/comments", comments.create)

    app.get("/videos/:vidID/comments", comments.getComments)

    app.get("/videos/:vidID/likes", comments.getLikes)

    app.post("/videos/:vidID/likes", comments.getLikes)

    app.delete("/videos/:vidID/comments", comments.delete)

}