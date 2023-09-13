import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_no: { type: String, required: true, unique: true }
});

const Person = mongoose.model("Person", personSchema);

export default Person;