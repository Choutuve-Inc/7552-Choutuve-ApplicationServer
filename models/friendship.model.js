const sql = require("./db.js");
const logger = require('pino')()

const Friendship = function (friendship) {
    this.userA = friendship.userA;
    this.userB = friendship.userB;
};

Friendship.request = (idSender, idReceiver) => {
    const result = sql.query("INSERT INTO requested (idUserA, idUserB) VALUES (\"" + idSender + "\" , \"" + idReceiver + "\");");
    logger.info(result)
    return true
};

Friendship.requestExists = (idSender, idReceiver) => {
    const result = sql.query("SELECT * FROM requested WHERE idUserA = \"" + idSender + "\" AND idUserB = \"" + idReceiver + "\"");

    logger.info(result[0])
    return result[0]
};

Friendship.getRequests = (idReceiver) => {
    const result = sql.query("SELECT idUserA FROM requested WHERE idUserB = \"" + idReceiver + "\"");

    logger.info(result[0])

    requests = []

    for (var i in result) {
        requests.push(result[i].idUserA)
    }
    return requests
};

Friendship.friendshipExists = (idSender, idReceiver) => {
    const result_1 = sql.query("SELECT * FROM friendlist WHERE idUserA = \"" + idSender + "\" AND idUserB = \"" + idReceiver + "\"");
    const result_2 = sql.query("SELECT * FROM friendlist WHERE idUserA = \"" + idReceiver + "\" AND idUserB = \"" + idSender + "\"");

    logger.info((result_1[0] || result_2[0]))
    return (result_1[0] || result_2[0])
};


Friendship.acceptRequest = (idSender, idReceiver) => {
    sql.query("DELETE FROM requested WHERE idUserA = \"" + idSender + "\" AND idUserB = \"" + idReceiver + "\"");
    sql.query("INSERT INTO friendlist (idUserA, idUserB) VALUES (\"" + idSender + "\" , \"" + idReceiver + "\");");

    return true
}

Friendship.declineRequest = (idSender, idReceiver) => {
    sql.query("DELETE FROM requested WHERE idUserA = \"" + idSender + "\" AND idUserB = \"" + idReceiver + "\"");

    return true
}

Friendship.getFriends = (idUser) => {
    const result_1 = sql.query("SELECT idUserA FROM friendlist WHERE idUserB = \"" + idUser + "\"");
    const result_2 = sql.query("SELECT idUserB FROM friendlist WHERE idUserA = \"" + idUser + "\"");

    friendlist = []

    if (result_1.length > 0) {
        for (var i in result_1) {
            friendlist.push(result_1[i].idUserA)
        }
    }

    if (result_2.length > 0) {
        for (var i in result_2) {
            friendlist.push(result_2[i].idUserB)
        }
    }

    return friendlist
}


module.exports = Friendship;