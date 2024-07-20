import ConnectMongo from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Drug from "@/models/drug";

export async function POST(req: NextRequest) {
    try {
        const { name, category, details, storage } = await req.json();

        console.log("Name: ", name);
        console.log("Category: ", category);
        console.log("Details: ", details);
        console.log("Storage: ", storage);

        await ConnectMongo();
        await Drug.create({ name, category, details, storage });

        return NextResponse.json(
            { message: "Post created." },
            { status: 201 }
        );
    } catch (error) {
        console.log("Error during creating post: ", error);
        return NextResponse.json(
            { message: "An error occured while creating the post." },
            { status: 500}
        );
    }
}