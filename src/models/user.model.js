import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        mobilePhone: { type: Number, required: false },
        role: {
            type: String,
            enum: ["professor", "aluno", "administrador"], // papéis fixos
            default: "aluno",
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

export const User = mongoose.model("User", userSchema);
