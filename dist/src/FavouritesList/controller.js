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
exports.addFavouriteGood = exports.getFavouriteListByUserId = exports.createFavouritesList = void 0;
const helpers_1 = require("./helpers");
exports.createFavouritesList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield helpers_1.default.create(req.body);
        res.json(list);
    }
    catch (error) {
        next(error);
    }
});
exports.getFavouriteListByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.query;
        const favourites = yield helpers_1.default.getByUserId(userId || '');
        res.json(favourites[0]);
    }
    catch (error) {
        next(error);
    }
});
exports.addFavouriteGood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, goodId } = req.body;
        const favourite = yield helpers_1.default.addFavourite(userId, goodId);
        res.json(favourite);
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=controller.js.map