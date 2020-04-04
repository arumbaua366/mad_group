'use strict'
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
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

	return User
}
