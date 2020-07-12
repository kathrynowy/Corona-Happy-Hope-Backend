"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
exports.default = express
    .Router()
    .post('/createFriendList', controller_1.createFriendList)
    .post('/getListById', controller_1.getListById)
    .get('/getAllFriendListsByUserId', controller_1.getAllFriendListsByUserId)
    .post('/editFriendList', controller_1.editFriendList)
    .post('/addFriend', controller_1.addFriend);
//# sourceMappingURL=routes.js.map