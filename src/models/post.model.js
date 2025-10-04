import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: String, required: true },
        userId: {type: String, required: true},
        urlImage: {type: String, required: true},
        createdAt: {type: Date, required: false},
        updatedAt: {type: Date, required: false}
    },
    { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
