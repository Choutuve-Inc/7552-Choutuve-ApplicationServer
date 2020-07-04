
const Notification = function (notification) {
    this.idSender = notification.idSender
    this.idReceiver = notification.idReceiver
    this.message = notification.message
};

module.exports = Notification;