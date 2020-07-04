const sql = require("./db.js");

const Friendlist = function (friendlist) {
    this.userId = friendlist.userId;
    this.userId_FK = friendlist.userId_FK;
};

Friendlist.create = (comment, result) => {
    sql.query("INSERT INTO friendlist SET ?", comment, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("[CREATED] Comment: ", { id: res.insertId, ...comment });
        result(null, { id: res.insertId, ...comment });
    });
};

Friendlist.getAllByUserId = (userId, result) => {
    let friends = []
    console.log("al menos llego aca con userid: ", userId)
    sql.query(`SELECT * FROM friendlist WHERE idUser = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return null;
        }

        if (res.length) {
            console.log("[FOUND] friends: ", res[0]);
            friends = res
            // result(null, res[0]);
            // return res;
        }

        // return null
        // result({ kind: "No friends yet!" }, null);
    });

    console.log("friends encontrados:", friends)
    return friends;
};

// Comment.delete = (id, result) => {
//     sql.query("DELETE FROM comment WHERE id = ?", id, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         if (res.affectedRows == 0) {
//             result({ kind: "not_found" }, null);
//             return;
//         }

//         console.log("Deleted comment with id: ", id);
//         result(null, res);
//     });
// };

module.exports = Friendlist;