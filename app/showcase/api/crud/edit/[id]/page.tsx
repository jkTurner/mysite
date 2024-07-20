// working before output = export ------------------------

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions";
import { redirect } from "next/navigation";
import EditPost from "../components/EditPost";
import { DrugType } from "@/app/types/types";

const getPost = async (id: string): Promise<DrugType | null> => {
    
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/crud/drugs/${id}`, 
            { cache: "no-store" }
        );

        if (res.ok) {
            const post = await res.json();
            return post;
        }

    } catch (error) {
        console.error("Error fetching the post: ", error);
    }

    return null;
}

const EditPage = async ({params}: {params: {id: string}}) => {
    const id = params.id;
    
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/showcase/auth/login");
    }

    const post = await getPost(id);
    console.log("The post: ", post);

    return (
        <div>
            <div className="mb-2">Editor:</div>
            { post ? 
                <EditPost post={post} />
                 : 
                <div>Invalid Post</div>
            }
        </div>
    )
}

export default EditPage;




// working before run build ----------------------

// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";
// import EditPost from "../components/EditPost";
// import { DrugType } from "@/app/types/types";

// const getPost = async (id: string): Promise<DrugType | null> => {
    
//     try {
//         const res = await fetch(`${process.env.NEXTAUTH_URL}/api/crud/drugs/${id}`, 
//             { cache: "no-store" }
//         );

//         if (res.ok) {
//             const post = await res.json();
//             return post;
//         }

//     } catch (error) {
//         console.error("Error fetching the post: ", error);
//     }

//     return null;
// }

// const EditPage = async ({params}: {params: {id: string}}) => {
//     const id = params.id;
    
//     const session = await getServerSession(authOptions);
//     if (!session) {
//         redirect("/showcase/auth/login");
//     }

//     const post = await getPost(id);
//     console.log("The post: ", post);

//     return (
//         <div>
//             <div className="mb-2">Editor:</div>
//             { post ? 
//                 <EditPost post={post} />
//                  : 
//                 <div>Invalid Post</div>
//             }
//         </div>
//     )
// }

// export default EditPage;


