"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
exports.default = express.Router().post('/addGood', controller_1.addGood).get('/getGoodById', controller_1.getGoodById);
//# sourceMappingURL=routes.js.map