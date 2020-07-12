"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../context");
const Schema = context_1.default.Schema;
const friendsListSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    name: {
        type: Schema.Types.String,
        required: [true, 'name is required'],
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    description: {
        type: Schema.Types.String,
        required: [true, 'description is required'],
    },
    image: {
        type: String,
        default: '',
    },
}, { versionKey: false });
friendsListSchema.set('toJSON', {
    virtuals: true,
});
exports.default = context_1.default.model('friendsList', friendsListSchema);
//# sourceMappingURL=schema.js.map