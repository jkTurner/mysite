import Image from "next/image";
import ContactForm from "./component/ContactForm";
import ContactInfo from "./component/ContactInfo";
import styles from "./contact.module.css"

const ContactPage = () => {
    return (
        <div className="h-full flex flex-col justify-between">
            <div className={styles.main_container}>
                <div className={styles.contact_form_container}>
                    <h1 className={styles.title}>
                        What&apos;s on your <span className="text-[var(--jkAccent)]">mind?</span>
                    </h1>
                    <ContactForm />
                </div>
                <div className={styles.contact_info_container}>
                    <h1 className={styles.title}>
                        Contact <span className="text-[var(--jkAccent)]">Info</span>
                    </h1>
                    <ContactInfo />
                </div>

            </div>

            <div className="flex justify-center mt-2">           
                <div className="chat chat-end self-start">
                    <div className="chat-bubble font-light text-sm">Thank you for your message, I&apos;ll get back to you soon! Have a wonderful day, nya!</div>
                </div>
                <div>
                    <Image
                        src="/images/contact/cute-cat.png"
                        alt="cute-cat"
                        height={200}
                        width={200}
                        priority
                        className={styles.cat_image}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;