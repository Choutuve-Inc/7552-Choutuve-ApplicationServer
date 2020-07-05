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
        device: req.body.device
    });

    request.post('https://serene-shelf-10674.herokuapp.com/login', {
        json: {
            email: login.email,
            password: login.password,
            tipo: login.tipo,
            device: login.device,
        }
    }, (error, response, body) => {
        if (response.statusCode == 200) {
            res.status(200).send(body)
        }
        else {
            res.status(404).send(body);
        }
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
    }, (error, response, body) => {
        if (error) {
            res.send(error)
            return
        }
        res.send(body)
    })
};
