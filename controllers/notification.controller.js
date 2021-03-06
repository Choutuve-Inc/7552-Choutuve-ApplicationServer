// Desde /lampp/bin
// sudo ./mysql --host=us-cdbr-east-02.cleardb.com --user=bae5e06ded96af --password=b08a75d4 --reconnect heroku_6607e3e624ef30b

const Notification = require("../models/notification.model.js")
const User = require("../models/user.model.js");

const admin = require("firebase-admin");
const serviceAccount = require("../config/keys.json");
const logger = require('pino')()

let initialized = false;

exports.send = (req, res) => {
    logger.info('Endpoint POST /notifications requested')

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

    const response = User.getDeviceID(notification.idReceiver)
    let deviceId = undefined
    if (response != undefined) {
        deviceId = response.device
    }

    if ((deviceId != undefined) && (User.getUserByDevice(deviceId) != undefined)) {
        let message = {
            data: {
                title: "Choutuve",
                body: notification.message
            },
            token: deviceId
        }
        res.send(admin.messaging().send(message))
    } else {
        res.status(200).send("1")
    }
};