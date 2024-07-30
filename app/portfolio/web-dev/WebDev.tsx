import styles from "../portfolio.module.css"
import { PortfolioText as text } from "../components/PortfolioText";
import Technologies from "./Technologies";
import Link from "next/link";

const WebDev = () => {
    return (
        <div id="webdev" className={`${styles.area_container} `}>
            <h2 className="">Web Development</h2>

            <p>{text.web_text_1}</p>

            <Link href="/showcase">
                <button className={`btn btn-active main_button`}>Showcase</button>
            </Link>

            <div>
                <Technologies />
            </div>

            <p>{text.web_text_3}</p>
            <p>{text.web_text_end}</p>
        </div>
    )
}

export default WebDev;