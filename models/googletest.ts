import mongoose, { Schema, Document, models } from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    // imageUrl: string;
    // googleId?: string; // Add googleId for Google users
}

const userGoogleSchema = new Schema<IUser> ({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        // imageUrl: { 
        //     type: String,
        // },
        // googleId: {
        //     type: String,
        //     unique: true,
        // }
    },
    { timestamps: true }
);

const userGoogle = models.UserGoogle || mongoose.model("UserGoogle", userGoogleSchema);

export default userGoogle;

