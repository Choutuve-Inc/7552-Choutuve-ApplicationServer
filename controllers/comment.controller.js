const Comment = require("../models/comment.model.js");

// exports.getFeed = (req, res) => {
//     userId = req.headers.user
//     token = req.headers.token
//     const friendlist = Friendship.getFriends(userId)
//     console.log("esto llega", friendlist)
//     users = []

//     if (friendlist.length > 0) {
//         for (var i = 0; i < friendlist.length; i++) {
//             users.push(friendlist[i]);
//         }
//     }
//     users.push(userId)

//     console.log("Friendlist", users)
//     console.log("a ver esto:", users.toString())
//     console.log("https://arcane-thicket-79100.herokuapp.com/videos?friendList=" + users.toString())

//     request.get('https://arcane-thicket-79100.herokuapp.com/videos?friendList=' + users.toString(),
//         {
//             headers: {
//                 user: userId,
//                 token, token
//             }

//         },
//         (error, response, body) => {
//             if (error) {
//                 res.send(error)
//             }
//             if (response.statusCode != 400) {
//                 res.status(200).send(body)
//             }
//             else {
//                 res.status(404).send({ message: "Error: Is not possible to get the friend list" });
//             }
//         });

// };

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        })
    }

    request.post('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.vidID + '/comments', {
        json: {
            user: req.body.userId,
            token: req.body.token,
            text: req.body.text,
        }
    }, (error, response, body) => {
        if (error) {
            res.send(error)
        }
        if (response.statusCode == 200) {
            res.status(200).send(body)
        }
        else {
            res.status(404).send({ message: "Error: Comment not created" });
        }
    });
}

exports.getComments = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        })
    }

    request.get('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.vidID + '/comments',
        (error, response, body) => {
            if (error) {
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

    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        })
    }

    request.get('https://arcane-thicket-79100.herokuapp.com/videos/' + req.params.vidID + '/likes',
        (error, response, body) => {
            if (error) {
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

exports.getLikes = (req, res) => {

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