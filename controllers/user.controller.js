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
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password,
        tipo: req.body.tipo,
        image: req.body.image
    });

    request.post('https://serene-shelf-10674.herokuapp.com/create', {
        json: {
            email: user.email,
            phone: user.phone,
            username: user.username,
            password: user.password,
            tipo: user.tipo,
            image: user.image
        }
    }, (error, response) => {
        if (error) {
            res.send(error)
            return
        }
        res.send(response)
    })
};
