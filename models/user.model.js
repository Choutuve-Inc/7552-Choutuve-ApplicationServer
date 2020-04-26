const sql = require("./db.js");

const User = function(user) {
    this.name = user.name;
    this.email = user.email;
};

User.create = (user, result) => {
    sql.query("INSERT INTO user SET ?", user, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("[CREATED] User: ", { id: res.insertId, ...user });
        result(null, { id: res.insertId, ...user });
    });
};

User.findById = (userId, result) => {
    sql.query(`SELECT * FROM user WHERE id = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("[FOUND] User: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "User not found" }, null);
    });
};

User.getAll = result => {
    sql.query("SELECT * FROM user", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Users: ", res);
        result(null, res);
    });
};

module.exports = User;