module.exports = app => {
    const profiles = require("../controllers/profile.controller.js")

    // Get all profiles
    app.get("/profiles", profiles.getProfiles)

    // Get a specific profile
    app.get("/profiles/:id", profiles.getProfile)

    // Get all friends of a user
    app.get("/profiles/:id/friends", profiles.getFriends)

    // Get all pending friend requests of a specific user
    app.get("/profiles/:id/friend-requests", profiles.getFriendRequests)

    // Send friend request to a specific user
    //! We need an extra parameter to specify the sender id
    //! Ex: {"sender:" "1"}
    app.post("profiles/:id/friend-requests", profiles.requestFriendship)

    // Accept or decline a friend request
    app.put("/profiles/:id/friend-requests/:senderId", profiles.acceptOrDeclineFriendRequest)
}