const Video = require("../models/video.model.js");
// const Friendlist = require("../models/friendlist.model.js")

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

exports.getAll = (req, res) => {

    // TODO BASE DE DATOS CON FRIENDLIST
    const userId = req.body.user
    // console.log("a ver el userId:", userId)
    // const friendlist = Friendlist.getAllByUserId(userId)
    // console.log("a ver los amigos:", friendlist)
    console.log("aaaa", res)

    request.get('https://arcane-thicket-79100.herokuapp.com/videos', {
        json: {
            friends: [String(userId)],
        }
    }, (error, response, body) => {
            if (error) {
                res.send(error)
            }
            // console.log("a ver el body: ", body);
            // console.log("JSON: ", JSON.parse(body))
            res.send(body)
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

exports.getFeed = (req, res) => {
    res.send("Mocked VIDEO works fine :)")
};
