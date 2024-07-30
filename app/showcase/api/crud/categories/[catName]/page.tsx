import { DrugType } from "@/app/types/types";
import styles from "../../components/drugsList.module.css"
import DrugsInCategory from "../components/DrugsInCategory";
import DrugCategoryList from "../../components/DrugCategoryList";

const getPosts = async (catName: string): Promise<DrugType[] | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/crud/drug-categories/${catName}`,
            { cache: "no-store" }
        );
        if (res.ok) {
            const categories = await res.json();
            const posts = categories.drug
            console.log(posts);
            return posts;
        }
    } catch (error) {
        console.error("Error fetching the posts: ", error);
        return null;
    }

    return null;
};


const CategoryPosts = async ({ params }: { params: { catName: string } }) => {
    const category = params.catName;
    const posts = await getPosts(category);

    return (
        <div>
            <DrugCategoryList />
            <h1 className="mb-3">
                <span className="font-bold">Category: </span>
                {decodeURIComponent(category)}
            </h1>
            <div className={`${styles.post_container}`}>
                {posts && posts.length > 0 ? (
                    posts.map((post) => (
                            <DrugsInCategory 
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
                    <p>No posts available for this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPosts;