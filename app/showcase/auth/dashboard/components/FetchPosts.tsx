import { DrugType } from "@/app/types/types";
import UserPosts from "./UserPosts";

const getDrugs = async (email: string): Promise<DrugType[] | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/crud/authors/${email}`, { cache: "no-store" });
        const { drug } = await res.json();
        return drug;
    } catch (error) {
        console.log(error);
    }
    return null;
};

const FetchPost = async ({ email }: { email: string }) => {
    const posts = await getDrugs(email);

    return (
        <div>
            <h2 className="mb-4 mt-2">My Posts</h2>
            <div>
                {posts && posts.length > 0 ? (
                    posts.map((post) => (
                        <UserPosts
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            authorEmail={post.authorEmail}
                            catName={post.catName}
                            content={post.content}
                            storage={post.storage}
                            imageUrl={post.imageUrl}
                            createdAt={post.createdAt}
                            updatedAt={post.updatedAt}
                        />
                    ))
                ) : (
                    <div>No posts to display.</div>
                )}
            </div>
        </div>
    );
};

export default FetchPost;


// import { DrugType } from "@/app/types/types";
// import { getServerSession } from "next-auth/next";

// const getDrugs = async (email: string) => {
    
//     try {
//         const res = await fetch
//             (`${process.env.NEXTAUTH_URL}/api/crud/authors/${email}`,
//             { cache: "no-store" });
//         const {drug} = await res.json();
//         return drug;

//     } catch (error) {
//         console.log(error);
//     }
//     return null;
// };

// const UserPosts = async () => {

//     const session = await getServerSession();
//     const email = session?.user?.email;
//     // let drugs = []

//     if (email) {
//         const drugs = getDrugs(email);
//     }

//     return (
//         <div>
//             My Posts:
//             <div>
                
//             </div>
//         </div>
//     )
// }

// export default UserPosts;

