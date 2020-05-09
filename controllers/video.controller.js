const Video = require("../models/video.model.js");
const request = require('request')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    const video = new Video({
        date_of_upload: req.body.date_of_upload,
        size: req.body.size,
        thumbnail: req.body.thumbnail,
        title: req.body.title,
        url: req.body.url,
        user: req.body.user
    });

    request.post('https://arcane-thicket-79100.herokuapp.com/videos', {
        json: {
            date_of_upload: video.date_of_upload,
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
        res.send(response.statusCode)
        // console.log(`statusCode: ${response.statusCode}`)
    })
};

exports.getAllByUserId = (req, res) => {
    res.send("Mocked VIDEO works fine :)")
};

exports.getFeed = (req, res) => {
    res.send("Mocked VIDEO works fine :)")
};
