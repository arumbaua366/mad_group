module.exports = function (sequelize, DataTypes) {
	const Flight = sequelize.define("flight", {
		airline: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		cost: {
			type: DataTypes.INTEGER,
		},
	})

	Flight.associate = function (models) {
		Flight.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		})
	}

	return Flight;
}
