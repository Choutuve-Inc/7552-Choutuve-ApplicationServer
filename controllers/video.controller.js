const Video = require("../models/video.model.js");
const request = require('request')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    const video = new Video({
        date: req.body.date,
        size: req.body.size,
        thumbnail: req.body.thumbnail,
        title: req.body.title,
        url: req.body.url,
        user: req.body.user
    });

    request.post('https://arcane-thicket-79100.herokuapp.com/videos', {
        json: {
            date: video.date,
            size: video.size,
            thumbnail: video.thumbnail,
            title: video.title,
            url: video.url,
            user: video.user
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

exports.getAllByUserId = (req, res) => {
    res.send("Mocked VIDEO works fine :)")
};

exports.getFeed = (req, res) => {
    res.send("Mocked VIDEO works fine :)")
};
