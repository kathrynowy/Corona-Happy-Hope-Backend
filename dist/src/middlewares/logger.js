"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-console */
const logger = (req, res, next) => {
    console.log(`${req.method.toUpperCase()}: ${req.url}`);
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map