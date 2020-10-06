"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = exports.generateToken = void 0;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
exports.generateToken = (id) => {
    const token = jwt.sign({
        id,
        expiresIn: '1d',
    }, 'mySecretKey');
    return `bearer ${token}`;
};
exports.generateHash = (password) => bcrypt.hashSync(password, saltRounds);
//# sourceMappingURL=service.js.map