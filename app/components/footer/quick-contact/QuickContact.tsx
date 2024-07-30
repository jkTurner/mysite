"use client"
import { useState } from 'react';
import styles from "./quickContact.module.css";

const QuickContact = () => {
    const [fullName, setFullName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const res = await fetch('/api/util/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, contactEmail, message }),
            });

            if (res.ok) {
                setStatus('Email sent successfully');
                setFullName('');
                setContactEmail('');
                setMessage('');
            } else {
                setStatus('Failed to send email');
            }
        } catch (error) {
            console.error(error);
            setStatus('Failed to send email');
        }
    };

    return (
        <div className={`${styles.outter_container}`}>
            <div className="flex flex-col w-[100%] max-w-[400px]">
                <h1 className="text-[var(--jkGold)]">Quick Contact</h1>
                <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
                    
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            id="fullName"
                            className={styles.form_input} 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            id="contactEmail"
                            className={styles.form_input} 
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            required
                        />
                    </div>

                    <textarea 
                        placeholder="Message"
                        id="message" 
                        className={styles.form_input_message}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />

                    <button type="submit" className={styles.send_button}>
                        <span className={styles.send_button_text}>Send</span>
                        <span className={styles.send_button_fx}></span>
                    </button>

                    {status && <p>{status}</p>}
                    
                </form>
            </div>
        </div>
    )
}

export default QuickContact;