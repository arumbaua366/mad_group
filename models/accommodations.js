module.exports = function (sequelize, DataTypes) {
	const Accommodations = sequelize.define("accommodations", {
		name: {
			type: DataTypes.STRING,
		},
		add1: {
			type: DataTypes.STRING,
		},
		add2: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		state: {
			type: DataTypes.STRING,
		},
		lat: {
			type: DataTypes.STRING,
		},
		long: {
			type: DataTypes.STRING,
		},
		totalPrice: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.STRING,
		},
		url: {
			type: DataTypes.STRING,
		},
		photoUrl: {
			type: DataTypes.STRING,
		},
	})

	Accommodations.associate = function (models) {
		Accommodations.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		})
	}

	return Accommodations
}
