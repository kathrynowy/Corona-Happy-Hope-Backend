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
const schema_1 = require("../User/schema");
const schema_2 = require("./schema");
const create = (data) => schema_2.default.create(data);
const getAllByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.find({ userId }); });
const getById = (listId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.findById(listId).populate({ path: 'friends', model: schema_1.default }); });
const addFriend = (listId, userId) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.findByIdAndUpdate(listId, { $push: { accessUsers: userId } }); });
const editFriendListById = (friendListId, data) => __awaiter(void 0, void 0, void 0, function* () { return yield schema_2.default.findByIdAndUpdate(friendListId, data); });
exports.default = {
    create,
    getAllByUserId,
    addFriend,
    getById,
    editFriendListById,
};
//# sourceMappingURL=helpers.js.map