"use client"
import { useSearchParams } from "next/navigation"
import LoginForm from "./LoginForm"

const LoginFormWrapper = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    
    return <LoginForm redirected={!!callbackUrl} callbackUrl="/showcase/auth/dashboard" />;
}

export default LoginFormWrapper;





