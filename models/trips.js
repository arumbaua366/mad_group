module.exports = function (sequelize, DataTypes) {
	const Trips = sequelize.define("trips", {
		name: {
			type: DataTypes.STRING,
		},
		rank: {
			type: DataTypes.INTEGER,
		},
		lat: {
			type: DataTypes.STRING,
		},
		long: {
			type: DataTypes.STRING,
		},
	})
	return Trips
}
