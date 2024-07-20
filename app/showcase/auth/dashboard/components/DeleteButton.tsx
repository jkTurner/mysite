"use client"

import { MdDelete } from "react-icons/md";

const DeleteButton = ({id}: {id: string}) => {

    const handleDelete = async () => {
        const confirm = window.confirm("Are you sure you want to delete?");

        if (confirm) {
            try {
                const res = await fetch(`/api/crud/drugs/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json",
                    },
                });
                if (res.ok) {
                    console.log("Post deleted");
                    alert("Post deleted");
                    window.location.reload();
                }
            } catch (error) {
                console.error("Error deleting the post: ", error);
            }
        }
    }

    return (
        <button onClick={handleDelete}>
            <MdDelete />
        </button>
    )
}

export default DeleteButton;

