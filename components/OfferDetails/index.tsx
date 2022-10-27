import { useRouter } from "next/router";
import styles from "./offerDetails.module.scss";
import Image from "next/image";
import { IOffer } from "../../types";
import { useUser } from "@auth0/nextjs-auth0";

function OfferDetails({
    _id,
    name,
    location,
    price,
    email,
    phoneNumber,
    description,
}: IOffer) {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    function removeOffer() {
        fetch(`api/removeOffer/${_id}`, {
            method: 'DELETE'
        })
        router.push("/");
    };

    return (
        <div className={styles["offer-details"]}>
            {user?.email === email && (
                <button
                    className={`${styles["offer-details__button"]} ${styles["offer-details__button--edit"]}`}
                >
                    Edit offer
                </button>
            )}
            {user?.email === email && (
                <button
                    className={`${styles["offer-details__button"]} ${styles["offer-details__button--remove"]}`}
                    onClick={removeOffer}
                >
                    Remove offer
                </button>
            )}
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
