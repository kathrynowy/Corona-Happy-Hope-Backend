"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../context");
const Schema = context_1.default.Schema;
const goodSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: [true, 'firstName is required'],
    },
    price: {
        type: Schema.Types.Number,
        required: [true, 'price is required'],
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    discount: Number,
    description: {
        type: Schema.Types.String,
        required: [true, 'description is required'],
    },
    image: {
        type: Schema.Types.String,
        required: [true, 'image is required'],
    },
}, { versionKey: false });
goodSchema.set('toJSON', {
    virtuals: true,
});
exports.default = context_1.default.model('good', goodSchema);
//# sourceMappingURL=schema.js.map