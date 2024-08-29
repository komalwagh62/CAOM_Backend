const User = require("../models/user");
const bcrypt = require('bcrypt');
exports.createUser = async (userData) => {
    return User.create(userData);
}

exports.getUserById = async (userId) => {
    return User.findByPk(userId);
}

exports.updateUser = async (userId,userData) => {
    return User.update(userData, {where: {id: userId}});
}

exports.getUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email: email} })
    return user
}
