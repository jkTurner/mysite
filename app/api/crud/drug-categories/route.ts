import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const categories = await prisma.drugCategory.findMany();

        // Sort categories and make other last
        const sortedCategories = categories.sort((a, b) => {
            if (a.catName === "Other") return 1;
            if (b.catName === "Other") return -1;
            return 0;
        });

        return NextResponse.json(sortedCategories);
    } catch (error) {
        console.log(error);
        return NextResponse.json("Something went wrong");
    }
}