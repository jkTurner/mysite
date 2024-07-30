import styles from "../portfolio.module.css"
import { PortfolioText as text } from "../components/PortfolioText";
import MarketingSkills from "./components/MarketingSkills";
import MarketingCredentials from "./components/MarketingCredentials";

const Marketing = () => {
    return (
        <div id="marketing" className={`${styles.area_container}`}>
            <h2>Marketing</h2>

            <p>{text.marketing_1}</p>

            {/* <Certs /> */}
            <MarketingCredentials />

            <p>{text.marketing_2}</p>

            {/* <Concepts /> */}
            <MarketingSkills />
            
            <p>{text.marketing_3}</p>
            <p>{text.marketing_4}</p>
        </div>
    )
}

export default Marketing;