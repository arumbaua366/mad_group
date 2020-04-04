const bCrypt = require('bcrypt-nodejs')

module.exports = function (passport, user) {
	const User = user
	const LocalStrategy = require('passport-local').Strategy

	passport.use(
		'local-signup',
		new LocalStrategy(
			{
				usernameField: 'email',
				passwordField: 'password',
				passReqToCallback: true, // allows us to pass back the entire request to the callback
			},
			function (req, email, password, done) {
				const generateHash = function (password) {
					return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
				}

				User.findOne({
					where: {
						email: email,
					},
				}).then(function (user) {
					if (user) {
						return done(null, false, {
							message: 'That email is already taken',
						})
					} else {
						var userPassword = generateHash(password)

						var data = {
							email: email,

							password: userPassword,

							firstName: req.body.firstname,

							lastName: req.body.lastname,
						}

						User.create(data).then(function (newUser) {
							if (!newUser) {
								return done(null, false)
							}

							if (newUser) {
								return done(null, newUser)
							}
						})
					}
				})
			},
		),

		passport.use(
			'local-signin',
			new LocalStrategy(
				{
					// by default, local strategy uses username and password, we will override with email

					usernameField: 'email',

					passwordField: 'password',
					// allows us to pass back the entire request to the callback
				},
				function (username, password, done) {
					const isValidPassword = function (userpass, password) {
						return bCrypt.compareSync(password, userpass)
					}
					User.findOne({
						where: {
							email: username,
						},
					})
						.then(user => {
							if (!user) {
								return done(null, false, { message: 'Incorrect username.' })
							}
							if (!isValidPassword(user.password, password)) {
								return done(null, false, { message: 'Incorrect password.' })
							}
							return done(null, user)
						})
						.catch(err => done(err))
				},
			),
		),
		passport.serializeUser(function (user, done) {
			done(null, user.id)
		}),
		// deserialize user
		passport.deserializeUser(function (id, done) {
			User.findOne({
				where: {
					id: id,
				},
			}).then(function (user) {
				if (user) {
					done(null, user.get())
				} else {
					done(user.errors, null)
				}
			})
		}),
	)
}
