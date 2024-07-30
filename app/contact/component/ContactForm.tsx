"use client"
import { useState } from "react"
import styles from "../contact.module.css"

const ContactForm = () => {

    const [topic, setTopic] = useState("Topic");
    const [fullName, setFullName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        console.log(topic);
        console.log(fullName);
        console.log(contactEmail);
        console.log(phoneNumber);
        console.log(message);

        if (topic === "Topic") {
            setStatus("Please select topic");
            return
        }

        try {
            const res = await fetch('/api/util/send-contact-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ topic, fullName, contactEmail, message }),
            });
            if (res.ok) {
                setStatus("Email sent successfully");
                setTopic("Topic");
                setFullName("");
                setContactEmail("");
                setPhoneNumber("");
                setMessage("");
            } else {
                setStatus("Failed to send email, please try again");
            }
        } catch (error) {
            console.error(error);
            setStatus("Failed to send email, please try again");
        }
    };

    return (
        <div className={`${styles.contact_form}`}>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">

                <div className={styles.form_input_container}>
                    <select 
                        className={`select select-bordered 
                        ${styles.form_select} 
                        ${styles.remove_outline}`} 
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required >
                        {/* defaultValue="Topic"> */}
                        <option disabled value="Topic">Topic</option>
                        <option value="Hiring">Hiring</option>
                        <option value="Collaborating">Collaborating</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text"
                        placeholder="Full Name"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={styles.form_input}
                        required
                    />
                </div>
                <div className="flex gap-2">
                    <input type="text"
                        placeholder="Email"
                        id="contactEmail"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className={styles.form_input}
                        required
                    />
                    <input type="text"
                        placeholder="Phone (optional)"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className={styles.form_input}
                    />
                </div>

                <textarea 
                    className={`textarea textarea-bordered bgMain w-[100%] min-h-[200px] mb-2 
                    ${styles.remove_outline}`} 
                    placeholder="Message . . ." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                {status && <p>{status}</p>}
                <button className={`${styles.submit_button} btn btn-active`}>Send</button>

            </form>
        </div>
    )
}

export default ContactForm;