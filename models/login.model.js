const Login = function(login) {
    this.email = login.email,
    this.password = login.password,
    this.tipo = login.tipo,
    this.device = login.device
};

module.exports = Login;