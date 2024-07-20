"use client"
import { signIn } from "next-auth/react"

const SignInBtn = () => {
    return (
        <button
            onClick={() => signIn('google')}
            className="bg-slate-600 py-2 px-3 rounded-md"
            >
            Sign in with Google
        </button>
    )
}

export default SignInBtn;

