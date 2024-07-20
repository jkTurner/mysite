import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        }, 
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
        },
        image: {
            type: String,
        },
        googleId: {
            type: String,
        },
    },
    { timestamps: true}
);

const User = models.User || mongoose.model('User', userSchema)
export default User;













// import mongoose, { Schema, Document, models } from "mongoose";

// interface IUser extends Document {
//     name: string;
//     email: string;
//     password: string;
//     imageUrl: string;
// }

// const userSchema = new Schema<IUser> ({
//         name: {
//             type: String,
//             required: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//         imageUrl: { type: String},
//     },
//     { timestamps: true }
// );

// const User = models.User || mongoose.model("User", userSchema);

// export default User;

