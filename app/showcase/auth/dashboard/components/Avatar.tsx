import Image from "next/image";
import styles from "../dashboard.module.css"

const Avatar = ({image}: {image: string}) => {

    const imageUrl = image || '/images/default-profile.png';


    return (
        <div>
            <div className="avatar">
                <div className={`${styles.profile_image_container} w-24 rounded-full`}>
                    <Image
                        src={imageUrl}
                        alt="profile image"
                        fill
                        priority
                        sizes="200"
                        className={styles.profile_image}
                        />
                </div>
            </div>
        </div>
    )
}

export default Avatar;



// src="/images/profile/card-img-001.png"