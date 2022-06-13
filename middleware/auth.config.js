const passport = require("passport");
const userModel = require("../dal/models/users");

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((userId, done) => {
    userModel
      .findById(userId)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => done(err));
  });

  // Passport Strategies
  require("./auth-passport-local")();
};
