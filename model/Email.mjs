import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EmailSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

export default mongoose.model('Email', EmailSchema);