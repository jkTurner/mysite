import { Playfair_Display } from "next/font/google";
import { aboutText } from "./aboutText";
import styles from "../about.module.css"

const playfair = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'], 
    display: 'swap',
  });

const SectionTwo = () => {
    return (
        <div className="flex flex-col">
            {/* <div className="flex flex-row items-baseline my-10 mt-16"> */}

            <div className={`${styles.section2_container} mt-10`}>
                {/* within my portfolio */}
                <div className={`${playfair.className} ${styles.section2_header_text}`}>
                    {aboutText.section2_1}
                </div>
                <div className={styles.section2_detail_text}>
                    {aboutText.section2_2}
                </div>
            </div>

            <div className={`${styles.section2_container} my-10`}>
                {/* I believe that  */}
                <div className={`${playfair.className} ${styles.section2_header_text}`}>
                    {aboutText.section3_1}
                </div>
                <div className={styles.section2_detail_text}>
                    {aboutText.section3_2}
                </div>
            </div>

            
            <div className={`${styles.end_text_container} flex justify-center`}>
                {aboutText.end}
            </div>
        </div>
    )
}

export default SectionTwo;