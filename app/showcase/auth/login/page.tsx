"use client";
import React, { Suspense } from "react";
import LoginFormWrapper from "./components/LoginFormWrapper";
import Notes from "./components/Notes";

const LoginPage = () => {
    const handleLoginSuccess = () => {
        console.log("Login was successful!");
        // Additional logic for handling login success can be added here.
    };

    return (
        <main>
            <div className="flex flex-col h-full w-full items-center">
                <Suspense fallback={<div>Loading Login Form...</div>}>
                    <LoginFormWrapper />
                </Suspense>
                <Suspense fallback={<div>Loading Notes...</div>}>
                    <Notes />
                </Suspense>
            </div>
        </main>
    );
}

export default LoginPage;




// working before run build ---------------------------------

// "use client";
// import LoginFormWrapper from "./components/LoginFormWrapper";
// import Notes from "./components/Notes";

// const LoginPage = () => {
//     const handleLoginSuccess = () => {
//         console.log("Login was successful!");
//         // Additional logic for handling login success can be added here.
//     };

//     return (
//         <main>
//             <div className="flex flex-col h-full w-full items-center">
//                 <LoginFormWrapper />
//                 <Notes />
//             </div>
//         </main>
//     );
// }

// export default LoginPage;





// import LoginFormWrapper from "./components/LoginFormWrapper";
// import Notes from "./components/Notes";

// const LoginPage = () => {

//     return (
//         <main>
//             <div className="flex flex-col h-full w-full items-center">
//                 <LoginFormWrapper />
//                 <Notes />
//             </div>
//         </main>
//     )
// }

// export default LoginPage;

