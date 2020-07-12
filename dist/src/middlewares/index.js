"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
require("../passport");
const routes_1 = require("../routes");
const error_1 = require("./error");
const logger_1 = require("./logger");
const not_found_1 = require("./not-found");
exports.default = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(logger_1.default);
    app.use(cors());
    app.use(passport.initialize());
    app.use(routes_1.default);
    app.all('*', not_found_1.default);
    app.use(error_1.default);
};
//# sourceMappingURL=index.js.map