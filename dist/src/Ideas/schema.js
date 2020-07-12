"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../context");
const Schema = context_1.default.Schema;
const ideasSchema = new Schema({
    amountOfIdeas: {
        type: Schema.Types.Number,
        default: 0,
    },
    goods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'good',
        },
    ],
}, { versionKey: false });
ideasSchema.set('toJSON', {
    virtuals: true,
});
exports.default = context_1.default.model('ideas', ideasSchema);
//# sourceMappingURL=schema.js.map