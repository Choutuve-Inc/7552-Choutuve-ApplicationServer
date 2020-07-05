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
    let query = "INSERT INTO devices (idUser, device) VALUES (\"" + userId + "\" , \"" + deviceId + "\");"
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return null;
        }

        console.log("[CREATED] Comment: ", { id: res, });
        return true
    });
};

User.getDeviceID = (receiverId, response) => {
    let query = "SELECT device FROM devices WHERE idUser = \"" + receiverId + "\";"
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return null;
        }

        console.log("Result: ", res[0].device);
        response = 123
        return res[0].device
    });
};

module.exports = User;