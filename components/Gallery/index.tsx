import styles from "./gallery.module.scss";
import { useState } from "react";
import Image from "next/image";

const images: string[] = [
    "https://cdn.pixabay.com/photo/2022/10/16/13/53/early-morning-7525151_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/08/26/04/19/beach-7411683_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/10/13/07/54/crane-houses-7518536_960_720.jpg",
];

function Gallery() {
    const [imageIndex, setImageIndex] = useState<number>(0);

    return (
        <div className={styles['image-wrapper']}>
            <Image
                src={images[imageIndex]}
                alt=""
                height="300px"
                width="300px"
            />
            <button
                className={`${styles['button']}`}
                onClick={() =>
                    setImageIndex(
                        imageIndex === 0 ? images.length - 1 : imageIndex - 1
                    )
                }
            >
                Previous
            </button>
            <button
                className={`${styles['button']}}`}
                onClick={() =>
                    setImageIndex(
                        imageIndex === images.length - 1 ? 0 : imageIndex + 1
                    )
                }
            >
                Next
            </button>
        </div>
    );
}

export default Gallery;
