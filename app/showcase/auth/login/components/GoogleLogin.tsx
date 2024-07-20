"use client"
import Image from "next/image";
import styles from "./loginForm.module.css"
import { signIn } from "next-auth/react";

const GoogleLogin = ({ callbackUrl }: { callbackUrl?: string }) => {

    const handleSignIn = () => {
        if (callbackUrl) {
            signIn('google', { callbackUrl });
        } else {
            signIn('google');
        }
    }

    return (
        <button 
            // onClick={() => signIn('google', { callbackUrl: '/showcase/api/crud/create' })}
            onClick={handleSignIn}
            className={styles.google_login}
            >
            <Image
                src='/images/showcase/login/google-logo.png'
                alt="google login"
                height={30}
                width={30}
            />
            <span className={styles.google_login_text}>Login with Google</span>
        </button>
    )
}

export default GoogleLogin;

