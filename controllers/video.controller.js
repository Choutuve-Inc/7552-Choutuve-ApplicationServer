const Video = require("../models/video.model.js");
const Friendship = require("../models/friendship.model.js")

const request = require('request')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    const video = new Video({
        user: req.body.user,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        url: req.body.url,
        thumbnail: req.body.thumbnail,
        size: req.body.size
    });

    request.post('https://arcane-thicket-79100.herokuapp.com/videos', {
        json: {
            user: video.user,
            title: video.title,
            description: video.description,
            date: video.date,
            url: video.url,
            thumbnail: video.thumbnail,
            size: video.size
        }
    }, (error, response) => {
        if (error) {
            // console.error(error)
            res.send(error)
            return
        }
        res.send(response)
        // console.log(`statusCode: ${response.statusCode}`)
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
        // for (let u in friendlist) {
        //     console.log("a ver", friendlist[u])
        //     users.push(u)
        // }
    }
    users.push(userId)

    console.log("Friendlist", users)
    console.log("a ver esto:", users.toString())
    console.log("https://arcane-thicket-79100.herokuapp.com/videos?friendList=" + users.toString())

    request.get('https://arcane-thicket-79100.herokuapp.com/videos?friendList=' + users.toString(),
        (error, response, body) => {
            if (error) {
                res.send(error)
            }
            // console.log("a ver el body: ", body);
            // console.log("JSON: ", JSON.parse(body))
            // res.send(response)

            if (response.statusCode != 400) {
                res.header("token", token)
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
    res.send("Mocked VIDEO works fine :)")
};
