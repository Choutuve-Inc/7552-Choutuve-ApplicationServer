const Friendlist = require("../models/fiendlist.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        })
    }

    const friendlist = new Friendlist({
        userId: req.body.userId,
        userId_FK: req.body.userId_FK,
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

// exports.delete = (req, res) => {
//     Comment.delete(req.params.commentId, (err) => {
//         if (err) {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing comment."
//             });
//         }
//         else res.send({ message: 'The comment was deleted successfully!' });
//     })
// }