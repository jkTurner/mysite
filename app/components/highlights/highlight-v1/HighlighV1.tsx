import Image from "next/image";
import styles from "./highlightsV1.module.css"
import Link from "next/link";

type HighlightType = {
    title: string;
    desc: string;
    image: string;
    link: string;
    alt: string;
}

const HighlightV1 = ({ title, desc, image, link, alt }: HighlightType) => {
    return (
        <div className={styles.highlight_bg}>
            <div className={styles.highlight_container}>
                <div className={styles.text_container}>
                    <Link href={link}>
                        <h3>{title}</h3>
                    </Link>
                    <p>{desc}</p>
                    <a href={link}>see more</a>
                </div>
                <Link href={link} className={styles.image_link}>
                    <div className={styles.image_container}>
                        <Image
                            src={image}
                            alt={alt}
                            className={styles.image_style}
                            fill
                            priority    
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HighlightV1;