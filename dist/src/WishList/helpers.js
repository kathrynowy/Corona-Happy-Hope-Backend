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
const getById = (wishListId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.findById(wishListId).populate({ path: 'goods', model: schema_1.default }); });
const getAllByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.find({ userId }).populate({ path: 'goods', model: schema_1.default }); });
const addWish = (userId, goodId, wishListId) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (wishListId) {
        const list = (yield schema_2.default.findById(wishListId));
        if (list) {
            result = yield schema_2.default.findByIdAndUpdate(wishListId, { $push: { goods: goodId } });
        }
    }
    else {
        result = (yield schema_2.default.findOneAndUpdate({ userId, name: 'вишлист' }, { $push: { goods: goodId } }));
    }
    return result;
});
const deleteWishByUserId = (userId, goodId, wishListId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.findByIdAndUpdate(wishListId, { $pull: { goods: goodId } }); });
const addBookedGood = (wishListId, goodId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.findByIdAndUpdate(wishListId, { $push: { bookedGoods: goodId } }); });
const removeBookedGood = (wishListId, goodId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.findByIdAndUpdate(wishListId, { $pull: { bookedGoods: goodId } }); });
const getBookedGood = (wishListId, goodId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.findOne({ _id: wishListId, bookedGood: { $in: [goodId] } }); });
const editWishListById = (wishListId, data) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.findByIdAndUpdate(wishListId, data); });
exports.default = {
    create,
    getAllByUserId,
    getById,
    addWish,
    deleteWishByUserId,
    addBookedGood,
    getBookedGood,
    removeBookedGood,
    editWishListById,
};
//# sourceMappingURL=helpers.js.map