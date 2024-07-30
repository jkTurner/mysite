import styles from "../portfolio.module.css"
import { PortfolioText as text } from "../components/PortfolioText";
import PmSkills from "./components/PmSkills";
import PmCredentials from "./components/PmCredentials";

const ProjectManagement = () => {
    return (
        <div id="pm" className={`${styles.area_container}`}>
            <h2>Project Management</h2>

            <p>{text.pm_text_1}</p>

            <PmCredentials />

            <p>{text.pm_text_2}</p>
            
            <PmSkills />
            

            <p>{text.pm_text_3}</p>
        </div>
    )
}

export default ProjectManagement;