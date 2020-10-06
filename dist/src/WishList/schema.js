"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../context");
const Schema = context_1.default.Schema;
const wishListSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    name: {
        type: String,
        default: 'вишлист',
    },
    image: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    goods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'good',
            unique: true,
        },
    ],
    bookedGoods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'good',
        },
    ],
}, { versionKey: false });
wishListSchema.set('toJSON', {
    virtuals: true,
});
exports.default = context_1.default.model('wishList', wishListSchema);
//# sourceMappingURL=schema.js.map