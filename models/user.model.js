const sql = require("./db.js");
const logger = require('pino')()

const User = function(user) {
    this.email = user.email,
    this.phone = user.phone,
    this.username = user.username,
    this.password = user.password,
    this.tipo = user.tipo,
    this.image = user.image
};

User.create = (userId, deviceId) => {
    const result = sql.query("INSERT INTO devices (idUser, device) VALUES (\"" + userId + "\" , \"" + deviceId + "\");");
    logger.info(result)
    return true
};

User.update = (userId, deviceId) => {
    const result = sql.query("UPDATE devices SET device = \"" + deviceId + "\" WHERE idUser = \"" + userId + "\";");
    logger.info(result)
    return true
};

User.getUser = (userId) => {
    const result = sql.query("SELECT idUser FROM devices WHERE idUser = \"" + userId + "\"");
    logger.info(result[0])
    return result[0]
};

User.getUserByDevice = (deviceId) => {
    const result = sql.query("SELECT idUser FROM devices WHERE device = \"" + deviceId + "\"");
    logger.info(result[0])
    return result[0]
};

User.delete = (deviceId) => {
    const result = sql.query("DELETE FROM devices WHERE device = \"" + deviceId + "\"");
    logger.info(result)
    return true
};

User.getDeviceID = (receiverId) => {
    const result = sql.query("SELECT device FROM devices WHERE idUser = \"" + receiverId + "\"");
    logger.info(result[0])
    return result[0]
};

module.exports = User;