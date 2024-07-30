import styles from "./hero.module.css"
import Icons from "./icons/Icons";

const Hero = () => {
    return (
        <div className={`${styles.hero_bg}`}>
            <div className={styles.hero_container}>
                <div className={styles.hero_text}>
                    <h3>VALUE <span>IS</span></h3>
                    <h3><span>CO-</span>CREATED</h3>
                </div>
            
                <p>Driven and results-oriented web developer with a strong background in creating dynamic and 
                    responsive web applications. Seeking a challenging position to leverage expertise in modern 
                    frameworks like React and Next.js to deliver high-quality web solutions and drive successful 
                    project outcomes.
                </p>
                
                <a href="" className={styles.hero_btn}>
                    <span className={styles.hero_btn_text}>Download Resume</span>
                    <span className={styles.hero_btn_fx}></span>
                </a>

                <Icons />
                
            </div>
        </div>
    )
}

export default Hero;