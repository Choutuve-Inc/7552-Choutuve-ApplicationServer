const Notification = require("../models/notification.model.js")

const admin = require("firebase-admin");
const serviceAccount = require("../config/keys.json");
const deviceId = "cqq9RCxlQE6ZMYfpxfKIt7:APA91bGc4usxBrRC_t4Ad5j5rT_iGruMQUc7_cClgr-TY2ClS6m978Lfkvrkqq-HyMS_h8XFEn6xeG4atfdjUai4_gV5p-YAKyo4V1aTLDbKE_AHO0PqsbSdgXD7GhQXuHP3tRmj7ZpG"

const request = require('request')

let initialized = false;

exports.send = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: req.body || "Content can not be empty!"
        });
    }

    if (!initialized) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://chotuve-android-media.firebaseio.com"
        });
        initialized = true
    }

    const notification = new Notification({
        idSender: req.body.idSender,
        idReceiver: req.body.idReceiver,
        message: req.body.message,
    });


    let message = {
        data: {
            title: "Mensaje de server",
            body: notification.message
        },
        token: deviceId

    }
    res.send(admin.messaging().send(message))
};