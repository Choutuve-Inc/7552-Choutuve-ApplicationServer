module.exports = app => {
    const votes = require("../controllers/vote.controller.js")

    app.post("/votes/like/:userId/:videoId", votes.likeVideo)

    app.post("/votes/dislike/:userId/:videoId", votes.dislikeVideo)

    app.get("/votes/:idVideo", votes.getVotes)
}