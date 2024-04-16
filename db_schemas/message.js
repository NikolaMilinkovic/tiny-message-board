const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: { type: String, required: true, maxLength: 100 },
    name: { type: String, required: true, maxLength: 100 },
    added: { type: Date, required: true}
})

module.exports = mongoose.model("messages", MessageSchema);