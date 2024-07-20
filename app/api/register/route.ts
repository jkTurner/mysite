import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    try {
        const { name, email, password } = await request.json();
        console.log(name);
        console.log(email);
        console.log(password);
        
        const userExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if(userExists) {
            return new NextResponse("The user already exists", { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword,
            }
        });
        return NextResponse.json(
            { 
                message: "User successfully registered.",
                redirectUrl: "/showcase/auth/login"
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error during registration: ", error);
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        );
    }
}


// working register api without prisma ---------------------------------

// import ConnectMongo from "@/lib/mongodb";
// import User from "@/models/user";
// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// export async function POST(req: NextRequest) {
//     try {
//         const {name, email, password} = await req.json();
//         const hasedPassword = await bcrypt.hash(password, 10);
        
//         await ConnectMongo();

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return NextResponse.json(
//                 { message: "Email already in use." },
//                 { status: 409 } // Conflict status
//             );
//         }

//         await User.create({ name, email, password: hasedPassword });

//         return NextResponse.json(
//             { 
//                 message: "User registered.",
//                 redirectUrl: "/showcase/auth/login"
//             },
//             { status: 201 }
//         );

//     } catch (error) {
//         console.error("Error during registration: ", error);
//         return NextResponse.json(
//             { message: "An error occurred while registering the user." },
//             { status: 500 }
//         );
//     }
// }


