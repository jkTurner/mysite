"use client";

import { useSession } from "next-auth/react";
import SignInBtn from "./SignInBtn";
import Image from "next/image";

export default function UserInfo() {
    const { status, data: session } = useSession();

    if (status === "authenticated") {
        // Provide a default image URL here
        const imageUrl = session?.user?.image || '/default-profile.png'; 

        return <div>
            <Image 
                src={imageUrl}
                alt="profile image"
                width={60}
                height={60}
                className="rounded-full" 
            />
            <div>Name: <span>{session?.user?.name}</span></div>
            <div>Email: <span>{session?.user?.email}</span></div>
        </div>;
    } else {
        return <SignInBtn />;
    }
}

