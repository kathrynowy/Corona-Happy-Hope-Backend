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
exports.signIn = exports.getFollowingByUserId = exports.addToFollowing = exports.getFollowersByUserId = exports.getUsersByName = exports.bookGood = exports.getUserById = exports.changeCurrentWishlist = exports.signUp = void 0;
const helpers_1 = require("../FavouritesList/helpers");
const service_1 = require("../passport/service");
const helpers_2 = require("../WishList/helpers");
const helpers_3 = require("./helpers");
exports.signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('body', req.body);
    const isUserExist = yield helpers_3.default.checkUserExistence(req.body.email);
    if (isUserExist && isUserExist.length) {
        return res.status(500).json({ error: 'email must be unick' });
    }
    else {
        try {
            const newUser = yield helpers_3.default.create(Object.assign(Object.assign({}, req.body), { password: service_1.generateHash(req.body.password) }));
            const wishlist = yield helpers_2.default.create({ userId: newUser.id, name: 'вишлист', goods: [] });
            yield helpers_1.default.create({ userId: newUser.id, goods: [] });
            yield helpers_3.default.addCurrentWishlist(newUser.id, wishlist.id);
            res.json(newUser);
        }
        catch (error) {
            next(error);
        }
    }
});
exports.changeCurrentWishlist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, wishListId } = req.body;
        res.json(yield helpers_3.default.addCurrentWishlist(userId, wishListId));
    }
    catch (error) {
        next(error);
    }
});
exports.getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const newuser = yield helpers_3.default.getById(userId);
        res.json(newuser);
    }
    catch (error) {
        next(error);
    }
});
exports.bookGood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, bookUserId, goodId, wishListId } = req.body;
        const isAlreadyBooked = yield helpers_2.default.getBookedGood(wishListId, goodId);
        let good;
        if (!isAlreadyBooked) {
            good = yield helpers_3.default.bookGood(userId, { bookUserId, goodId, wishListId });
            const addedToWishListBookedGoods = yield helpers_2.default.addBookedGood(wishListId, goodId);
        }
        else {
            good = yield helpers_3.default.unbookGood(userId, { bookUserId, goodId, wishListId });
            const removeFromWishListBookedGoods = yield helpers_2.default.removeBookedGood(wishListId, goodId);
        }
        res.json(good);
    }
    catch (error) {
        next(error);
    }
});
exports.getUsersByName = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, userId } = req.query;
        const users = yield helpers_3.default.getByName(name, userId);
        res.json(users);
    }
    catch (error) {
        next(error);
    }
});
exports.getFollowersByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.query;
        const user = yield helpers_3.default.getFollowersById(userId);
        res.json(user.followers);
    }
    catch (error) {
        next(error);
    }
});
exports.addToFollowing = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, followingId } = req.body;
        const currentUser = yield helpers_3.default.getById(userId);
        const isAlreadyFollowing = currentUser.following.includes(followingId);
        if (!isAlreadyFollowing) {
            yield helpers_3.default.addToFollowing(userId, followingId);
        }
        else {
            yield helpers_3.default.deleteFromFollowing(userId, followingId);
        }
        res.json({});
    }
    catch (error) {
        console.log('err', error);
        next(error);
    }
});
exports.getFollowingByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.query;
        const user = yield helpers_3.default.getFollowingById(userId);
        res.json(user.following);
    }
    catch (error) {
        next(error);
    }
});
exports.signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            email: req.body.email,
            token: req.body.token,
            id: req.body.id,
            city: req.body.city,
            country: req.body.country,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            currentWishlist: req.body.currentWishlist,
        }); // TODO:
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=controller.js.map