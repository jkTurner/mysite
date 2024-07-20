// working before output = exporot ---------------------------

import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function GET(request: Request, {params}: {params: {catName: string}}) {
    
    const catName = params.catName;

    try {
        const drugs = await prisma.drugCategory.findUnique({
            where: { catName },
            include: {
                drug: {
                    include: { author: true },
                    orderBy: { createdAt: "desc" },
                }
            }
        });
        return NextResponse.json(drugs);
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json(
                { message: "Couldn't fetch data: ", error: error.message },
                { status: 500 }
            );
        }
    }
}



