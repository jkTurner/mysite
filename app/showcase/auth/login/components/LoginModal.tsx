'use client';
import { useSession } from "next-auth/react";
import { useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import { FaCirclePlus } from "react-icons/fa6";
import Link from "next/link";
import styles from "./modal.module.css"

const LoginModal = () => {
    const { data: session, status } = useSession();
    const [showLogin, setShowLogin] = useState(false);

    const handleCreateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (status === "unauthenticated") {
            e.preventDefault(); // Prevent default link behavior
            setShowLogin(true); // Show login modal
        }
    };

    return (
        <>
            <Link href={"/showcase/api/crud/create"} onClick={handleCreateClick}>
                <button className={`${styles.create_button} btn`}>
                    <FaCirclePlus className="text-base" />
                    <span>Create</span>
                </button>
            </Link>
            {showLogin && (
                <Modal onClose={() => setShowLogin(false)}>
                    <LoginForm callbackUrl="/showcase/api/crud/create" />
                </Modal>
            )}
        </>
    );
};

export default LoginModal;



// // LoginModal.tsx
// 'use client';
// import { useState } from 'react';
// import Modal from './Modal';
// import LoginForm from './LoginForm';
// import Link from 'next/link';
// import { FaCirclePlus } from "react-icons/fa6";

// interface LoginModalProps {
//     callbackUrl?: string;
// }

// const LoginModal = ({ callbackUrl }: LoginModalProps) => {
//     const [showLogin, setShowLogin] = useState(false);

//     const handleCreateClick = (e: React.MouseEvent<HTMLAnchorElement>, status: string) => {
//         if (status === "unauthenticated") {
//             e.preventDefault(); // Prevent default link behavior
//             setShowLogin(true); // Show login modal
//         }
//     };

//     return (
//         <>
//             <Link href={"/showcase/api/crud/create"} onClick={(e) => handleCreateClick(e, "unauthenticated")}>
//                 <button className="btn bgSub hover:bgAccent">
//                     <FaCirclePlus className="text-base" />
//                     <span>Create</span>
//                 </button>
//             </Link>
//             {showLogin && (
//                 <Modal onClose={() => setShowLogin(false)}>
//                     <LoginForm callbackUrl={callbackUrl} />
//                 </Modal>
//             )}
//         </>
//     );
// };

// export default LoginModal;


