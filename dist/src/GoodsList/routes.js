"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
exports.default = express
    .Router()
    .post('/createGoodList', controller_1.createGoodsList)
    .get('/getAllGoodListsByUserId', controller_1.getAllGoodListsByUserId)
    .post('/addFriend', controller_1.addGood);
//# sourceMappingURL=routes.js.map