const Comment = require("../models/comment.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        })
    }

    const comment = new Comment({
        userId: req.body.userId,
        videoId: req.body.videoId,
        date: req.body.date,
        message: req.body.message
    })

    Comment.create(comment, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error creating the comment."
            })
        }
        else res.send(data)
    })
}

exports.getAllByVideoId = (req, res) => {
    Comment.getAllByVideoId(req.params.videoId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `videoId ${req.params.userId} not found.`
                })
            }
            else {
                res.status(500).send({
                    message: "Error retrieving comments from videoId " + req.params.userId
                })
            }
        }
        else res.send(data)
    })
};

exports.delete = (req, res) => {
    Comment.delete(req.params.commentId, (err) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing comment."
            });
        }
        else res.send({ message: 'The comment was deleted successfully!' });
    })
}