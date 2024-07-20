// server-side method ------------------------------------
import Link from "next/link";
import { DrugCategoryType } from "@/app/types/types";
import styles from "./drugsList.module.css"

const getCategories = async (): Promise<DrugCategoryType[] | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/crud/drug-categories`)

        if (res.ok) {
            const categories = await res.json();
            return categories;
        } else {
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}

const DrugCategoryList = async () => {
    const categories = await getCategories();

    return (
        <div className="flex gap-2 flex-wrap mb-4">
            <Link href="/showcase/api/crud">
                <div className={styles.category}>
                    All
                </div>
            </Link>
            { categories && 
                categories.map((category) => (
                    <Link key={category.catName} href={`/showcase/api/crud/categories/${category.catName}`}>
                        <div className={styles.category}>
                            {category.catName}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default DrugCategoryList;


// client side method -------------------------------

// "use client"
// import { useEffect, useState } from 'react';
// import Link from "next/link";
// import styles from "./drugsList.module.css"

// export interface DrugCategoryType {
//     id: string;
//     catName: string;
// }

// const getCategories = async (): Promise<DrugCategoryType[] | null> => {
//     try {
//         const res = await fetch(`/api/crud/drug-categories`);

//         if (res.ok) {
//             const categories: DrugCategoryType[] = await res.json();
//             return categories;
//         } else {
//             return null;
//         }
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }

// const DrugCategoryList = () => {
//     const [categories, setCategories] = useState<DrugCategoryType[] | null>(null);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             const categories = await getCategories();
//             if (categories) {
//                 setCategories(categories);
//             }
//         };

//         fetchCategories();
//     }, []);

//     return (
//         <div className="flex gap-2 flex-wrap mb-2">
//             {categories && 
//                 categories.map((category) => (
//                     <Link key={category.catName} href={`/categories/${category.catName}`}>
//                         <div className={styles.category}>
//                             {category.catName}
//                         </div>
//                     </Link>
//                 ))
//             }
//         </div>
//     );
// };

// export default DrugCategoryList;



