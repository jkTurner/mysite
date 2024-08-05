import Image from "next/image";
import styles from "./profileCard.module.css"

interface UserInfoProp {
    name: string;
    image: string;
}

const ProfileCard:React.FC<UserInfoProp> = ({ name, image }) => {
    return (
        <div className="defaultCard flex gap-4 max-w-[480px] w-full items-center">
            <div className={styles.profile_image_container}>
                { image ? (
                    <Image 
                        src={image} 
                        alt={name}
                        fill
                        sizes="auto"
                        priority
                        className={styles.profile_image}
                    />
                ) : (
                    <Image 
                        src="/images/thumbnail-placeholder.jpg"
                        alt={name}
                        fill
                        sizes="auto"
                        priority
                        className={styles.profile_image}
                    />
                )}
            </div>
            <div className="text-xl">
                {name}
            </div>
        </div>
    )
}

export default ProfileCard;