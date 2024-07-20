import Avatar from "./Avatar";
import { MdEdit } from "react-icons/md";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

const ProfileCard = async ({ email }: { email: string }) => {

    let user = null;

    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${email}`, 
            { cache: "no-store" }
        );
        if (res.ok) {
            user = await res.json();
        }

    } catch (error) {
        console.error("Error fetching user data: ", error);
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex w-full justify-between">
                        <Avatar image={user.image} />
                        <Link href={`/showcase/auth/dashboard/edit/${email}`}>
                            <MdEdit className="block text-xl" />
                        </Link>
                    </div>
                    {user && (
                        <>
                            <h2 className="card-title">{user.name}</h2>
                            <p>{user.email}</p>
                        </>
                    )}
                    <SignOutButton />
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;



// "use client"
// import Avatar from "./Avatar";
// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";
// import { MdEdit } from "react-icons/md";
// import Link from "next/link";

// const ProfileCard = ({ email }: { email: string }) => {

//     const { data: session } = useSession();
//     console.log(session?.user?.name)

//     return (
//         <div>
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <div className="card-body">
//                     <div className="flex w-full justify-between">
//                         <Avatar />
//                         <Link href={`/showcase/auth/dashboard/edit/${email}`}>
//                             <MdEdit className="block text-xl" />
//                         </Link>
//                     </div>
//                     <h2 className="card-title">{session?.user?.name}</h2>
//                     <p>{session?.user?.email}</p>
//                     <div className="card-actions justify-end">
//                         <button 
//                             className="btn btn-primary"
//                             onClick={() => signOut()}
//                         >Logout</button>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default ProfileCard;

