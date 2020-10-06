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
exports.addWishGood = exports.getAllWishListsByUserId = exports.getWishListById = exports.editWishList = exports.deleteWish = exports.createWishList = void 0;
const helpers_1 = require("./helpers");
exports.createWishList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield helpers_1.default.create(req.body);
        res.json(list);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteWish = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, goodId, wishListId } = req.body;
        const deleted = yield helpers_1.default.deleteWishByUserId(userId, goodId, wishListId);
        res.json(deleted);
    }
    catch (error) {
        next(error);
    }
});
exports.editWishList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { wishListId, data } = req.body;
        const deleted = yield helpers_1.default.editWishListById(wishListId, data);
        res.json(deleted);
    }
    catch (error) {
        next(error);
    }
});
exports.getWishListById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { currentWishList } = req.body;
        const wishList = yield helpers_1.default.getById(currentWishList);
        res.json(wishList);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllWishListsByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const wishList = yield helpers_1.default.getAllByUserId(userId);
        res.json(wishList);
    }
    catch (error) {
        next(error);
    }
});
exports.addWishGood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, goodId, currentWishList } = req.body;
        const control = yield helpers_1.default.addWish(userId, goodId, currentWishList);
        res.json(control);
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=controller.js.map