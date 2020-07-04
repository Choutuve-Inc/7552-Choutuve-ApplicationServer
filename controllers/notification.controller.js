const Notification = require("../models/notification.model.js")

const request = require('request')

exports.send = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    const notification = new Notification({
        idSender: req.body.idSender,
        idReceiver: req.body.idReceiver,
        message: req.body.message,
    });

    res.send(notification)

    // request.post('https://arcane-thicket-79100.herokuapp.com/videos', {
    //     json: {
    //         userIdSender: video.user,
    //         userIdReceiver: video.title,
    //         mensaje: video.description,
    //     }
    // }, (error, response) => {
    //     if (error) {
    //         // console.error(error)
    //         res.send(error)
    //         return
    //     }
    //     res.send(response)
    //     // console.log(`statusCode: ${response.statusCode}`)
    // })
};