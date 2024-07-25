"use client"
import { useState } from 'react';
import { galleryData } from "@/data/galleryData";
import Masonry from 'react-masonry-css';
import styles from "./galleryImage.module.css";
import GalleryImage from "./GalleryImage";
import ImageModal from "./ImageModal";
import Image from 'next/image';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const MasonryGrid = () => {
    const [selectedImage, setSelectedImage] = useState({ image: '', desc: '' });
    const [showModal, setShowModal] = useState(false);

    const onOpenModal = (image: string, desc: string) => {
        setSelectedImage({ image, desc });
        setShowModal(true);
    };

    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.my_masonry_grid}
                columnClassName={styles.my_masonry_grid_column}>
                {galleryData && galleryData.length > 0 ? (
                    galleryData.map((image) => (
                        <GalleryImage 
                            key={image.id}
                            id={image.id}
                            image={image.image}
                            desc={image.desc}
                            onClick={() => onOpenModal(image.image, image.desc)}
                        />
                    ))
                ) : (
                    <div>No images to display</div>
                )}
            </Masonry>

            {showModal && (
                <ImageModal onClose={onCloseModal}>
                    <Image src={selectedImage.image} alt={selectedImage.desc} 
                    layout="responsive" width={800} height={600} className={styles.modal_image} />
                    <p className="mt-2">{selectedImage.desc}</p>
                </ImageModal>
            )}
        </div>
    );
};

export default MasonryGrid;


