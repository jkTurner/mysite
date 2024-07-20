import Drug from "./components/Drug";
import styles from "./components/drugsList.module.css";
import DrugCategoryList from "./components/DrugCategoryList";
import LoginModal from "../../auth/login/components/LoginModal";
import { DrugType } from "@/app/types/types";
import Pagination from "./components/Pagination";

const getDrugs = async (page: number): Promise<{ drug: DrugType[], total: number } | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/crud/drugs?page=${page}`, { cache: "no-store" });

        if (res.ok) {
            const data = await res.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }

    return null;
};

const ApiCrudPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const page = searchParams.page ? parseInt(searchParams.page as string, 10) : 1;
    const data = await getDrugs(page);
    const drugs = data ? data.drug : [];
    const total = data ? data.total : 0;
    const pageSize = 12;
    const totalPages = Math.ceil(total / pageSize);

    return (
        <div>
            <div className="flex justify-between w-full pb-3 content-center">
                <h1 className="">Drugs List</h1>
                <LoginModal />
            </div>
            <DrugCategoryList />

            <div className={`${styles.post_container}`}>
                {drugs && drugs.length > 0 ? (
                    drugs.map((drug) => (
                        <Drug 
                            key={drug.id}
                            id={drug.id}
                            title={drug.title}
                            author={drug.author}
                            authorEmail={drug.authorEmail}
                            category={drug.category}
                            content={drug.content}
                            storage={drug.storage}
                            imageUrl={drug.imageUrl}
                            createdAt={drug.createdAt}
                            updatedAt={drug.updatedAt}
                        />
                    ))
                ) : (
                    <div>No posts to display.</div>
                )}
            </div>

            <Pagination totalPages={totalPages} currentPage={page} />
        </div>
    );
};

export default ApiCrudPage;



// // server-side method (before page num) -------------------------------------

// import Drug from "./components/Drug";
// import styles from "./components/drugsList.module.css";
// import DrugCategoryList from "./components/DrugCategoryList";
// import LoginModal from "../../auth/login/components/LoginModal";
// import { DrugType } from "@/app/types/types";

// const getDrugs = async (): Promise<DrugType[] | null> => {
//     try {
//         const res = await fetch(`${process.env.NEXTAUTH_URL}/api/crud/drugs`, { cache: "no-store" });

//         if (res.ok) {
//             const drugs: DrugType[] = await res.json();
//             return drugs;
//         }
//     } catch (error) {
//         console.log(error);
//     }

//     return null;
// };

// const ApiCrudPage = async () => {

//     const drugs = await getDrugs();

//     return (
//         <div>
//             <div className="flex justify-between w-full pb-3 content-center">
//                 <h1 className="">Drugs List</h1>
//                 <LoginModal />
//             </div>
//             <DrugCategoryList />

//             <div className={`${styles.post_container}`}>
//                 {drugs && drugs.length > 0 ? (
//                     drugs.map((drug) => (
//                         <Drug 
//                             key={drug.id}
//                             id={drug.id}
//                             title={drug.title}
//                             author={drug.author}
//                             authorEmail={drug.authorEmail}
//                             category={drug.category}
//                             content={drug.content}
//                             storage={drug.storage}
//                             imageUrl={drug.imageUrl}
//                             createdAt={drug.createdAt}
//                             updatedAt={drug.updatedAt}
//                         />
//                     ))
//                 ) : (
//                     <div>No posts to display.</div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ApiCrudPage;


// client side method -----------------------------------

// "use client"
// import Post from "./components/Post";
// import { drugsData } from "@/data/drugsData";
// import styles from "./components/drugsList.module.css";
// import { FaCirclePlus } from "react-icons/fa6";
// import Link from "next/link";
// import { useSession } from "next-auth/react";
// import { useState } from "react";
// import Modal from "../../auth/login/components/Modal";
// import LoginForm from "../../auth/login/components/LoginForm";
// import DrugCategoryList from "./components/DrugCategoryList";

// const ApiCrudPage = () => {
//     const { data: session, status } = useSession();
//     const [showLogin, setShowLogin] = useState(false);

//     const handleCreateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//         if (status === "unauthenticated") {
//             e.preventDefault(); // Prevent default link behavior
//             setShowLogin(true); // Show login modal
//         }
//     };

//     return (
//         <div>
//             <div className="flex justify-between w-full pb-3 content-center">
//                 <h1 className="">Drugs List</h1>
//                 <Link href={"/showcase/api/crud/create"} onClick={handleCreateClick}>
//                     <button className={`${styles.create_button} btn bgSub hover:bgAccent`}>
//                         <FaCirclePlus className="text-base" />
//                         <span>Create</span>
//                     </button>
//                 </Link>
//             </div>
//             <DrugCategoryList />

//             <div className={`${styles.post_container}`}>
//                 {drugsData && drugsData.length > 0 ? (
//                     drugsData.map((drug) => (
//                         <Post 
//                             key={drug.id}
//                             id={drug.id}
//                             name={drug.name}
//                             author={drug.author}
//                             category={drug.category}
//                             description={drug.description}
//                             storage={drug.storage}
//                             thumbnail={drug.thumbnail}
//                         />
//                     ))
//                 ) : (
//                     <div>No posts to display.</div>
//                 )}
//             </div>

//             {showLogin && (
//                 <Modal onClose={() => setShowLogin(false)}>
//                     <LoginForm callbackUrl="/showcase/api/crud/create" />
//                 </Modal>
//             )}
//         </div>
//     );
// };

// export default ApiCrudPage;


