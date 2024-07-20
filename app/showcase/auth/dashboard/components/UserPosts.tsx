import Image from "next/image";
import styles from "../dashboard.module.css"
import { DrugType } from "@/app/types/types";
import { MdEdit } from "react-icons/md";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

const UserPosts = async ({
    id,
    title: name,
    author,
    authorEmail,
    catName,
    content: description,
    storage,
    imageUrl: thumbnail,
    createdAt: date,
}: DrugType) => {

    const dateObject = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
    };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);

    return (
        <div className="flex gap-4 p-4 bgSub rounded-md mb-2 w-full">
            {/* image */}
            <div>
                <div className={styles.thumbnail_image_container}>
                    {thumbnail ? (
                        <Image
                            src={thumbnail}
                            alt={name}
                            fill
                            priority
                            className={styles.thumbnail_image}
                        />
                    ) : (
                        <Image
                            src="/images/thumbnail-placeholder.jpg"
                            alt={name}
                            fill
                            className={styles.thumbnail_image}
                        />
                    )}
                </div>
            </div>

            {/* details */}
            <div className="flex flex-col flex-grow">

                {/* name and icons */}
                <div className="flex items-center justify-between w-[100%] mb-2">
                    <div className="flex items-center">
                        <span className="font-bold">{name}</span>
                        <span className="badge badge-outline text-xs ml-2">{catName}</span>
                    </div>
                    <div className="flex text-xl gap-1">
                        <Link href={`${process.env.NEXTAUTH_URL}/showcase/api/crud/edit/${id}`}>
                            <MdEdit />
                        </Link>
                        <DeleteButton id={id} />
                    </div>
                </div>
                {/* details and date */}
                <div className="text-sm mb-1">{description}</div>
                <div className="text-sm">Storage: {storage}</div>
                <div className="text-end text-xs mt-auto">{formattedDate}</div>

            </div>

        </div>
    )
}

export default UserPosts;

