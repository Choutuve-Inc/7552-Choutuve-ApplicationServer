const sql = require("./db.js");

const Friendship = function(friendship) {
    this.userA = friendship.userA;
    this.userB = friendship.userB;
};

Friendship.request = (idSender, idReceiver) => {
    const result = sql.query("INSERT INTO requested (idUserA, idUserB) VALUES (\"" + idSender + "\" , \"" + idReceiver + "\");");
    console.log("CREATE:", result)
    return true
};

Friendship.requestExists = (idSender, idReceiver) => {
    const result = sql.query("SELECT * FROM requested WHERE idUserA = \"" + idSender + "\" AND idUserB = \"" + idReceiver + "\"");

    console.log("GET REQUESTED FRIENDSHIP:", result[0])
    return result[0]
};

Friendship.friendshipExists = (idSender, idReceiver) => {
    const result_1 = sql.query("SELECT * FROM friendlist WHERE idUserA = \"" + idSender + "\" AND idUserB = \"" + idReceiver + "\"");
    const result_2 = sql.query("SELECT * FROM friendlist WHERE idUserA = \"" + idReceiver + "\" AND idUserB = \"" + idSender + "\"");

    console.log("FRIENDSHIP EXISTS:", (result_1[0] || result_2[0]))
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

    for (var i in result_1) {
        console.log('Post: ', result_1[i].idUserA);
        friendlist.push(result_1[i].idUserA)
    }

    for (var i in result_2) {
        console.log('Post: ', result_2[i].idUserB);
        friendlist.push(result_2[i].idUserB)
    }

    console.log(result_1[0], result_2[0])

    return friendlist
}


module.exports = Friendship;