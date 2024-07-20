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
            
                <p>Objectives-driven and results-oriented business administration professional with a strong background 
                    in project management and marketing seeking a challenging position to contribute expertise in driving 
                    successful project outcomes and utilizing marketing knowledge to achieve organizational goals.
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