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
exports.addGood = exports.getAllGoodListsByUserId = exports.createGoodsList = void 0;
const helpers_1 = require("./helpers");
exports.createGoodsList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield helpers_1.default.create(req.body);
        res.json(list);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllGoodListsByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.query;
        res.json(yield helpers_1.default.getAllByUserId(userId));
    }
    catch (error) {
        next(error);
    }
});
exports.addGood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { listId, goodId } = req.query;
        res.json(yield helpers_1.default.addGood(listId, goodId));
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=controller.js.map