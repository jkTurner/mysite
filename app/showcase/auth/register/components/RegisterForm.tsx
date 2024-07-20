"use client"
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/showcase/auth/login/components/loginForm.module.css"
import Link from "next/link";
import Details from "./Details";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPass) {
            setError("All fields are required.");
            return;
        }

        if (password !== confirmPass) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const res = await fetch('/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password })
            });

            if (res.ok) {
                const data = await res.json();
                console.log(data);
                const form = e.target as HTMLFormElement;
                form.reset();
                setName(""); 
                setEmail(""); 
                setPassword(""); 
                setConfirmPass(""); 
                setError(""); 
                setSuccess("Welcome aboard!\nYour registration is complete!");

                // Redirect to the specified URL after successful registration
                setTimeout(() => {
                    router.push(data.redirectUrl);
                }, 2000); 
            } else {
                const data = await res.json();
                setError(data.message || "Registration failed.");
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
            setError("An unexpected error occurred. Please try again");
        }
    };

    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className={styles.form_container}>
                <h1>Enter the details</h1>
                <div className="text-xs mt-4 textDetails">Register an account</div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
                    <input
                        type="text"
                        placeholder="Full Name"
                        id="name"
                        autoComplete="name"
                        className={styles.form_input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        autoComplete="email"
                        className={styles.form_input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        className={styles.form_input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        id="confirmPass"
                        className={styles.form_input}
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />

                    <button className={styles.login_button}>Register</button>

                    {error && (
                        <div className="bg-red-500 text-white p-2 text-xs rounded-md w-fit mt-2">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div
                            className="bg-green-500 text-white p-2 text-sm rounded-md w-fit mt-2"
                            style={{ whiteSpace: 'pre-line' }}>
                            {success}
                        </div>
                    )}

                    <Link href={'/showcase/auth/login'} className="textDetails text-xs mt-3 text-right ">
                        Already have an account? <span className="underline">Login</span>
                    </Link>
                </form>
            </div>
            {/* <div className="txtFade text-xs max-w-[320px] text-center mt-6 mb-3"> */}
            <div className={`${styles.notes} `}>
                <p>
                This system is designed to be user-friendly and secure, ensuring that users can register easily and with confidence. The real-time validation and feedback make the process smooth and efficient. Give it a try and see how it works!
                </p>
            </div>
            <Details />
        </div>
    )
}

export default RegisterForm;



// "use client"
// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import styles from "@/app/showcase/auth/login/components/loginForm.module.css"
// import Link from "next/link";
// import Details from "./Details";

// const RegisterForm = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPass, setConfirmPass] = useState("");
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");
//     const router = useRouter();

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();

//         if (!name || !email || !password || !confirmPass) {
//             setError("All fields are required.");
//             return;
//         }

//         if (password !== confirmPass) {
//             setError("Passwords do not match.");
//             return;
//         }

//         try {
//             const res = await fetch('/api/register', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ name, email, password })
//             });

//             if (res.ok) {
//                 const data = await res.json();
//                 const form = e.target as HTMLFormElement;
//                 form.reset();
//                 setName(""); // Clear the name state
//                 setEmail(""); // Clear the email state
//                 setPassword(""); // Clear the password state
//                 setConfirmPass(""); // Clear the confirmPass state
//                 setError(""); //clear error message on successful registration
//                 setSuccess("Welcome aboard!\nYour registration is complete!");

//                 // Redirect to the specified URL after successful registration
//                 setTimeout(() => {
//                     router.push(data.redirectUrl);
//                 }, 2000); 
//             } else {
//                 const data = await res.json();
//                 setError(data.message || "Registration failed.");
//                 console.log("User registration failed.");
//             }
//         } catch (error) {
//             console.log("Error during registration: ", error);
//             setError("An unexpected error occurred. Please try again");
//         }
//     };

//     return (
//         // <div className="grid place-items-center minH">
//         <div className="flex flex-col items-center w-full h-full">
//             <div className={styles.form_container}>
//                 <h1>Enter the details</h1>
//                 <div className="text-xs mt-4 textDetails">Register an account</div>

//                 <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
//                     <input
//                         type="text"
//                         placeholder="Full Name"
//                         id="name"
//                         autoComplete="name"
//                         className={styles.form_input}
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         id="email"
//                         autoComplete="email"
//                         className={styles.form_input}
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         id="password"
//                         className={styles.form_input}
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Confirm Password"
//                         id="confirmPass"
//                         className={styles.form_input}
//                         onChange={(e) => setConfirmPass(e.target.value)}
//                     />

//                     <button className={styles.login_button}>Register</button>

//                     {error && (
//                         <div className="bg-red-500 text-white p-2 text-xs rounded-md w-fit mt-2">
//                             {error}
//                         </div>
//                     )}
//                     {success && (
//                         <div
//                             className="bg-green-500 text-white p-2 text-sm rounded-md w-fit mt-2"
//                             style={{ whiteSpace: 'pre-line' }}>
//                             {success}
//                         </div>
//                     )}

//                     <Link href={'/showcase/auth/login'} className="textDetails text-xs mt-3 text-right ">
//                         Already have an account? <span className="underline">Login</span>
//                     </Link>
//                 </form>
//             </div>
//             {/* <div className="txtFade text-xs max-w-[320px] text-center mt-6 mb-3"> */}
//             <div className={`${styles.notes} `}>
//                 <p>
//                 This system is designed to be user-friendly and secure, ensuring that users can register easily and with confidence. The real-time validation and feedback make the process smooth and efficient. Give it a try and see how it works!
//                 </p>
//             </div>
//             <Details />
//         </div>
//     )
// }

// export default RegisterForm;


