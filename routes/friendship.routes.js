module.exports = app => {
    const friendship = require("../controllers/friendship.controller.js")

    // Request friendship
    app.post("/request", friendship.requestFriendship)

    // Accept friendship
    app.post("/request/confirm", friendship.acceptOrDeclineFriendRequest)

    // Get Friendlist
    app.get("/friendlist", friendship.getFriends)
}