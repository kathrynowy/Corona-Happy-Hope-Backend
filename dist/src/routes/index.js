"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("../FavouritesList/routes");
const routes_2 = require("../FriendsList/routes");
const routes_3 = require("../Good/routes");
const routes_4 = require("../GoodsList/routes");
const routes_5 = require("../Ideas/routes");
const routes_6 = require("../User/routes");
const routes_7 = require("../WishList/routes");
exports.default = express
    .Router()
    .use('/user', routes_6.default)
    .use('/goods', routes_3.default)
    .use('/goodsList', routes_4.default)
    .use('/friendsList', routes_2.default)
    .use('/wishList', routes_7.default)
    .use('/ideas', routes_5.default)
    .use('/favouritesList', routes_1.default);
//# sourceMappingURL=index.js.map