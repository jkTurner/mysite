"use client"
import { FormEvent, useEffect, useState } from "react";
import styles from "../../crud.module.css"
import { DrugCategoryType, DrugType } from "@/app/types/types";
import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import { TiDelete } from "react-icons/ti";

const EditPost = ({post}: {post: DrugType}) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState<DrugCategoryType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [content, setContent] = useState("");
    const [storage, setStorage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [publicId, setPublicId] = useState("");

    const charLimit = 180;
    const [contentNotice, setContentNotice] = useState(false);
    const [storageNotice, setStorageNotice] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const res = await fetch('/api/crud/drug-categories');
                if (res.ok) {
                    const data = await res.json();
                    setCategory(data);
                } else {
                    console.error("Failed to fetch categories");
                }
            } catch (error) {
                console.error("Error fetching categories: ", error);
            }
        };

        fetchAllCategories();

        const initValues = () => {
            setTitle(post.title);
            setContent(post.content);
            setStorage(post.storage || '');
            setImageUrl(post.imageUrl || '');
            setPublicId(post.publicId || '');
            setSelectedCategory(post.catName || '');
        }

        initValues();

    }, [post.title, post.content, post.storage, post.imageUrl, post.publicId, post.catName])

    const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
        console.log("result: ", result);
        const info = result.info as object;
        if ("secure_url" in info && "public_id" in info) {
            const url = info.secure_url as string;
            const public_id = info.public_id as string;
            setImageUrl(url);
            setPublicId(public_id);
            console.log("url: ", url);
            console.log("public_id: ", public_id);
        }
    }

    const removeImage = async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        try {
            const res = await fetch("/api/crud/remove-image/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ publicId }),
            });
            if (res.ok) {
                setImageUrl("");
                setPublicId("");
            }
        } catch (error) {
            console.error("Error deleting the image (CreateDrugForm.tsx): ", error);
        }
    }
    
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setContent(value);
        setContentNotice(value.length >= charLimit);
    };

    const handleStorageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setStorage(value);
        setStorageNotice(value.length >= charLimit);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        if (!title || !selectedCategory || !content ) {
            setError("Drug title, category, and content are required.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`/api/crud/drugs/${post.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    title, 
                    catName: selectedCategory, 
                    content, 
                    storage, 
                    imageUrl, 
                    publicId 
                })
            });

            if (res.ok) {
                setSuccess("Updated!");
                setLoading(false);
            } else {
                const data = await res.json();
                setError(data.message || "Failed creating a drug.");
                setLoading(false);
            }
        } catch (error) {
            console.log("Error during post creation: ", error);
            setError("An unexpected error occured. Please try again");
            setLoading(false);
        }
    };

    return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                    type="text" 
                    placeholder="Drug name" 
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={styles.form_input}
                />

                <select 
                    className={styles.form_select}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Select A Category</option>
                    { category && category.map(category => 
                        <option 
                            key={category.id}
                            value={category.catName}
                        >
                            {category.catName}
                        </option>
                    )}
                </select>

                {/* Cloudinary */}
                <CldUploadButton 
                    uploadPreset = {process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                    className={`${styles.cloudinary} ${imageUrl && 'pointer-events-none'}`}
                    onUpload={handleImageUpload}
                    >
                        <IoCloudUploadOutline className="text-xl" /> Upload Image
                        { imageUrl && <Image src={imageUrl} alt={title} fill className={styles.cloudinary_image}  /> }
                        { publicId && 
                            <TiDelete className={styles.delete_image} onClick={removeImage} />
                        }
                </CldUploadButton>

                <textarea 
                    placeholder="Short description" 
                    id="content"
                    value={content}
                    onChange={handleContentChange}
                    className={styles.form_textarea}
                    maxLength={charLimit}
                />
                { contentNotice && (
                    <div className="bg-yellow-500 text-black p-2 text-sm rounded-md my-2">
                        Please keep it concise
                    </div>
                )}
                <textarea 
                    placeholder="Storage" 
                    id="storage"
                    value={storage}
                    onChange={handleStorageChange}
                    className={styles.form_textarea}
                    maxLength={charLimit}
                />
                { storageNotice && (
                    <div className="bg-yellow-500 text-black p-2 text-sm rounded-md my-2">
                        Please keep it concise
                    </div>
                )}

                <button type="submit"
                    className={styles.form_button}
                    disabled={loading}>
                        {loading ? "Updateing..." : "Update"}
                </button>

                {error && (
                    <div className="bg-red-500 text-white p-2 text-xs rounded-md w-fit mt-2">
                        {error}
                    </div>
                )}
                {success && (
                    <div
                        className="bg-green-500 text-white p-2 text-sm rounded-md w-fit mt-2"
                        style={{ whiteSpace: 'pre-line' }}>
                        {success}
                    </div>
                )}

            </form>
        </div>
    )
}

export default EditPost;