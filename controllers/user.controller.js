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

    let userId = null

    request.post('https://serene-shelf-10674.herokuapp.com/login', {
        json: {
            email: login.email,
            password: login.password,
            tipo: login.tipo,
            device: login.device,
        }
    }, (error, response, body) => {
        if (response.statusCode == 200) {
            userId = body.uid
            const user = User.getUser(userId)

            if (user == undefined) {
                User.create(userId, login.device)
                res.status(200).send(body)
            } else {
                User.update(userId, login.device)
                res.status(200).send(body)
            }
        }
        else {
            res.status(404).send(body);
        }
    })
};

exports.logout = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    request.post('https://serene-shelf-10674.herokuapp.com/logout', {
        json: {
            device: req.body.device,
            email: req.body.email
        }
    }, (error, response, body) => {
        if (response.statusCode == 204) {
            deviceId = req.body.device
            console.log("Device a borrar:", deviceId)

            const user = User.getUserByDevice(deviceId)
            if (user != undefined) {
                User.delete(deviceId)
            }
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

exports.token = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    request.post('https://serene-shelf-10674.herokuapp.com/create', {
        json: {
            token: req.body.token
        }
    }, (error, response, body) => {
        if (error) {
            res.send(error)
            return
        }
        res.send(body)
    })
};

exports.getUsers = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    request.get('https://serene-shelf-10674.herokuapp.com/users',
        (error, response, body) => {
            if (error) {
                res.send(error)
                return
            }
            res.send(body)
        })
};

exports.getUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    request.get('https://serene-shelf-10674.herokuapp.com/users/' + req.params.id,
        (error, response, body) => {
            if (error) {
                res.send(error)
                return
            }
            res.send(body)
        })
};


exports.updateUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    request.patch('https://serene-shelf-10674.herokuapp.com/users/' + req.params.userId, {
        json: {
            Nemail: req.body.Nemail,
            Nphone: req.body.Nphone,
            Nusername: req.body.Nusername,
            Nimage: req.body.Nimage
        }
    }, (error, response, body) => {
        if (error) {
            res.send(error)
            return
        }
        res.send(body)
    })
};

exports.deleteUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    request.delete('https://serene-shelf-10674.herokuapp.com/users/' + req.params.userId,
        (error, response, body) => {
            if (error) {
                res.send(error)
                return
            }
            res.send(body)
        })
};

exports.reset = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    password = req.body.password
    token = req.body.token
    email = req.body.email
    tipo = req.body.tipo

    request.post('https://serene-shelf-10674.herokuapp.com/reset', {
        json: {
            Npassword: password,
            token: token,
            email: email,
            tipo: tipo,
        }
    }, (error, response, body) => {
        if (error) {
            res.send(error)
            return
        }
        res.send(body)
    })
};

exports.key = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    email = req.body.email

    request.post('https://serene-shelf-10674.herokuapp.com/key', {
        json: {
            email: email,
        }
    }, (error, response, body) => {
        if (error) {
            res.send(error)
            return
        }
        res.send(body)
    })
};