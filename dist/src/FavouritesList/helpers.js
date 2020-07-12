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
const schema_1 = require("../Good/schema");
const schema_2 = require("./schema");
const create = (data) => schema_2.default.create(data);
const getByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.find({ userId }).populate({ path: 'goods', model: schema_1.default }); });
const addFavourite = (userId, goodId) => __awaiter(void 0, void 0, void 0, function* () {
    const list = (yield schema_2.default.findOne({ userId }));
    let result;
    if (list) {
        const isAlreadyInFavourites = list.goods.includes(goodId);
        result = isAlreadyInFavourites
            ? yield schema_2.default
                .findByIdAndUpdate(list.id, { $pull: { goods: goodId } })
                .populate({ path: 'goods', model: schema_1.default })
            : yield schema_2.default.findByIdAndUpdate(list.id, { $push: { goods: goodId } });
    }
    else {
        result = yield schema_2.default.create({ userId, goods: [goodId] });
    }
    return result;
});
exports.default = {
    create,
    getByUserId,
    addFavourite,
};
//# sourceMappingURL=helpers.js.map