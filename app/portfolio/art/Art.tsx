import styles from "../portfolio.module.css"
import { PortfolioText as text } from "../components/PortfolioText";
import ArtSkills from "./components/ArtSkills";
import ArtTools from "./components/ArtTools";
import Link from "next/link";

const Art = () => {
    return (
        <div id="art" className={`${styles.area_container}`}>
            <h2>Art</h2>

            <p>{text.art_1}</p>

            <Link href="/showcase/art">
                <button className={`btn btn-active main_button`}>View Gallery</button>
            </Link>

            <ArtSkills />

            <p>{text.art_2}</p>
            <p>{text.art_3}</p>
            <p>{text.art_4}</p>
            <p>{text.art_5}</p>
            
            <ArtTools />
        </div>
    )
}

export default Art;