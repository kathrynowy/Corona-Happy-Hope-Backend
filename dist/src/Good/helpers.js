"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
const create = (data) => schema_1.default.create(data);
const getById = (id) => schema_1.default.findById(id);
exports.default = {
    create,
    getById,
};
//# sourceMappingURL=helpers.js.map