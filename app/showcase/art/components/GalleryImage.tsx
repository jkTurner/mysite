import Image from "next/image";
import styles from "./galleryImage.module.css";

interface GalleryImageProps {
    id: string;
    image: string;
    desc: string;
    onClick: () => void;
}

const GalleryImage = ({ id, image, desc, onClick }: GalleryImageProps) => {
    return (
        <div className={styles.art_item} onClick={onClick}>
            <Image 
                src={image}
                alt={desc}
                layout="responsive"
                width={300}
                height={500}
            />
        </div>
    )
}

export default GalleryImage;


// import Image from "next/image";
// import styles from "./galleryImage.module.css";

// interface GalleryImageProps {
//     id: string;
//     image: string;
//     desc: string;
// }

// const GalleryImage = ({ id, image, desc }: GalleryImageProps) => {
//     return (
//         <div className={styles.art_item}>
//             <Image 
//                 src={image}
//                 alt={desc}
//                 layout="responsive"
//                 width={300}
//                 height={500}
//             />
//         </div>
//     )
// }

// export default GalleryImage;


