// File: F:\Projects\Portfolio\jkturner_site\app\showcase\art\components\MasonryGrid.tsx
"use client"
import { useState } from 'react';
import { galleryData } from "@/data/galleryData";
import Masonry from 'react-masonry-css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from "./galleryImage.module.css";
import GalleryImage from "./GalleryImage";
import { GrFormClose } from "react-icons/gr";
import Image from 'next/image';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const MasonryGrid = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState({ image: '', desc: '' });

    const onOpenModal = (image: string, desc: string) => {
        setSelectedImage({ image, desc });
        setOpen(true);
    };

    const onCloseModal = () => setOpen(false);

    const closeIcon = (
        <GrFormClose className='text-white' size={28} />
    );

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
            <Modal 
                open={open} 
                onClose={onCloseModal} 
                center 
                closeIcon={closeIcon}
                classNames={{
                    overlay: styles.reactResponsiveModalOverlay,
                }}>
                <div className={styles.modal_image_container}>
                    <Image src={selectedImage.image} alt={selectedImage.desc} layout="responsive" width={800} height={600} className={styles.modal_image} />
                </div>
                <p>{selectedImage.desc}</p>
            </Modal>
        </div>
    );
};

export default MasonryGrid;
