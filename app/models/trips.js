module.exports = function (sequelize, DataTypes) {
	const Trips = sequelize.define(
		"trips",
		{
			name: {
				type: DataTypes.STRING,
			},
			defaultBudget: {
				type: DataTypes.INTEGER,
			},
			destinationCity: {
				type: DataTypes.STRING,
			},
			destinationState: {
				type: DataTypes.STRING,
			},
			arrivalDate: {
				type: DataTypes.DATEONLY,
			},
			departureDate: {
				type: DataTypes.DATEONLY,
			},
			duration: {
				type: DataTypes.VIRTUAL,
				get() {
					let arrival = new Date(this.getDataValue("arrivalDate"))
					let departure = new Date(this.getDataValue("departureDate"))

					return (departure - arrival) / 86400000
				},
			},
			lat: {
				type: DataTypes.STRING,
			},
			long: {
				type: DataTypes.STRING,
			},
		},
		{
			getterMethods: {
				allDates() {
					let dates = []
					let currentDate = this.arrivalDate
					let addDays = function (days) {
						let date = new Date(this.valueOf())
						date.setDate(date.getDate() + days)
						return date
					}
					for (var i = 0; i <= this.duration; i++) {
						dates.push(currentDate)
						currentDate = addDays.call(currentDate, 1)
					}
					return dates
				},
			},
		},
	)

	Trips.hook("beforeUpdate", trips => {
		let arrival = new Date(trips.arrivalDate)
		let departure = new Date(trips.departureDate)

		trips.duration = (departure - arrival) / 86400000 + 1
	})
	return Trips
}
