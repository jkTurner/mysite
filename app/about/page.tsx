import styles from "./about.module.css"
import AboutHero from "./components/AboutHero";

const AboutPage = () => {
    return (
        <div className={`${styles.about_bg} w-full`}>
            <div className="flex mx-auto max-w-[1280px]">
                <AboutHero />
            </div>
        </div>
    )
}

export default AboutPage;