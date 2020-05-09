module.exports = app => {
    const videos = require("../controllers/video.controller.js")

    app.post("/videos/", videos.create)

    app.get("/videos/:videoId", videos.getById)

    app.get("/videos/:userId", videos.getAllByUserId)

    app.get("/videos/feed/:userId", videos.getFeed)

}