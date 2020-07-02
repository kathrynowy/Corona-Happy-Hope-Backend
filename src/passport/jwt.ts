import * as passport from 'passport';
import * as passportJWT from 'passport-jwt';
import User from '../User/schema';

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

passport.use(
  'jwt',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'mySecretKey', // TODO:
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findById(jwtPayload.id);
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      } catch (error) {
        done(error, false);
      }
    },
  ),
);
