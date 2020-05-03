const User = require("../models/user.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    const user = new User({
        email: req.body.email,
        name: req.body.name,
    });

    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Error creating the user."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Error retrieving users."
            });
        else res.send(data);
    });
};

exports.findUser = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `userId ${req.params.userId} not found.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving userId " + req.params.userId
                });
            }
        } else res.send(data);
    });
};