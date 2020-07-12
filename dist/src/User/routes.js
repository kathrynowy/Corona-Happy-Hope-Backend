"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passport = require("passport");
const controller_1 = require("./controller");
exports.default = express
    .Router()
    .post('/signUp', controller_1.signUp)
    .post('/getUserById', controller_1.getUserById)
    .post('/bookGood', controller_1.bookGood)
    .post('/signIn', passport.authenticate('local-login', { session: false }), controller_1.signIn)
    .get('/getFollowers', controller_1.getFollowersByUserId)
    .post('/addToFollowing', controller_1.addToFollowing)
    .get('/getUsersByName', controller_1.getUsersByName)
    .post('/changeCurrentWishlist', controller_1.changeCurrentWishlist)
    .get('/getFollowing', controller_1.getFollowingByUserId);
//# sourceMappingURL=routes.js.map