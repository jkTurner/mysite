// working before output = export --------------------------

import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };



// working before run build --------------------------------------

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { AuthOptions } from "next-auth";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import bcrypt from "bcryptjs";
// import prisma from "@/lib/prismadb";

// export const authOptions: AuthOptions = {
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//         }),
//         CredentialsProvider({
//             name: "credentials",
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },

//             async authorize(credentials) {
//                 if(!credentials) {
//                     throw new Error("No credentials provided.");
//                 }
//                 const { email, password } = credentials;
//                 const user = await prisma.user.findUnique({
//                     where: {
//                         email: email
//                     }
//                 });
//                 if(!user) {
//                     throw new Error("User doesn't exist.");
//                 }
//                 const passwordsMatch = await bcrypt.compare(password, user.password!);
//                 if(!passwordsMatch) {
//                     throw new Error("Incorrect password");
//                 }
//                 return user;
//             }
//         })
//     ],
//     session: {
//         strategy: "jwt",
//     },
//     pages: {
//         signIn: "/showcase/auth/login",
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     debug: process.env.NODE_ENV === "development",
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// import ConnectMongo from "@/lib/mongodb";
// import User from "@/models/user";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";


// import { AuthOptions } from "next-auth";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import prisma from "@/lib/prismadb";

// const authOptions: AuthOptions = {
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//         }),
//         CredentialsProvider({
//             name: "credentials",
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 if (!credentials) {
//                     throw new Error("No credentials provided.");
//                 }
//                 const { email, password } = credentials;
//                 try {
//                     await ConnectMongo();
//                     const user = await User.findOne({ email });

//                     if (!user) {
//                         throw new Error("No user found with this email.");
//                     }
//                     const passwordsMatch = await bcrypt.compare(password, user.password);
//                     if (!passwordsMatch) {
//                         throw new Error("Incorect password");
//                     }
//                     return user;
//                 } catch (error) {
//                     console.error("Error in authorization: ", error);
//                     throw new Error("Failed to login, please check your email and password.");
//                 }
//             },
//         }),
//     ],
//     sessions: {
//         strategy: "jwt",
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     pages: {
//         signIn: "/showcase/auth/login",
//     },
//     callbacks: {
//         async signIn({ user, account }: { user: any; account: any }) {
//             console.log("User: ", user);
//             console.log("Account: ", account);

//             if (account.provider === 'google') {
//                 const { name, email, image, id } = user;

//                 try {
//                     await ConnectMongo();
//                     const userExist = await User.findOne({ email });

//                     if(!userExist) {
//                         const res = await fetch('http://localhost:3000/api/user', {
//                             method: "POST",
//                             headers: {
//                                 "Content-Type": "application/json",
//                             },
//                             body: JSON.stringify({
//                                 name,
//                                 email,
//                                 image,
//                                 googleId: id,
//                             })
//                         });
//                         if (res.ok) {
//                             console.log("New Google user registered successfully.");
//                             return user;
//                         } else {
//                             console.error("Failed to register new Google user.");
//                         }
//                     }
//                 } catch (error) {
//                     console.error("Error during Google user sign-in: ", error);
//                     return NextResponse.json(
//                         { message: "An error occurred while registering the user." },
//                         { status: 500 }
//                     );
//                 }
//             }
//             return user;
//         },
//         // async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
//         //     return baseUrl + '/showcase/auth/dashboard';
//         // }
//     },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };



// import ConnectMongo from "@/lib/mongodb";
// import User from "@/models/user";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";

// const authOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//         }),
//         CredentialsProvider({
//             name: "credentials",
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 if (!credentials) {
//                     throw new Error("No credentials provided.");
//                 }
//                 const { email, password } = credentials;
//                 try {
//                     await ConnectMongo();
//                     const user = await User.findOne({ email });

//                     if (!user) {
//                         throw new Error("No user found with this email.");
//                     }
//                     const passwordsMatch = await bcrypt.compare(password, user.password);
//                     if (!passwordsMatch) {
//                         throw new Error("Incorect password");
//                     }
//                     return user;
//                 } catch (error) {
//                     console.error("Error in authorization: ", error);
//                     throw new Error("Failed to login, please check your email and password.");
//                 }
//             },
//         }),
//     ],
//     sessions: {
//         strategy: "jwt",
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     pages: {
//         signIn: "/showcase/auth/login",
//     },
//     callbacks: {
//         async signIn({ user, account }: { user: any; account: any }) {
//             console.log("User: ", user);
//             console.log("Account: ", account);

//             if (account.provider === 'google') {
//                 const { name, email, image, id } = user;

//                 try {
//                     await ConnectMongo();
//                     const userExist = await User.findOne({ email });

//                     if(!userExist) {
//                         const res = await fetch('http://localhost:3000/api/user', {
//                             method: "POST",
//                             headers: {
//                                 "Content-Type": "application/json",
//                             },
//                             body: JSON.stringify({
//                                 name,
//                                 email,
//                                 image,
//                                 googleId: id,
//                             })
//                         });
//                         if (res.ok) {
//                             console.log("New Google user registered successfully.");
//                             return user;
//                         } else {
//                             console.error("Failed to register new Google user.");
//                         }
//                     }
//                 } catch (error) {
//                     console.error("Error during Google user sign-in: ", error);
//                     return NextResponse.json(
//                         { message: "An error occurred while registering the user." },
//                         { status: 500 }
//                     );
//                 }
//             }
//             return user;
//         },
//         // async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
//         //     return baseUrl + '/showcase/auth/dashboard';
//         // }
//     },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


