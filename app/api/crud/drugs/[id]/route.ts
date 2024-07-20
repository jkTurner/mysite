// working before output = export ------------------------

import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/lib/authOptions";

export async function GET(request: Request, {params}: {params: {id: string}}) {
    
    try {
        const id = params.id;
        const drug = await prisma.drug.findUnique({
            where: { id }
        });
        
        return NextResponse.json(drug);

    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            return NextResponse.json(
                { message: "Couldn't fetch data: ", error: error.message },
                { status: 500 }
            );
        }
    }

}

export async function PUT(request: Request, {params}: {params: {id: string}}) {

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json(
            { error: "Not authenticated" },
            { status: 401 },
        )
    }

    const { title, content, storage, imageUrl, catName, publicId } = await request.json();
    const id = params.id;

    try {
        const drug = await prisma.drug.update({
            where: { id },
            data: {
                title, content, storage, imageUrl, catName, publicId,
            }
        })
        return NextResponse.json(drug);

    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json(
                { message: "Error editing drug: ", error: error.message },
                { status: 500 }
            )
        }
    }
}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json(
            { error: "Not authenticated" },
            { status: 401 },
        )
    }

    const id = params.id;

    try {
        const drug = await prisma.drug.delete({
            where: { id }
        });

        return NextResponse.json(drug);

    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json(
                { message: "Error deleting the drug: ", error: error.message },
                { status: 500 }
            )
        }
    }
}




// working before run build -----------------------------

// import prisma from "@/lib/prismadb";
// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// export async function GET(request: Request, {params}: {params: {id: string}}) {
    
//     try {
//         const id = params.id;
//         const drug = await prisma.drug.findUnique({
//             where: { id }
//         });
        
//         return NextResponse.json(drug);

//     } catch (error) {
//         console.log(error)
//         if (error instanceof Error) {
//             return NextResponse.json(
//                 { message: "Couldn't fetch data: ", error: error.message },
//                 { status: 500 }
//             );
//         }
//     }

// }

// export async function PUT(request: Request, {params}: {params: {id: string}}) {

//     const session = await getServerSession(authOptions);
//     if (!session) {
//         return NextResponse.json(
//             { error: "Not authenticated" },
//             { status: 401 },
//         )
//     }

//     const { title, content, storage, imageUrl, catName, publicId } = await request.json();
//     const id = params.id;

//     try {
//         const drug = await prisma.drug.update({
//             where: { id },
//             data: {
//                 title, content, storage, imageUrl, catName, publicId,
//             }
//         })
//         return NextResponse.json(drug);

//     } catch (error) {
//         console.log(error);
//         if (error instanceof Error) {
//             return NextResponse.json(
//                 { message: "Error editing drug: ", error: error.message },
//                 { status: 500 }
//             )
//         }
//     }
// }

// export async function DELETE(request: Request, {params}: {params: {id: string}}) {

//     const session = await getServerSession(authOptions);
//     if (!session) {
//         return NextResponse.json(
//             { error: "Not authenticated" },
//             { status: 401 },
//         )
//     }

//     const id = params.id;

//     try {
//         const drug = await prisma.drug.delete({
//             where: { id }
//         });

//         return NextResponse.json(drug);

//     } catch (error) {
//         console.log(error);
//         if (error instanceof Error) {
//             return NextResponse.json(
//                 { message: "Error deleting the drug: ", error: error.message },
//                 { status: 500 }
//             )
//         }
//     }
// }


