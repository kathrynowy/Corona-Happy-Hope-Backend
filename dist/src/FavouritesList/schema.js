"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../context");
const Schema = context_1.default.Schema;
const favouritesListSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    goods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'good',
        },
    ],
}, { versionKey: false });
favouritesListSchema.set('toJSON', {
    virtuals: true,
});
exports.default = context_1.default.model('favouritesList', favouritesListSchema);
//# sourceMappingURL=schema.js.map