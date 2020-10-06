"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../context");
const types_1 = require("./types");
const Schema = context_1.default.Schema;
const goodsListSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    name: {
        type: Schema.Types.String,
        required: [true, 'name is required'],
    },
    accessRule: {
        type: types_1.AccessRules,
        default: types_1.AccessRules.All,
    },
    description: {
        type: Schema.Types.String,
        required: [true, 'description is required'],
    },
    image: String,
    goods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'good',
        },
    ],
}, { versionKey: false });
goodsListSchema.set('toJSON', {
    virtuals: true,
});
exports.default = context_1.default.model('goodsList', goodsListSchema);
//# sourceMappingURL=schema.js.map