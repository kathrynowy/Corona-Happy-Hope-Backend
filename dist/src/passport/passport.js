"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const passportLocal = require("passport-local");
const schema_1 = require("../User/schema");
const service_1 = require("./service");
const LocalStrategy = passportLocal.Strategy;
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, (req, email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield schema_1.default.findOne({ email });
        if (!user) {
            return done(null, false, { message: 'No user found' });
        }
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Wrong password' });
        }
        req.body.token = service_1.generateToken(user._id);
        req.body.currentWishlist = user.currentWishlist;
        req.body.city = user.city;
        req.body.country = user.country;
        req.body.firstName = user.firstName;
        req.body.lastName = user.lastName;
        req.body.id = user._id;
        return done(null, user);
    }
    catch (error) {
        return done(error, false);
    }
})));
//# sourceMappingURL=passport.js.map