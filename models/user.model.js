const sql = require("./db.js");

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
    console.log("CREATE:", result)
    return true
};

User.update = (userId, deviceId) => {
    const result = sql.query("UPDATE devices SET device = \"" + deviceId + "\" WHERE idUser = \"" + userId + "\";");
    console.log("UPDATE:", result)
    return true
};

User.getUser = (userId) => {
    const result = sql.query("SELECT idUser FROM devices WHERE idUser = \"" + userId + "\"");
    console.log("GET DEVICES BY USERID:", result[0])
    return result[0]
};

User.getUserByDevice = (deviceId) => {
    const result = sql.query("SELECT idUser FROM devices WHERE device = \"" + deviceId + "\"");
    console.log("GET USER BY DEVICEID:", result[0])
    return result[0]
};

User.delete = (deviceId) => {
    const result = sql.query("DELETE FROM devices WHERE device = \"" + deviceId + "\"");
    console.log("DELETED:", result)
    return true
};

User.getDeviceID = (receiverId) => {
    const result = sql.query("SELECT device FROM devices WHERE idUser = \"" + receiverId + "\"");
    console.log("GET DEVICEID:", result[0])
    return result[0]
};

module.exports = User;