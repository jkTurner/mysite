import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import styles from "../about.module.css"
import { aboutText } from "./aboutText";
import SectionTwo from "./SectionTwo";
import Link from "next/link";
import Credentials from "./Credentials";
import DisplayTech from "./DisplayTech";

const playfair = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'], 
    display: 'swap',
});

const AboutHero = () => {
    return (
        <div>
            <div className={styles.top_section_container}>
                {/* prevent image deform */}
                <div>
                    <div className={`${styles.image_container} mx-4`}>
                        <Image
                            src="/images/about/self-img-bw-c.jpg"
                            alt="Jakkrit Turner Image"
                            fill
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                </div>

                <div className="mx-8 mt-4">

                    {/* about intro text */}
                    <h1 className={`${playfair.className} text-4xl font-medium textHero`}>
                        {aboutText.greeting}
                    </h1>
                    <p className="mt-6">
                        {aboutText.intro}
                    </p>
                    <p className="mt-10">
                        {aboutText.intro2}
                    </p>

                    {/* 3 buttons */}
                    <div className="mt-10 flex gap-2 flex-wrap">
                        <button className={`btn btn-active ${styles.about_buttons}`}>Download Resume</button>
                        <Link href="/portfolio">
                            <button className={`${styles.about_buttons} btn btn-active`}>Portfolio</button>
                        </Link>
                        <Link href="/showcase">
                            <button className={`${styles.about_buttons} btn btn-active`}>Showcase</button>
                        </Link>
                    </div>

                </div>   
            </div>

            {/* section 1 */}
            <div className={`${styles.section1_container} flex flex-row`}>
                <p>
                    <span className="font-bold">{aboutText.section1_1}</span>
                    {aboutText.section1_2}
                </p>
            </div>

            <DisplayTech />

            <Credentials />

            <SectionTwo />

        </div>
    )
}

export default AboutHero;