module.exports = app => {
    const profiles = require("../controllers/profile.controller.js")

    // Request friendship
    app.post("/request", profiles.requestFriendship)

    // Accept friendship
    app.post("/request/confirm", profiles.acceptOrDeclineFriendRequest)

    // Get Friendlist
    app.get("/friendlist", profiles.getFriends)

    // // Get all profiles
    // app.get("/profiles", profiles.getProfiles)

    // // Get a specific profile
    // app.get("/profiles/:id", profiles.getProfile)

    // // Get all friends of a user
    // app.get("/profiles/:id/friends", profiles.getFriends)

    // // Get all pending friend requests of a specific user
    // app.get("/profiles/:id/friend-requests", profiles.getFriendRequests)
}