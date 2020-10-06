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
exports.getBookedGoods = exports.getGoodById = exports.addGood = void 0;
const helpers_1 = require("../WishList/helpers");
const helpers_2 = require("./helpers");
exports.addGood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const good = yield helpers_2.default.create(req.body);
        const wishListIds = req.body.wishListIds;
        wishListIds.forEach((wishListId) => __awaiter(void 0, void 0, void 0, function* () {
            yield helpers_1.default.addWish(req.body.userId, good.id, wishListId);
        }));
        res.json(good);
    }
    catch (error) {
        next(error);
    }
});
exports.getGoodById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { goodId } = req.query;
        res.json(yield helpers_2.default.getById(goodId));
    }
    catch (error) {
        next(error);
    }
});
exports.getBookedGoods = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { goodId } = req.query;
        res.json(yield helpers_2.default.getById(goodId));
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=controller.js.map