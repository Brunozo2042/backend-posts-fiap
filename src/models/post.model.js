import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: String, required: true },
        userId: { type: Number, required: true },
        urlImage: { type: String, required: true },
        posted: { type: Boolean, required: true },
        excluded: { type: Boolean, required: true },
    },
    { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
