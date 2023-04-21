import Image from "next/image";
import Link from "next/link";
import { IOffer } from "types";
import styles from "./card.module.scss";

function Card(offer: IOffer) {
  return (
    <Link href={`/${offer._id}`}>
      <a className={styles["offer-card"]} tabIndex={6}>
        <div className={styles["offer-card__header"]}>
          <Image
            src={offer.images[0].url}
            alt=""
            width="100%"
            height="70px"
            sizes="(min-width: 768px) 960px, 720px"
            className={styles["offer-card__image"]}
          />
        </div>
        <div className={styles["offer-card__body"]}>
          <div className={styles["offer-card__section"]}>
            <h2 className={`${styles["offer-card__name"]}`}>{offer.name}</h2>
            <p className={styles["offer-card__price"]}>${offer.price}</p>
          </div>
          <hr className={styles["offer-card__divider"]} />
          <div
            className={`${styles["offer-card__section"]} ${styles["offer-card__section--column"]}`}
          >
            <p className={styles["offer-card__email"]}>
              <Image src='/email.svg' height={18} width={18} alt='Email icon' /> {offer.email}
            </p>
            <p className={styles["offer-card__location"]}>
              <Image src='/location.svg' height={18} width={18} alt='Location icon' />  {offer.location}
            </p>
            <p className={styles["offer-card__phone-number"]}>
              <Image src='/phone.svg' height={18} width={18} alt='Phone icon' />  {offer.phoneNumber}
            </p>
          </div>
          <hr className={styles["offer-card__divider"]} />
          <div className={styles["offer-card__section"]}>
            <p className={styles["offer-card__description"]}>
              {offer.description}
            </p>
          </div>
          <div className={styles["offer-card__section"]}>
            <p className={styles["offer-card__date"]}>
              Publication date: {offer.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
