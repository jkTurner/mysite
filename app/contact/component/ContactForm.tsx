"use client"
import { useState } from "react"
import styles from "../contact.module.css"

const ContactForm = () => {

    const [fullName, setFullName] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    return (
        <div className={`${styles.contact_form}`}>

            <form className="flex flex-col gap-2">

                <div className={styles.form_input_container}>
                    <select className={`select select-bordered 
                        ${styles.form_select} 
                        ${styles.remove_outline}`} 
                        defaultValue="Topic">
                        <option disabled value="Topic">Topic</option>
                        <option value="Hiring">Hiring</option>
                        <option value="Collaborating">Collaborating</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text"
                        placeholder="Full Name"
                        id="fullName"
                        className={styles.form_input}
                        required
                    />
                </div>
                <div className="flex gap-2">
                    <input type="text"
                        placeholder="Email"
                        id="contactEmail"
                        className={styles.form_input}
                        required
                    />
                    <input type="text"
                        placeholder="Phone Number"
                        id="phoneNumber"
                        className={styles.form_input}
                        required
                    />
                </div>

                <textarea className={`textarea textarea-bordered bgMain w-[100%] min-h-[200px] mb-2 
                    ${styles.remove_outline}`} placeholder="Message . . ."></textarea>
                <button className={`${styles.submit_button} btn btn-active`}>Send</button>

            </form>
        </div>
    )
}

export default ContactForm;


// import styles from "../contact.module.css"
// import { IoPerson } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { MdPhoneAndroid } from "react-icons/md";

// const ContactForm = () => {
//     return (
//         <div className={`${styles.contact_form}`}>

//             <div className="flex gap-2 mb-2 bg-violet-500">
                
//                 <select className={`select select-bordered w-[50%] bgMain 
//                     ${styles.remove_outline}`}>
//                     <option disabled selected>Topic</option>
//                     <option>Hiring</option>
//                     <option>Collaborating</option>
//                     <option>Other</option>
//                 </select>
                
//                 <label className={`input input-bordered flex items-center gap-2 bgMain w-[50%] 
//                     ${styles.remove_outline}`}>
//                     <IoPerson className={styles.form_icon} />
//                     <input type="text" className="grow" placeholder="Full Name" />
//                 </label>
                
//             </div>

//             <div className="flex gap-2 mb-2 bg-violet-500">
                
//                 <div className="flex flex-grow w-[100%]">
//                     <input
//                     type="text"
//                     placeholder="Type here"
//                     className="input input-bordered input-xs w-full max-w-xs" />
//                 </div>
//                 <div className="flex flex-grow w-[100%]">
//                     <input
//                     type="text"
//                     placeholder="Type here"
//                     className="input input-bordered input-xs w-full max-w-xs" />
//                 </div>
                
//             </div>

//             <div className="flex gap-2 mb-2 bg-violet-500">
                
//                 <label className={`input input-bordered  
//                     ${styles.remove_outline} ${styles.input_field}`}>
//                     <MdEmail className={styles.form_icon} />
//                     <input type="text" className={`${styles.input}`} placeholder="Email" />
                    
//                 </label>
                
//                 <label className={`input input-bordered  
//                     ${styles.remove_outline} ${styles.input_field}`}>
//                     <MdPhoneAndroid className={styles.form_icon} />
//                     <input type="text" className={`${styles.input}`} placeholder="Phone Number" />
//                 </label>

//             </div>

//             <textarea className={`textarea textarea-bordered bgMain w-[100%] min-h-[200px] mb-2 
//                 ${styles.remove_outline}`} placeholder="So . . . what's up?"></textarea>
//             <button className={`${styles.submit_button} btn btn-active`}>Send</button>

//         </div>
//     )
// }

// export default ContactForm;


