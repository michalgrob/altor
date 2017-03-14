/**
 * Created by dell on 14/03/2017.
 */
var bcrypt = require('bcrypt-nodejs');
module.exports = {
    generateHash: function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },
    validPassword: function (password) {
        return bcrypt.compareSync(password, this.local.password);
    }
};