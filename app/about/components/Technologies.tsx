import styles from "../about.module.css"

import { ImHtmlFive } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si"
import { SiDjango } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { GiDaisy } from "react-icons/gi";
import { SiPostman } from "react-icons/si";
import { SiFilezilla } from "react-icons/si";

const Technologies = () => {
    return (
        <div className={`${styles.technologies_container} pb-10`}>
                <div className="flex justify-center mb-10">
                    <span>Technologies I Use</span>
                </div>
                <div className="flex flex-row justify-center flex-wrap gap-5 mx-8">
                    <div>
                        <ImHtmlFive className="text-3xl" />
                    </div>
                    <div>
                        <ImCss3 className="text-3xl" />
                    </div>
                    <div>
                        <SiJavascript className="text-3xl" />
                    </div>
                    <div>
                        <SiReact className="text-3xl" />
                    </div>
                    <div>
                        <SiNextdotjs className="text-3xl" />
                    </div>
                    <div>
                        <SiTypescript className="text-3xl" />
                    </div>
                    {/* <div>
                        <SiGraphql className="text-3xl" />
                    </div> */}
                    <div>
                        <SiMongodb className="text-3xl" />
                    </div>
                    <div>
                        <SiPrisma className="text-3xl" />
                    </div>
                    <div>
                        <SiPostman className="text-3xl" />
                    </div>
                    <div>
                        <SiDjango className="text-3xl" />
                    </div>
                    <div>
                        <SiTailwindcss className="text-3xl" />
                    </div>
                    <div>
                        <GiDaisy className="text-3xl" />
                    </div>
                    <div>
                        <SiShadcnui className="text-3xl" />
                    </div>
                    <div>
                        <SiCloudinary className="text-3xl" />
                    </div>
                    <div>
                        <SiGithub className="text-3xl" />
                    </div>
                    <div>
                        <SiFilezilla className="text-3xl" />
                    </div>
                    <div>
                        <SiFigma className="text-3xl" />
                    </div>
                    <div>
                        <DiPhotoshop className="text-4xl" />
                    </div>
                </div>
            </div>
    )
}

export default Technologies;