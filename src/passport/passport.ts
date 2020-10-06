import * as passport from 'passport';
import * as passportGoogle from 'passport-google-oauth20';
import * as passportLocal from 'passport-local';

import User from '../User/schema';
import { clientSecretCode, googleClientID } from './config';
import { generateToken } from './service';
import wishListHelper from '../WishList/helpers';
import favouriteListHelper from '../FavouritesList/helpers';
import userHelper from '../User/helpers';

const LocalStrategy = passportLocal.Strategy;
// const GoogleStrategy = passportGoogle.Strategy;

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

passport.use(
  new passportGoogle(
    {
      clientID: googleClientID,
      clientSecret: clientSecretCode,
      callbackURL: '/user/google-auth/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existUser = await User.findOne({ googleId: profile.id });

        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);
        console.log('done', done);

        let newUser = existUser;

        if (existUser) {
          return done(null, existUser);
        }

        if (!existUser) {
          console.log('hey');
          const user = {
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
            googleId: profile.id,
          } as any;

          newUser = await userHelper.create(user);

          const wishlist = await wishListHelper.create({ userId: newUser.id, name: 'вишлист', goods: [] });
          await favouriteListHelper.create({ userId: newUser.id, goods: [] });

          await userHelper.addCurrentWishlist(newUser.id, wishlist.id);
          console.log('newUser', newUser);
        }
        // req.body.token = generateToken(user._id);
        // req.body.currentWishlist = user.currentWishlist;
        // req.body.city = user.city;
        // req.body.country = user.country;
        // req.body.firstName = user.firstName;
        // req.body.lastName = user.lastName;
        // req.body.id = user._id;

        // return done(null, user);
        // return done(null, { ...profile, ...newUser });
        console.log('profile', newUser);

        return done(null, newUser);
      } catch (err) {
        console.log('auth err', err);
      }
    },
  ),
);
passport.serializeUser(function (user, done) {
  console.log('serializeUser: ' + user);
  done(null, user._id);
});
