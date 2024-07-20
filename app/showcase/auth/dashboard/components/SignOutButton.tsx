"use client"
import { signOut } from "next-auth/react"

const SignOutButton = () => {
    return (
        <div className="card-actions justify-end">
            <button 
                className="btn btn-primary"
                onClick={() => signOut()}
            >Logout</button>
        </div>
    )
}

export default SignOutButton;