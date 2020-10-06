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
const schema_1 = require("./schema");
const create = (data) => schema_1.default.create(data);
const signIn = (email, password) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_1.default.find({ email, password }); });
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_1.default.findById(id); });
const addCurrentWishlist = (userId, wishListId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_1.default.findByIdAndUpdate(userId, { currentWishlist: wishListId }); });
const checkUserExistence = (email) => schema_1.default.find({ email });
const getFollowersById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_1.default.findById(id).populate({ path: 'followers', model: schema_1.default }); });
const getFollowingById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_1.default.findById(id).populate({ path: 'following', model: schema_1.default }); });
const bookGood = (userId, data) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_1.default.findByIdAndUpdate(userId, { $push: { bookedGoods: data } }); });
const unbookGood = (userId, data) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_1.default.findByIdAndUpdate(userId, { $pull: { bookedGoods: data } }); });
const addToFollowing = (userId, followingId) => __awaiter(void 0, void 0, void 0, function* () {
    yield schema_1.default.findByIdAndUpdate(userId, { $push: { following: followingId } });
    yield schema_1.default.findByIdAndUpdate(followingId, { $push: { followers: userId } });
});
const getByName = (name, userId) => __awaiter(void 0, void 0, void 0, function* () {
    name = name.toLowerCase().trim();
    const isFirstAndLast = name.split(' ').length === 2;
    const [first, last] = isFirstAndLast ? name.split(' ') : [];
    return !isFirstAndLast
        ? yield schema_1.default.find({
            _id: { $ne: userId },
            $or: [
                {
                    firstName: {
                        $regex: name,
                        $options: 'ig',
                    },
                },
                {
                    lastName: {
                        $regex: name,
                        $options: 'ig',
                    },
                },
            ],
            followers: { $ne: userId },
        })
        : yield schema_1.default.find({
            _id: { $ne: userId },
            firstName: first,
            lastName: {
                $regex: last,
                $options: 'ig',
            },
            followers: { $ne: userId },
        });
});
const deleteFromFollowing = (userId, followingId) => __awaiter(void 0, void 0, void 0, function* () {
    yield schema_1.default.findByIdAndUpdate(userId, { $pull: { following: followingId } });
    yield schema_1.default.findByIdAndUpdate(followingId, { $pull: { followers: userId } });
});
exports.default = {
    create,
    signIn,
    getById,
    getFollowersById,
    getFollowingById,
    addToFollowing,
    deleteFromFollowing,
    checkUserExistence,
    getByName,
    addCurrentWishlist,
    bookGood,
    unbookGood,
};
//# sourceMappingURL=helpers.js.map