const Friendship = require("../models/friendship.model.js")

const request = require('request')
const logger = require('pino')()

exports.create = (req, res) => {
    logger.info('Endpoint POST /videos requested')

    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    request.post('https://arcane-thicket-79100.herokuapp.com/videos', {
        json: {
            user: req.body.user,
            token: req.body.token,
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            url: req.body.url,
            thumbnail: req.body.thumbnail,
            private: req.body.private,
            size: req.body.size
        }
    }, (error, response, body) => {
        if (error) {
            res.send(error)
            logger.error('Error:', error)
            return
        }

        if (response.statusCode == 200) {
            res.send("Success")
        }
        else {
            res.statusMessage = "Error: Uploading video";
            logger.error('Error: Uploading video')
            res.status(404).end();
        }
    })
};

exports.getFeed = (req, res) => {
    logger.info('Endpoint GET /feed requested')

    userId = req.headers.user
    token = req.headers.token
    const friendlist = Friendship.getFriends(userId)
    users = []

    if (friendlist.length > 0) {
        for (var i = 0; i < friendlist.length; i++) {
            users.push(friendlist[i]);
        }
    }
    users.push(userId)

    request.get('https://arcane-thicket-79100.herokuapp.com/videos?friendList=' + users.toString(),
        {
            headers: {
                user: userId,
                token, token
            }
        },
        (error, response, body) => {
            if (error) {
                logger.error('Error:', error)
                res.send(error)
            }
            if (response.statusCode != 400) {
                res.status(200).send(body)
            }
            else {
                logger.error('Error: Is not possible to get the friend list')
                res.status(404).send({ message: "Error: Is not possible to get the friend list" });
            }
        });

};

exports.getById = (req, res) => {
    logger.info('Endpoint GET /videos/:videoId requested')

    request.get('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.videoId,
        (error, response, body) => {
            if (error) {
                logger.error('Error:', error)
                res.send(error)
            }
            res.send(JSON.parse(body))
        });
};

exports.delete = (req, res) => {
    logger.info('Endpoint DELETE /videos/:videoId requested')

    request.delete('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.videoId,
        (error, response, body) => {

            if (response.statusCode == 200) {
                res.send('Video eliminado con exito (Video ID: ' + req.params.videoId + ')')
            }
            else {
                logger.error('Error:', error)
                res.statusMessage = "Error: Is not possible to delete the video";
                res.status(404).end();
            }
        });
};

exports.getAllByUserId = (req, res) => {
    logger.info('Endpoint GET /videos/user/:userId requested')

    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    request.get('https://arcane-thicket-79100.herokuapp.com/videos/user/' + req.params.userId,
    (error, response, body) => {
        if (error) {
            logger.error('Error:', error)
            res.send(error)
        }
        if (response.statusCode != 400) {
            res.status(200).send(body)
        }
        else {
            logger.error('Error: Is not possible to get the videos of the user')
            res.status(404).send({ message: "Error: Is not possible to get the videos of the user" });
        }
    });};
