"use client"
import { User } from "@/app/types/types";
import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { FormEvent, useEffect, useState } from "react";
import styles from "./editUser.module.css"
import Image from "next/image";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { getSession } from "next-auth/react";

const EditUser = ({user}: {user: User}) => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [publicId, setPublicId] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const charLimit = 30;

    useEffect(() => {

        const initValues = () => {
            setName(user.name);
            setImage(user.image || '');
            setPublicId(user.publicId || '');
        }
    
        initValues();

    }, [user.name, user.image, user.publicId, user.accounts])

    const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
        console.log("result: ", result);
        const info = result.info as object;
        if ("secure_url" in info && "public_id" in info) {
            const url = info.secure_url as string;
            const public_id = info.public_id as string;
            setImage(url);
            setPublicId(public_id);
            console.log("url: ", url);
            console.log("public_id: ", public_id);
        }
    }

    const removeImage = async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("public ID: ", publicId);

        try {
            const res = await fetch("/api/crud/remove-image/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ publicId }),
            });
            if (res.ok) {
                setImage("");
                console.log("public ID: ", publicId);
                setPublicId("");
                console.log("public ID: ", publicId);
            }
        } catch (error) {
            console.error("Error deleting the image (EditUser.tsx): ", error);
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        if(!name) {
            setError("Name can't be blank");
            return;
        }

        try {
            const res = await fetch(`/api/user/${user.email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    image,
                    publicId,
                })
            })

            if (res.ok) {
                setSuccess("Updated!");
                await getSession();
                
            } else {
                const data = await res.json();
                setError(data.message || "Failed updating the user.");
            }

        } catch (error) {
            console.log("Error during the update: ", error);
            setError("An unexpected error occured. Please try again");
        }
    }

    return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <p className="text-sm">Name: </p>
                <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.form_input}
                />
                <p className="text-sm">Profile Image: </p>
                <CldUploadButton
                    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                    className={`${styles.cloudinary} ${image && 'pointer-events-none'}`}
                    onUpload={handleImageUpload}
                    >
                        <TiDelete className={styles.delete_image} onClick={removeImage} />
                        <IoCloudUploadOutline className="text-xl" /> Upload Image
                        { image && <Image src={image} alt={name} fill className={styles.cloudinary_image}  /> }
                        { publicId && 
                            <TiDelete className={styles.delete_image} onClick={removeImage} />
                        }
                </CldUploadButton>

                { success && (
                    <div className="bg-green-500 text-white p-2 text-sm rounded-md w-fit mt-2"
                        style={{ whiteSpace: 'pre-line' }}>
                        {success}
                    </div>
                )}
                { error && (
                    <div className="bg-red-500 text-white p-2 text-sm rounded-md w-fit mt-2"
                        style={{ whiteSpace: 'pre-line' }}>
                        {error}
                    </div>
                )}

                <button type="submit" className={styles.form_button}>Submit</button>

            </form>
        </div>
    )
}

export default EditUser;







// "use client"
// import { User } from "@/app/types/types";
// import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
// import { FormEvent, useEffect, useState } from "react";
// import styles from "./editUser.module.css"
// import Image from "next/image";
// import { IoCloudUploadOutline } from "react-icons/io5";
// import { TiDelete } from "react-icons/ti";
// import { useSession, getSession } from "next-auth/react";

// const EditUser = ({user}: {user: User}) => {

//     const [name, setName] = useState("");
//     const [image, setImage] = useState("");
//     const [publicId, setPublicId] = useState("");
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const { update } = useSession();

//     const charLimit = 30;

//     useEffect(() => {

//         const initValues = () => {
//             setName(user.name);
//             setImage(user.image || '');
//             setPublicId(user.publicId || '');
//         }
    
//         initValues();

//     }, [user.name, user.image, user.publicId])

//     const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
//         console.log("result: ", result);
//         const info = result.info as object;
//         if ("secure_url" in info && "public_id" in info) {
//             const url = info.secure_url as string;
//             const public_id = info.public_id as string;
//             setImage(url);
//             setPublicId(public_id);
//             console.log("url: ", url);
//             console.log("public_id: ", public_id);
//         }
//     }

//     const removeImage = async (e: React.FormEvent) => {
//         e.preventDefault();
//         e.stopPropagation();

//         try {
//             const res = await fetch("/api/crud/remove-image/", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ publicId }),
//             });
//             if (res.ok) {
//                 setImage("");
//                 setPublicId("");
//             }
//         } catch (error) {
//             console.error("Error deleting the image (EditUser.tsx): ", error);
//         }
//     }

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();

//         if(!name) {
//             setError("Name can't be blank");
//             return;
//         }

//         try {
//             const res = await fetch(`/api/user/${user.email}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     name,
//                     image,
//                 })
//             })

//             if (res.ok) {
//                 setSuccess("Updated!");
//                 await getSession();
//                 update({ user: { ...user, name, image } });
//             } else {
//                 const data = await res.json();
//                 setError(data.message || "Failed updating the user.");
//             }

//         } catch (error) {
//             console.log("Error during the update: ", error);
//             setError("An unexpected error occured. Please try again");
//         }
//     }

//     return (
//         <div className={styles.form_container}>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-2">
//                 <p className="text-sm">Name: </p>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className={styles.form_input}
//                 />
//                 <p className="text-sm">Profile Image: </p>
//                 <CldUploadButton
//                     uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
//                     className={`${styles.cloudinary} ${image && 'pointer-events-none'}`}
//                     onUpload={handleImageUpload}
//                     >
//                         <IoCloudUploadOutline className="text-xl" /> Upload Image
//                         { image && <Image src={image} alt={name} fill className={styles.cloudinary_image}  /> }
//                         { publicId && 
//                             <TiDelete className={styles.delete_image} onClick={removeImage} />
//                         }
//                 </CldUploadButton>

//                 { success && (
//                     <div className="bg-green-500 text-white p-2 text-sm rounded-md w-fit mt-2"
//                         style={{ whiteSpace: 'pre-line' }}>
//                         {success}
//                     </div>
//                 )}

//                 <button type="submit" className={styles.form_button}>Submit</button>

//             </form>
//         </div>
//     )
// }

// export default EditUser;


