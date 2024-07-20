// working before output = export ---------------------

import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function GET(request: Request, {params}: {params: {email: string}}) {
    const email = params.email;

    try {
        const drugs = await prisma.user.findUnique({
            where: { email },
            include: {
                drug: {
                    orderBy: { createdAt: "desc" },
                },
            },
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



