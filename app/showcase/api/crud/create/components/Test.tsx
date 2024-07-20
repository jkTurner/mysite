// F:\Projects\Portfolio\jkturner_site\app\showcase\api\crud\page.tsx

// import Post from "./components/Post";
// import styles from "./components/drugsList.module.css";
// import DrugCategoryList from "./components/DrugCategoryList";
// import LoginModal from "../../auth/login/components/LoginModal";
// import { DrugType } from "@/app/types/types";

// const getDrugs = async (): Promise<DrugType[] | null> => {
//     try {
//         const res = await fetch(
//             `${process.env.NEXTAUTH_URL}/api/crud/drugs`,
//             { cache: "no-store" }
//         );

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

//             <div className={styles.post_container}>
//                 {drugs && drugs.length > 0 ? (
//                     drugs.map((drug) => (
//                         <Post 
//                             key={drug.id}
//                             id={drug.id}
//                             title={drug.title}
//                             author={drug.author}
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
