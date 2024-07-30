import styles from "../contact.module.css"
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

const ContactInfo = () => {
    return (
        <div className={styles.contact_info}>
            <div className={styles.contact_info_element}>
                <IoPerson className="text-[18px]" />
                <p className={styles.contact_info_text}>Jakkrit Turner</p>
            </div>
            <div className={styles.contact_info_element}>
                <MdEmail className="text-[20px]" />
                <p className={styles.contact_info_text}>jkturner107@gmail.com</p>
            </div>
            <div className={styles.contact_info_element}>
                <IoLocationSharp className="text-[20px]" />
                <p className={styles.contact_info_text}>Las Vegas, USA</p>
            </div>
            <div className={styles.contact_info_element}>
                <SiGithub className="text-[20px]" />
                <p className={styles.contact_info_text}>github.com/jkTurner</p>
            </div>
            <div className={styles.contact_info_element}>
                <SiLinkedin className="text-[20px]" />
                <p className={styles.contact_info_text}>jakkrit-turner</p>
            </div>
            <div className={styles.contact_info_element}>
                <SiInstagram className="text-[20px]" />
                <p className={styles.contact_info_text}>joshkturner</p>
            </div>
        </div>
    )
}

export default ContactInfo;