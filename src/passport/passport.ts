import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import User from '../User/schema';
import { generateToken } from './service';

const LocalStrategy = passportLocal.Strategy;

passport.use(
  'local-login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'No user found' });
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Wrong password' });
        }

        req.body.token = generateToken(user._id);
        req.body.currentWishlist = user.currentWishlist;
        req.body.city = user.city;
        req.body.country = user.country;
        req.body.firstName = user.firstName;
        req.body.lastName = user.lastName;
        req.body.id = user._id;

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);
