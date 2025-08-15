import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/postsdb";

export async function connectMongo() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Conectado ao MongoDB");
    } catch (e) {
        console.error("❌ Erro ao conectar no MongoDB:", e.message);
        process.exit(1);
    }
}
