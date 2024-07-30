import ProfileCard from "./components/ProfileCard";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/lib/authOptions";
import { redirect } from "next/navigation";
import FetchPost from "./components/FetchPosts";
import prisma from "@/lib/prismadb"; // Import prisma client

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || !session.user.email) {
        redirect('/showcase/auth/login?message=dashboard');
    }

    const email = session.user.email as string;

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
        include: {
            accounts: true,
        },
    });

    // Determine the login method
    let loginMethod = "credentials";
    if (user && user.accounts.length > 0) {
        const googleAccount = user.accounts.find(account => account.provider === "google");
        if (googleAccount) {
            loginMethod = "google";
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <h1>My Dashboard</h1>
            {user && (
                <div>
                    <p>Logged in via: {loginMethod}</p>
                </div>
            )}
            <ProfileCard email={email} />
            <FetchPost email={email} />
        </div>
    );
};

export default DashboardPage;