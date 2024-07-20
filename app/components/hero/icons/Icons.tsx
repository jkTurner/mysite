import { IoChatbubblesOutline } from "react-icons/io5";
import { LuCode2 } from "react-icons/lu";
import { BsCardChecklist } from "react-icons/bs";
import { PiPaintBrushDuotone } from "react-icons/pi";
import styles from "./icons.module.css"

const Icons = () => {
    return (
        <div className={styles.icons_container}>
                    <div className={styles.icons_des}>
                        <LuCode2 />
                        <p>WEB DEV</p>
                    </div>
                    <div className={styles.icons_des}>
                        <BsCardChecklist />
                        <p>PM</p>
                    </div>
                    <div className={styles.icons_des}>
                        <IoChatbubblesOutline />
                        <p>MARKETING</p>
                    </div>
                    <div className={styles.icons_des}>
                        <PiPaintBrushDuotone />
                        <p>ART</p>
                    </div>
                </div>
    )
}

export default Icons;