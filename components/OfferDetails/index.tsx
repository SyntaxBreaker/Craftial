import styles from "./offerDetails.module.scss";
import Image from "next/image";
import { IOffer } from "../../types";

function OfferDetails({
    _id,
    name,
    location,
    price,
    email,
    phoneNumber,
    description,
}: IOffer) {
    return (
        <div className={styles["offer-details"]}>
            <h2 className={styles["offer-details__name"]}>{name}</h2>
            <p
                className={`${styles["offer-details__location"]} ${styles["offer-details__location--bold"]}`}
            >
                {location}
            </p>
            <p
                className={`${styles["offer-details__price"]} ${styles["offer-details__price--bold"]}`}
            >
                ${price}
            </p>
            <div className={styles["offer-contact"]}>
                <p
                    className={`${styles["offer-contact__email"]} ${styles["offer-contact__email--bold"]}`}
                >
                    {email}
                </p>
                <p
                    className={`${styles["offer-contact__phone-number"]} ${styles["offer-contact__phone-number--bold"]}`}
                >
                    {phoneNumber}
                </p>
            </div>
            <p className={styles["offer-details__description"]}>
                Description:{" "}
                <span
                    className={`${styles["offer-details__description--bold"]} ${styles["offer-details__description--green"]}`}
                >
                    {description}
                </span>
            </p>
        </div>
    );
}

export default OfferDetails;
