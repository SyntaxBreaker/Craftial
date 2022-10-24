import mongoose from "mongoose";
import { IOffer } from "../types";

const Schema = mongoose.Schema;

const offerSchema = new Schema<IOffer>({
    id: {type: String, required: true},
    title: {type: String, required: true},
    location: {type: String, required: true},
    price: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    description: {type: String, required: true},
}, {timestamps: true});

export default mongoose.model('Offer', offerSchema);