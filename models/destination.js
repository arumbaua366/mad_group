module.exports = function (sequelize, DataTypes) {
	const Destination = sequelize.define("destination", {
		city: {
			type: DataTypes.STRING,
		},
		state: {
			type: DataTypes.STRING,
		},
		airport: {
			type: DataTypes.STRING,
		},
	})

	Destination.associate = function (models) {
		Destination.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		})
	}

	return Destination
}
