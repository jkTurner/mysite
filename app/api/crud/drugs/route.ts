import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/lib/authOptions";

export async function POST(request: Request) {

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json(
            { error: "Not authenticated" },
            { status: 401 },
        )
    }

    const { title, content, storage, imageUrl, catName, publicId } = await request.json();
    const authorEmail = session?.user?.email as string;

    if (!title || !content) {
        return NextResponse.json(
            { error: "Title and content are required." },
            { status: 500 },
        );
    }

    try {
        const newDrug = await prisma.drug.create({
            data: {
                title,
                content,
                storage,
                imageUrl,
                catName,
                publicId,
                authorEmail,
            },
        });

        console.log("Drug created");
        return NextResponse.json(newDrug);
    } catch (error) {
        console.error("Error creating drug:", error);
        if (error instanceof Error) {
            return NextResponse.json({ message: "Couldn't create drug", error: error.message });
        }
    }
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = 12;
    const skip = (page - 1) * pageSize;

    try {
        const [drug, total] = await Promise.all([
            prisma.drug.findMany({
                include: {
                    category: true, // Include the related category
                    author: {
                        select: { name: true }
                    }
                },
                orderBy: {
                    createdAt: "desc",
                },
                skip,
                take: pageSize,
            }),
            prisma.drug.count(),
        ]);

        return NextResponse.json({ drug, total });
    } catch (error) {
        console.error("Error fetching data: ", error);
        if (error instanceof Error) {
            return NextResponse.json(
                { message: "Couldn't fetch data: ", error: error.message },
                { status: 500 }
            );
        }
    }
}