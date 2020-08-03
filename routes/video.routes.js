module.exports = app => {
    const videos = require("../controllers/video.controller.js")

    app.post("/videos/", videos.create)

    app.get("/feed", videos.getFeed)

    app.get("/videos/:videoId", videos.getById)

    app.get("/videos/user/:userId", videos.getAllByUserId)

    app.delete("/videos/:videoId", videos.delete)

}