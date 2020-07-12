"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
exports.default = express
    .Router()
    .post('/createWishList', controller_1.createWishList)
    .post('/getWishListById', controller_1.getWishListById)
    .post('/getAllWishListsByUserId', controller_1.getAllWishListsByUserId)
    .post('/addWishGood', controller_1.addWishGood)
    .post('/editWishList', controller_1.editWishList)
    .post('/deleteWish', controller_1.deleteWish);
//# sourceMappingURL=routes.js.map