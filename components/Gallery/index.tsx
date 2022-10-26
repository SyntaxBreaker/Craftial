import styles from "./gallery.module.scss";
import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import ArrowLeft from "../../public/arrow-left.svg";
import ArrowRight from "../../public/arrow-right.svg";

interface IImage {
    id: number;
    url: string;
}

const images: IImage[] = [
    {
        id: 0,
        url: "https://cdn.pixabay.com/photo/2022/10/16/13/53/early-morning-7525151_960_720.jpg",
    },
    {
        id: 1,
        url: "https://cdn.pixabay.com/photo/2022/08/26/04/19/beach-7411683_960_720.jpg",
    },
    {
        id: 2,
        url: "https://cdn.pixabay.com/photo/2022/10/13/07/54/crane-houses-7518536_960_720.jpg",
    },
];

function Gallery() {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if (window.innerWidth > 720) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }, []);

    return (
        <div className={styles["gallery-wrapper"]}>
            {isMobile ? (
                <>
                    <Image
                        src={
                            images.find((image) => imageIndex === image.id)?.url
                        }
                        alt=""
                        width="150px"
                        height="150px"
                        sizes="(min-width: 768px) 960px, 720px"
                        className={styles["gallery__image"]}
                    />
                    <button
                        className={`${styles["gallery__button"]} ${styles["gallery__button--prev"]}`}
                        onClick={() =>
                            setImageIndex(
                                imageIndex === 0
                                    ? images.length - 1
                                    : imageIndex - 1
                            )
                        }
                    >
                        <Image
                            src={"/arrow-left.svg"}
                            alt=""
                            width="100%"
                            height="50px"
                            sizes="(min-width: 768px) 960px, 720px"
                        />
                    </button>
                    <button
                        className={`${styles["gallery__button"]} ${styles["gallery__button--next"]}`}
                        onClick={() =>
                            setImageIndex(
                                imageIndex === images.length - 1
                                    ? 0
                                    : imageIndex + 1
                            )
                        }
                    >
                        <Image
                            src={"/arrow-right.svg"}
                            alt=""
                            width="100%"
                            height="50px"
                            sizes="(min-width: 768px) 960px, 720px"
                        />
                    </button>
                </>
            ) : (
                <>
                    {images.map((image, index) => (
                        <Fragment key={image.id}>
                            <Image
                                src={image.url}
                                alt=""
                                width="150px"
                                height="150px"
                                sizes="(min-width: 768px) 960px, 720px"
                                className={styles["gallery__image"]}
                            />
                        </Fragment>
                    ))}
                </>
            )}
        </div>
    );
}

export default Gallery;
