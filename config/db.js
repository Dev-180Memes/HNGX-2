import mongoose from "mongoose";
import env from "./env.js";

const mongodb_uri = env.MONGODB_URI

mongoose.connect(mongodb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));