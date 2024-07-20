"user client"
import Link from "next/link";
import styles from "./loginForm.module.css";
import { FormEvent, useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import GoogleLogin from "./GoogleLogin";
import { useSearchParams } from "next/navigation";

const LoginForm = ({ redirected, callbackUrl }: { redirected?: boolean; callbackUrl?: string }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState("");

    const searchParams = useSearchParams();
    const message = searchParams.get('message');

    useEffect(() => {
        if (message === 'dashboard') {
            setNotification("Please login to access the dashboard");
        } else if (message === 'create-post') {
            setNotification("Please login to create a post");
        }
    }, [message]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirected: false,
                // callbackUrl: '/showcase/api/crud/create',
                callbackUrl,
            });
            if (res?.error) {
                setError("Invalid credentials. Please try again.");
                setLoading(false);
                return;
            } else {
                setError("");
            }
        } catch (error) {
            setError("An unexpected error occurred, please try again.");
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col h-full w-full items-center">
            <div className={styles.form_container}>
                <h1 className="">Enter the details</h1>
                <div className="text-xs mt-4 textDetails">Login with your email</div>

                { notification && (
                    <div className="bg-yellow-500 text-black p-2 text-sm rounded-md my-2">
                        {notification}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        autoComplete="email"
                        className={styles.form_input}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        className={styles.form_input}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={styles.login_button} disabled={loading}>
                        { loading ? "Logging in..." : "Login" }
                    </button>

                    { error && 
                        <div className="bg-red-500 text-white p-2 text-sm rounded-md w-fit mt-2">
                            {error}
                        </div>
                    }
                    <Link
                        href={'/showcase/auth/register'}
                        className="textDetails text-xs mt-3 text-right">
                        Don&apos;t have an account? <span className="underline">Register</span>
                    </Link>
                </form>
                <GoogleLogin callbackUrl={callbackUrl} />
                {/* <GoogleLogin callbackUrl="/showcase/api/crud/create" /> */}
                {/* <GoogleLogin /> */}
            </div>
        </div>
    )
}

export default LoginForm;

