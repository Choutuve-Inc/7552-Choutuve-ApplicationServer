const Video = require("../models/video.model.js");
const Friendship = require("../models/friendship.model.js")

const request = require('request')

exports.create = (req, res) => {
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
            return
        }

        if (response.statusCode == 200) {
            res.send("Success")
        }
        else {
            res.statusMessage = "Error: Uploading video";
            res.status(404).end();
        }
    })
};

exports.getFeed = (req, res) => {
    userId = req.headers.user
    token = req.headers.token
    const friendlist = Friendship.getFriends(userId)
    console.log("esto llega", friendlist)
    users = []

    if (friendlist.length > 0) {
        for (var i = 0; i < friendlist.length; i++) {
            users.push(friendlist[i]);
        }
    }
    users.push(userId)

    console.log("Friendlist", users)
    console.log("a ver esto:", users.toString())
    console.log("https://arcane-thicket-79100.herokuapp.com/videos?friendList=" + users.toString())

    request.get('https://arcane-thicket-79100.herokuapp.com/videos?friendList=' + users.toString(),
        {
            headers: {
                user: userId,
                token, token
            }
        },
        (error, response, body) => {
            if (error) {
                res.send(error)
            }
            if (response.statusCode != 400) {
                res.status(200).send(body)
            }
            else {
                res.status(404).send({ message: "Error: Is not possible to get the friend list" });
            }
        });

};

exports.getById = (req, res) => {

    request.get('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.videoId,
        (error, response, body) => {
            if (error) {
                console.log(error);
                res.send(error)
            }
            console.log("Response: ", response);
            console.log("JSON: ", JSON.parse(body))
            res.send(JSON.parse(body))
        });
};

exports.delete = (req, res) => {

    request.delete('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.videoId,
        (error, response, body) => {

            if (response.statusCode == 200) {
                res.send('Video eliminado con exito (Video ID: ' + req.params.videoId + ')')
            }
            else {
                res.statusMessage = "Error eliminando el video";
                res.status(404).end();
            }
        });
};

exports.getAllByUserId = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    request.get('https://arcane-thicket-79100.herokuapp.com/videos/user/' + req.params.userId,
    (error, response, body) => {
        if (error) {
            res.send(error)
        }
        if (response.statusCode != 400) {
            res.status(200).send(body)
        }
        else {
            res.status(404).send({ message: "Error: Is not possible to get the videos of the user" });
        }
    });};
