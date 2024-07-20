"use client"
import Image from "next/image";
import styles from "@/app/showcase/api/crud/components/drugsList.module.css"
import Link from "next/link";
import DeleteButton from "../../components/DeleteButton";
import { DrugType } from "@/app/types/types";
import { useSession } from "next-auth/react";

const DrugsInCategory = ({
    id,
    title: name,
    author,
    authorEmail,
    catName,
    content: description,
    storage,
    imageUrl: thumbnail,
    createdAt: date,
    updatedAt,
}: DrugType) => {

    const { data: session } = useSession();
    const isEditable = session && session?.user?.email === authorEmail;

    const dateObject = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
    };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);


    return (
        <div>
            <div className={`${styles.card_container} bg-base-100 bgSub shadow-xl mb-4`}>
                <div className={styles.drug_image_container}>
                {thumbnail ? (
                    <Image 
                        src={thumbnail}
                        alt={name}
                        fill
                        priority
                        className={styles.drug_image}
                    />
                ) : (
                    <Image 
                        src="/images/thumbnail-placeholder.jpg"
                        alt={name}
                        fill
                        className={styles.drug_image}
                    />
                )}
                </div>
                <div className="card-body pt-4 pb-5">
                    <h2 className="card-title text-base">
                        {name}
                    </h2>
                    <p className="mb-2 text-sm">{description}</p>
                    <p className="mb-2 text-sm">{storage}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline text-xs">{catName}</div>
                    </div>
                    <div className="text-end text-sm">
                        by {author.name}
                        <br/>
                        {formattedDate}
                    </div>
                    { isEditable && (
                        <div className={styles.editable}>
                            <DeleteButton />
                            <Link href={`/showcase/api/crud/edit/${id}`}>Edit</Link>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default DrugsInCategory;

