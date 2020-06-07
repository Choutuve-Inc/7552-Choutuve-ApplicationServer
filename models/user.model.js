const User = function(user) {
    this.email = user.email,
    this.phone = user.phone,
    this.username = user.username,
    this.password = user.password,
    this.tipo = user.tipo,
    this.image = user.image
};

module.exports = User;