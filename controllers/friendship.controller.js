const Friendship = require("../models/friendship.model.js");
const logger = require('pino')()

exports.getFriendRequests = (req, res) => {
    logger.info('Endpoint GET /request requested')

    if (!req.body || !req.headers.user) {
        res.status(400).send({
            message: req.body || "Content can not be empty and the user must be sended in the header!"
        });
    }

    user = req.headers.user

    try {
        requests = Friendship.getRequests(user)
        res.status(200).send({requests: requests})
    } catch {
        logger.error('ERROR: Friendship requests error')
        res.status(404).send({message: "Error: Friendship requests error"});
    }

    res.send("Mocked PROFILE works fine :)")
};

exports.requestFriendship = (req, res) => {
    logger.info('Endpoint POST /request requested')

    if (!req.body || !req.headers.user) {
        res.status(400).send({
            message: req.body || "Content can not be empty and the user must be sended in the header!"
        });
    }

    userA = req.headers.user
    userB = req.body.id

    response = false
    if (!Friendship.requestExists(userA, userB) && (!Friendship.friendshipExists(userA, userB))) {
        response = Friendship.request(userA, userB)
    }
    if (response) {
        res.status(200).send({message: "Friendship sended"})
    }
    else {
        logger.error('Error: Friendship or request exists')
        res.status(404).send({message: "Error: Friendship or request exists"});
    }
};

exports.acceptOrDeclineFriendRequest = (req, res) => {
    logger.info('Endpoint POST /request/confirm requested')

    if (!req.body || !req.headers.user) {
        res.status(400).send({
            message: req.body || "Content can not be empty and the user must be sended in the header!"
        });
    }

    userB = req.headers.user
    userA = req.body.id
    value = req.body.value

    if (Friendship.requestExists(userA, userB)) {
        if (value) {
            if (!Friendship.friendshipExists(userA, userB)) {
                Friendship.acceptRequest(userA, userB)
                res.status(200).send({message: "Friendship accepted"})
            }
            res.status(404).send({message: "Error: friendship exists!"});
        }
        else {
            Friendship.declineRequest(userA, userB)
            res.status(200).send({message: "Friendship declined"})
        }
    } else {
        res.status(404).send({message: "Error: friendship request doesnt exists!"});
        logger.error('Error: friendship request doesnt exists!')
    }
};

exports.getFriends = (req, res) => {
    logger.info('Endpoint GET /friendlist requested')

    user = req.headers.user
    
    try {
        friendlist = Friendship.getFriends(user)
        res.status(200).send({friends: friendlist})
    } catch {
        res.status(404).send({message: "Error: Friendlist not found"});
        logger.error('Error: Friendlist not found')
    }

};