const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    active: {
        type: Boolean,
        default: false
    },
    name: String,
    desc: String,
    price: String,
    photos: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {
    timeStamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});