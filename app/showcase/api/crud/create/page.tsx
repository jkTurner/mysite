import CreateDrugForm from "./components/CreateDrugForm";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/lib/authOptions";
import { redirect } from "next/navigation";

const CrudCreate = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);

    if (!session) {
        redirect('/showcase/auth/login?message=create-post');
    }
    return (
        <div>
            <h1 className="mb-4">Create New Post</h1>
            <CreateDrugForm />
        </div>
    )
}

export default CrudCreate;