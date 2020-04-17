module.exports = function (sequelize, DataTypes) {
	const Activities = sequelize.define("activities", {
		categories: {
			type: DataTypes.STRING,
		},
		businesses: {
			type: DataTypes.STRING,
		},
		events: {
			type: DataTypes.STRING,
		},
	})

	Activities.associate = function (models) {
		Activities.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		})
	}

	return Activities
}
