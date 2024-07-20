import mongoose, { Schema, Document, models } from "mongoose";

interface IDrug extends Document {
    name: string;
    category: string;
    details: string;
    storage: string;
}

const drugSchema = new Schema<IDrug> ({
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: true,
        },
        storage: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

const Drug = models.Drug || mongoose.model("Drug", drugSchema);
export default Drug;