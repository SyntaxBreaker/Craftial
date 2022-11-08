import Image from "next/image";
import Link from "next/link";
import { IOffer } from "types";
import styles from "./card.module.scss";

function Card(offer: IOffer) {
    return (
        <Link href={`/${offer._id}`}>
            <div className={styles["offer-card"]}>
                <div className={styles["offer-card__header"]}>
                    <Image
                        src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_960_720.jpg"
                        alt=""
                        width="100%"
                        height="50px"
                        sizes="(min-width: 768px) 960px, 720px"
                        className={styles["offer-card__image"]}
                    />
                </div>
                <div className={styles["offer-card__body"]}>
                    <h3
                        className={`${styles["offer-card__name"]} ${styles["offer-card__name--golden"]}`}
                    >
                        {offer.name}
                    </h3>
                    <p className={styles["offer-card__price"]}>
                        Price:{" "}
                        <span
                            className={`
                                        ${styles["offer-card__price--bold"]}
                                        ${styles["offer-card__price--golden"]}
                                    `}
                        >
                            ${offer.price}
                        </span>
                    </p>
                    <p className={styles["offer-card__location"]}>
                        Location:{" "}
                        <span
                            className={`
                                        ${styles["offer-card__location--bold"]}
                                        ${styles["offer-card__location--golden"]}
                                    `}
                        >
                            {offer.location}
                        </span>
                    </p>
                    <p className={styles["offer-card__date"]}>
                        Publication date:{" "}
                        <span
                            className={`
                                    ${styles["offer-card__date--bold"]}
                                    ${styles["offer-card__date--golden"]}
                                `}
                        >
                            {offer.createdAt.split("T")[0]}
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default Card;
