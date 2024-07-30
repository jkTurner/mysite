import styles from "../about.module.css"
import { technologies } from "@/data/technologies";

const DisplayTech = () => {
    return (
        <div className={`${styles.technologies_container} pb-10`}>
            
            <div className="flex justify-center mb-10">
                <span>Technologies I Use</span>
            </div>

            <div className="flex flex-row justify-center flex-wrap gap-5 mx-8">
                {technologies.map((tech, index) => {
                    const ImageComponent = tech.image;
                    return (
                        <div key={index} className="text-3xl">
                            <ImageComponent />
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default DisplayTech;