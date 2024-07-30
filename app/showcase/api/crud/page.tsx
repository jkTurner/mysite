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