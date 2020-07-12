"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus = require("http-status-codes");
const notFoundHandler = (req, res) => {
    res.status(httpStatus.NOT_FOUND).json({
        message: httpStatus.getStatusText(httpStatus.NOT_FOUND)
    });
};
exports.default = notFoundHandler;
//# sourceMappingURL=not-found.js.map