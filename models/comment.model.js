const sql = require("./db.js");

const Comment = function (comment) {
    this.userId = comment.userId;
    this.videoId = comment.videoId;
    this.date = comment.date;
    this.message = comment.message;
};

Comment.create = (comment, result) => {
    sql.query("INSERT INTO comment SET ?", comment, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("[CREATED] Comment: ", { id: res.insertId, ...comment });
        result(null, { id: res.insertId, ...comment });
    });
};

Comment.getAllByVideoId = (videoId, result) => {
    sql.query(`SELECT * FROM comment WHERE videoId = ${videoId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("[FOUND] Comments: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "Not comments yet!" }, null);
    });
};

Comment.delete = (id, result) => {
    sql.query("DELETE FROM comment WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Deleted comment with id: ", id);
        result(null, res);
    });
};

module.exports = Comment;