const request = require('request')
const Comment = require("../models/comment.model.js");
const logger = require('pino')()

exports.create = (req, res) => {
    logger.info('Endpoint POST /videos/:vidID/comments requested')

    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        })
    }

    request.post('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.vidID + '/comments', {
        json: {
            user: req.body.user,
            token: req.body.token,
            text: req.body.text,
        }
    }, (error, response, body) => {
        if (error) {
            logger.error('ERROR:', err)

            res.send(error)
        }
        if (response.statusCode == 200) {
            res.status(200).send({message: "Success"})
        }
        else {
            res.status(404).send({ message: "Error: Comment not created" });
        }
    });
}

exports.getComments = (req, res) => {
    logger.info('Endpoint GET /videos/:vidID/comments requested')

    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        })
    }

    request.get('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.vidID + '/comments',
        (error, response, body) => {
            if (error) {
                logger.error('ERROR:', err)

                res.send(error)
            }
            if (response.statusCode == 200) {
                res.status(200).send(body)
            }
            else {
                res.status(404).send({ message: "Error retrieving comments" });
            }
        });

};

exports.getLikes = (req, res) => {
    logger.info('Endpoint GET /videos/:vidID/likes requested')

    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        })
    }

    request.get('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.vidID + '/likes',
        (error, response, body) => {
            if (error) {
                logger.error('ERROR:', err)

                res.send(error)
            }
            if (response.statusCode == 200) {
                res.status(200).send(body)
            }
            else {
                res.status(404).send({ message: "Error retrieving likes" });
            }
        });

};

exports.setLikes = (req, res) => {
    logger.info('Endpoint POST /videos/:vidID/likes requested')

    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        })
    }

    request.post('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.vidID + '/likes', {
        json: {
            user: req.body.user,
            token: req.body.token,
            value: req.body.value,
        }
    },
        (error, response, body) => {
            if (error) {
                logger.error('ERROR:', err)

                res.send(error)
            }
            if (response.statusCode == 200) {
                res.status(200).send(body)
            }
            else {
                res.status(404).send({ message: "Error retrieving likes" });
            }
        });

};

exports.delete = (req, res) => {
    logger.info('Endpoint DELETE /videos/:vidID/comments requested')

    Comment.delete(req.params.commentId, (err) => {
        if (err) {
            logger.error('ERROR:', err)

            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing comment."
            });
        }
        else res.send({ message: 'The comment was deleted successfully!' });
    })
}