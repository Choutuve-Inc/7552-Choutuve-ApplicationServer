const User = require("../models/user.model.js");
const Login = require("../models/login.model.js")
const request = require('request')

exports.login = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    const login = new Login({
        email: req.body.email,
        password: req.body.password,
        tipo: req.body.tipo,
    });

    request.post('https://serene-shelf-10674.herokuapp.com/login', {
        json: {
            email: login.email,
            password: login.password,
            tipo: login.tipo,
        }
    }, (error, response) => {
        if (error) {
            res.send(error)
            return
        }
        res.send(response)
    })
};


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