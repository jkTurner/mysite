import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/lib/authOptions";

export async function GET(request: Request, { params }: { params: { email: string } }) {
    try {
        const email = params.email;
        const user = await prisma.user.findUnique({
            where: { email }
        });

        return NextResponse.json(user);

    } catch (error) {
        console.error("Error fetching user (api > user > [email] > route): ", error);
        if (error instanceof Error) {
            return NextResponse.json(
                { message: "Couldn't fetch user: ", error: error.message },
                { status: 500 }
            );
        }
    }
}

export async function PUT(request: Request, { params }: { params: { email: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json(
            { error: "Not authenticated" },
            { status: 401 },
        )
    }

    const { name, image, publicId } = await request.json();
    const email = params.email;

    try {
        const user = await prisma.user.update({
            where: { email },
            data: {
                name, image, publicId,
            }
        })

        return NextResponse.json(user);

    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json(
                { message: "Error updating the user: ", error: error.message },
                { status: 500 }
            )
        }
    }
}