"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
exports.default = express
    .Router()
    .post('/createIdeasList', controller_1.createIdeasList)
    .get('/getAll', controller_1.getAll)
    .post('/addIdea', controller_1.addIdea);
//# sourceMappingURL=routes.js.map