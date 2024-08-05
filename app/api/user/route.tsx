import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ success: true, data: users });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Failed to fetch users' }, { status: 500 });
    }
}