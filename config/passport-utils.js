var bcrypt = require('bcrypt-nodejs');
module.exports = {
    generateHash: function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },
    validPassword: function (password) {
        return bcrypt.compareSync(password, this.password);
    },

    ValidateEmail: function validateEmail(email)
    {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
};