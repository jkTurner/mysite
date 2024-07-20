import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions";
import { redirect } from "next/navigation";
import { User } from "@/app/types/types";
import EditUser from "../components/EditUser";

const getUser = async (email: string): Promise<User | null> => {
    
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${email}`, 
            { cache: "no-store" }
        );

        if (res.ok) {
            const user = await res.json();
            return user;
        }

    } catch (error) {
        console.error("Error fetching the user: ", error);
    }

    return null;
}

const EditProfilePage = async ({params}: {params: {email: string}}) => {

    const email = decodeURIComponent(params.email);
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        redirect("/showcase/auth/login");
    }

    if (session.user.email !== email) {
        // Redirect to their own profile page or an error page
        console.log(email);
        console.log(session.user.email);
        redirect("/showcase/auth/dashboard");
        return;
    }

    const user = await getUser(email);
    console.log("The user: ", user);

    return (
        <div>
            <div className="mb-2">Editor:</div>
            { user ?
                <EditUser user={user} />
                :
                <div>Invalid User</div>
            }
        </div>
    )
}

export default EditProfilePage;


// working before run build ----------------------------

// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";
// import { User } from "@/app/types/types";
// import EditUser from "../components/EditUser";

// const getUser = async (email: string): Promise<User | null> => {
    
//     try {
//         const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${email}`, 
//             { cache: "no-store" }
//         );

//         if (res.ok) {
//             const user = await res.json();
//             return user;
//         }

//     } catch (error) {
//         console.error("Error fetching the user: ", error);
//     }

//     return null;
// }

// const EditProfilePage = async ({params}: {params: {email: string}}) => {

//     const email = decodeURIComponent(params.email);
//     const session = await getServerSession(authOptions);

//     if (!session || !session.user) {
//         redirect("/showcase/auth/login");
//     }

//     if (session.user.email !== email) {
//         // Redirect to their own profile page or an error page
//         console.log(email);
//         console.log(session.user.email);
//         redirect("/showcase/auth/dashboard");
//         return;
//     }

//     const user = await getUser(email);
//     console.log("The user: ", user);

//     return (
//         <div>
//             <div className="mb-2">Editor:</div>
//             { user ?
//                 <EditUser user={user} />
//                 :
//                 <div>Invalid User</div>
//             }
//         </div>
//     )
// }

// export default EditProfilePage;


