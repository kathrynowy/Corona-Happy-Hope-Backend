"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus = require("http-status-codes");
/* tslint:disable:no-console */
const errorHandler = (error, req, res, next) => {
    console.log(error.stack || error.message || error);
    const { statusCode, message, additions } = error;
    if (statusCode && message) {
        res.status(statusCode).json(Object.assign({ message }, additions));
    }
    else if (error.errors) {
        res.status(httpStatus.BAD_REQUEST).json({
            message: 'bad request',
        });
    }
    else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR),
        });
    }
};
exports.default = errorHandler;
//# sourceMappingURL=error.js.map