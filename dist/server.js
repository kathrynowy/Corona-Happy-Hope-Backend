"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = require("dotenv");
const express = require("express");
const middlewares_1 = require("./src/middlewares");
const app = express();
env.config();
middlewares_1.default(app);
exports.default = app;
//# sourceMappingURL=server.js.map