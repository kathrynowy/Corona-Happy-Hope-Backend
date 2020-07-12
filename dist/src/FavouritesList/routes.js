"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
exports.default = express
    .Router()
    .post('/createFavouritesList', controller_1.createFavouritesList)
    .get('/getFavouriteListByUserId', controller_1.getFavouriteListByUserId)
    .post('/addFavouriteGood', controller_1.addFavouriteGood);
//# sourceMappingURL=routes.js.map