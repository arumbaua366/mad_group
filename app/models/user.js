"use strict"

const bcrypt = require("bcrypt-nodejs")

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_login: {
			type: DataTypes.DATE,
		},
	})

	User.prototype.isValidPassword = function (password) {
		console.log(this.password)
		return bcrypt.compareSync(password, this.password)
	}

	User.addHook("beforeCreate", user => {
		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
	})

	return User
}
