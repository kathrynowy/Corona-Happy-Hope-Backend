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
exports.addIdea = exports.getAll = exports.createIdeasList = void 0;
const mongoose = require("mongoose");
const helpers_1 = require("./helpers");
exports.createIdeasList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const goods = req.body.goods.split(',');
        const convertedGoods = goods.map((good) => mongoose.Types.ObjectId(good.trim()));
        const ideas = yield helpers_1.default.create(req.body.amountofIdeas, convertedGoods);
        res.json(ideas);
    }
    catch (error) {
        next(error);
    }
});
exports.getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allGoods = yield helpers_1.default.getAll();
        res.json(allGoods[0]);
    }
    catch (error) {
        next(error);
    }
});
exports.addIdea = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ideasId, goodId } = req.query;
        res.json(yield helpers_1.default.addIdea(ideasId, goodId));
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=controller.js.map