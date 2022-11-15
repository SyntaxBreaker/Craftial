import styles from "./gallery.module.scss";
import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import ArrowLeft from "public/arrow-left.svg";
import ArrowRight from "public/arrow-right.svg";
import { IImages } from "types";

function Gallery({ images }: IImages) {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResizeWindow = () =>
            window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <div className={styles["gallery-wrapper"]}>
            {isMobile ? (
                <>
                    <Image
                        src={images[imageIndex].url}
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
                    {images.map((image) => (
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
