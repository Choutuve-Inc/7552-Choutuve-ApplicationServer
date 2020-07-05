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
    // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    let values = [userId, deviceId]
    // console.log("esto quiero: ", values)
    let query = "INSERT INTO devices (idUser, device) VALUES (\"" + userId + "\" , \"" + deviceId + "\");"
    console.log("query: ", query)
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            // result(err, null);
            return null;
        }

        console.log("[CREATED] Comment: ", { id: res, });
        return true
    });
};

module.exports = User;